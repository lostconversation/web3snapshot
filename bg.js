const canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 800;

// Create a WebGL context
var gl = canvas.getContext('webgl');

gl.viewport(0, 0, canvas.width, canvas.height);
// Define the vertices for the geometrical pattern
// In this case, we're using a grid of triangles
var vertices = [-1, -1, 1, -1, -1, 1, 1, 1];

// Create a buffer for the vertices
var vertexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

// Create the vertex shader
var vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(
  vertexShader,
  `
      attribute vec2 a_position;

      void main() {
        gl_Position = vec4(a_position, 0, 1);
      }
    `
);
gl.compileShader(vertexShader);

// Create the fragment shader
var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(
  fragmentShader,
  `
  precision mediump float;

  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_time;

  
  void main() {
    // Compute the position of the current pixel in the range 0.0 - 1.0
    vec2 pos = gl_FragCoord.xy / u_resolution;
  
    // Compute the distance of the current pixel from the mouse position
    float dist = distance(pos, u_mouse / u_resolution);
  
    // Apply a "liquid morph" effect based on the distance and time
    pos -= u_mouse / u_resolution;
    pos *= 1.0 + 0.5 * sin(u_time + dist * 5.0);
    pos += u_mouse / u_resolution;
  
    // Compute the color for the current pixel
    vec3 color = vec3(1.0);
    if (dist > 0.5) {
      color = vec3(0.0);
    }

    color.r = abs(sin(pos.x * 10.0));
    color.g = abs(cos(pos.y * 10.0));
    color.b = abs(sin(pos.x + pos.y));

    // Apply a circular mask to the canvas
    float blurAmount = 0.02; // Adjust this value to control the amount of blur

    float mask = 1.0 - step(0.2, distance(gl_FragCoord.xy / u_resolution, vec2(0.5, 0.5)));

    vec2 st = gl_FragCoord.xy / u_resolution;
    float blur = 0.0;
    for (int i = -5; i <= 5; i++) {
        for (int j = -5; j <= 5; j++) {
            vec2 offset = vec2(float(i), float(j)) * blurAmount;
            blur += 1.0 - step(0.3, distance(st + offset, vec2(0.5)));
        }
    }
    mask = blur / 111.0;
    
    // Output the computed color
    gl_FragColor = vec4((1.0 - mask) * vec3(20.0/255.0, 20.0/255.0, 20.0/255.0) + mask * color, 1.0);


  }
  
    `
);
gl.compileShader(fragmentShader);

// Create a program that combines the vertex and fragment shaders
var program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
gl.useProgram(program);

// Set the resolution uniform in the fragment shader
var resolutionUniform = gl.getUniformLocation(program, 'u_resolution');
gl.uniform2f(resolutionUniform, canvas.width, canvas.height);

// Set the time uniform in the fragment shader
var timeUniform = gl.getUniformLocation(program, 'u_time');

// Set the position attribute in the vertex shader
var positionAttribute = gl.getAttribLocation(program, 'a_position');
gl.enableVertexAttribArray(positionAttribute);
gl.vertexAttribPointer(positionAttribute, 2, gl.FLOAT, false, 0, 0);

// Set up the mouse move event listener
canvas.addEventListener('mousemove', function (event) {
  // Get the mouse position in pixel coordinates
  var rect = canvas.getBoundingClientRect();
  var mouseX = event.clientX - rect.left;
  var mouseY = event.clientY - rect.top;

  // Set the mouse uniform in the fragment shader
  var mouseUniform = gl.getUniformLocation(program, 'u_mouse');
  gl.uniform2f(mouseUniform, mouseX, mouseY);
});

// Set up the animation loop
var startTime = Date.now();
function animate() {
  // Set the time uniform in the fragment shader
  var time = (Date.now() - startTime) / 1000;
  gl.uniform1f(timeUniform, time);

  // Draw the geometry
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertices.length / 2);

  // Request the next frame
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

///////////////////////////////////////////////////////////////////////// CLICK
