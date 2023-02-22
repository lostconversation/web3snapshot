function balanceButtons(buttons, container) {
  // Calculate the maximum number of buttons per line
  // const maxButtonsPerLine = Math.floor(container.offsetWidth / (buttons[0].offsetWidth + 0));
  const neededLines = Math.floor(
    (container.offsetWidth / ((buttons[0].offsetWidth + 16) * buttons.length)) *
      buttons.length
  );
  let maxBtnNice = Math.ceil(buttons.length / 2);
  maxBtnNice =
    neededLines < maxBtnNice
      ? neededLines
      : container.offsetWidth > (buttons[0].offsetWidth + 16) * buttons.length
      ? buttons.length
      : maxBtnNice;
  // console.log(container.offsetWidth, (buttons[0].offsetWidth + 0) * buttons.length)
  // console.log(neededLines, maxBtnNice)
  // Initialize an array to store the balanced lines
  const balancedLines = [];

  // Initialize an array to store the current line
  let currentLine = [];

  // Iterate through the buttons and add them to the current line until the maximum number of buttons is reached
  for (const button of buttons) {
    if (currentLine.length === maxBtnNice) {
      balancedLines.push(currentLine);
      currentLine = [];
    }
    currentLine.push(button);
  }

  // Add the remaining buttons to the balanced lines array
  balancedLines.push(currentLine);

  // Clear the container
  container.innerHTML = '';

  // Add the balanced lines to the container
  for (const line of balancedLines) {
    const div = document.createElement('div');
    // div.style.padding = '10px';
    for (const button of line) {
      button.style.margin = '5px';
      div.appendChild(button);
    }
    container.appendChild(div);
  }
}

balanceButtons(buttons, containerMenu);

// let openMenu = 0;

// window.addEventListener('click', function (e) {
//   console.log('rrrr');
//   if (openMenu == 0) {
//     document
//       .getElementById('mainMenu2')
//       .addEventListener('click', function (event) {
//         console.log('asdf');
//         // document.getElementById('empty').style.display = 'block';
//         document.getElementById('menuIframe').style.display = 'block';
//         setTimeout(function doSomethingLater() {
//           console.log('dfgh');
//           return (openMenu = 1);
//         }, 200);
//       });
//   } else if (openMenu == 1) {
//     console.log('aggg');
//     if (document.getElementById('menuIframe').contains(e.target)) {
//       // Clicked in box
//       console.log('yes');
//       // document.getElementById('menuIframe').style.display = 'none';
//       // openMenu = 0;
//     } else {
//       // Clicked outside the box
//       console.log('no');
//       document.getElementById('menuIframe').style.display = 'none';
//       openMenu = 0;
//     }
//   }
// });

window.addEventListener('resize', function () {
  // balanceLines(subt);
  balanceButtons(buttons, containerMenu);
  // balanceButtons(buttonsBottom, containerMenuBottom);
  // balanceButtons(buttonsMain, containerMenuMain);
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 160) {
    // document.querySelector('#navBar').style.top = '0';
    // document.querySelector('#navBar').style.padding = '0';
    // document.querySelector('#navBar').style.backgroundColor = 'rgba(0, 0, 0, 0.7');
    document.querySelector('#navBar').style.pointerEvents = 'all';
    document.querySelector('#navBar').classList.remove('navBarTop');
  } else {
    document.querySelector('#navBar').classList.add('navBarTop');
    // document.querySelector('#navBar').style.top = '-100px';
    // document.querySelector('#navBar').style.padding = '100px  0';
    // document.querySelector('#navBar').style.backgroundColor = 'rgba(0, 0, 0, 0)';
    document.querySelector('#navBar').style.pointerEvents = 'none';
  }
});

document.querySelector('#navBar').addEventListener('click', function () {
  window.scrollTo(0, 0);
  // console.log('ttt');
});

/////////////////////////////////////////////////////////////////////////////////////// dropdown

const canvaz = document.body;
const svg = document.getElementById('logoIconClick');

document.addEventListener('click', function (event) {
  console.log('2');
  let dropdowns = document.getElementsByClassName('dropdown');
  for (let i = 0; i < dropdowns.length; i++) {
    let dropdown = dropdowns[i];
    if (
      dropdown.contains(event.target) &&
      dropdown.classList.toggle('active')
    ) {
      console.log('3');
      // if()
      document.getElementById('empty').style.display = 'block';
      dropdown.classList.add('active');
    } else {
      console.log('4');
      document.getElementById('empty').style.display = 'none';
      dropdown.classList.remove('active');
      // console.log(dropdown.classList.contains('active'));
      //// draw star
      const rect = canvaz.getBoundingClientRect();
      const x = event.clientX;
      const y = event.clientY;
      const newSvg = svg.cloneNode(true);
      newSvg.style.left = x - 15 + 'px';
      newSvg.style.top = y - 15 + 'px';
      newSvg.style.display = 'block';
      canvaz.appendChild(newSvg);
      animateSvg(newSvg);
      setTimeout(function doSomethingLater() {
        canvaz.removeChild(newSvg);
      }, 5000);
    }
  }
});

// var lastY = 0;
// document.addEventListener('wheel', (event) => {
//   console.log('object');
// });

function animateSvg(svgElement) {
  // Generate a random vector that represents the movement direction
  const angle = Math.random() * 2 * Math.PI;
  const dx = Math.cos(angle) * 4;
  const dy = Math.sin(angle) * 4;

  // Animate the SVG element to move in the random direction
  let x = parseFloat(svgElement.style.left);
  let y = parseFloat(svgElement.style.top);
  let reverseX = false;
  let reverseY = false;
  let size = 1;
  const animateStep = () => {
    if (x <= 0) {
      x = 0;
      reverseX = !reverseX;
    } else if (x + size * svgElement.clientWidth >= canvaz.clientWidth) {
      x = canvaz.clientWidth - size * svgElement.clientWidth;
      reverseX = !reverseX;
    }

    if (y <= 0) {
      y = 0;
      reverseY = !reverseY;
    } else if (y + size * svgElement.clientHeight >= canvaz.clientHeight) {
      y = canvaz.clientHeight - size * svgElement.clientHeight;
      reverseY = !reverseY;
    }

    x += reverseX ? -dx : dx;
    y += reverseY ? -dy : dy;

    svgElement.style.left = x + 'px';
    svgElement.style.top = y + 'px';
    requestAnimationFrame(animateStep);
  };
  animateStep();
}
