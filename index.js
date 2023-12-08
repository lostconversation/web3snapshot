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
      // button.style.display = 'none';
      if (button.classList.contains('selected')) {
        // console.log('asdf');
      }
    }
    container.appendChild(div);
  }
}
if (needOrder == 1) {
  balanceButtons(buttons, containerMenu);
}

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
  if (needOrder == 1) {
    balanceButtons(buttons, containerMenu);
  }
  // balanceButtons(buttonsBottom, containerMenuBottom);
  // balanceButtons(buttonsMain, containerMenuMain);
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 80) {
    document.querySelector('#topBtn').style.bottom = '10px';
    // document.querySelector('#navBar').style.top = '0'; THIS WAS ON
    // document.querySelector('#navBar').style.padding = '0';
    // document.querySelector('#navBar').style.backgroundColor = 'rgba(0, 0, 0, 0.7');
    // document.querySelector('#navBar').style.pointerEvents = 'all';  THIS WAS ON
    // document.querySelector('#navBar').classList.remove('navBarTop');
  } else {
    document.querySelector('#topBtn').style.bottom = '-50px';
    // document.querySelector('#navBar').classList.add('navBarTop');
    // document.querySelector('#navBar').style.top = '-100px';  THIS WAS ON
    // document.querySelector('#navBar').style.padding = '100px  0';
    // document.querySelector('#navBar').style.backgroundColor = 'rgba(0, 0, 0, 0)';
    //document.querySelector('#navBar').style.pointerEvents = 'none';  THIS WAS ON
  }
});

document.querySelector('#topBtn').addEventListener('click', function () {
  // window.open('../', '_self');
  window.scrollTo(0, 0);
  // console.log('ttt');
});

function openAbout() {
  document.getElementById('aboutFrame').style.display = 'block';
}

/////////////////////////////////////////////////////////////////////////////////////// dropdown

document.addEventListener('click', function (event) {
  // console.log('1');
  let dropdowns = document.getElementsByClassName('dropdown');
  for (let i = 0; i < dropdowns.length; i++) {
    let dropdown = dropdowns[i];
    if (event.target.id === 'menuuu') {
      console.log('1');
      dropdown.classList.toggle('active');
      document.getElementById('empty').classList.toggle('active');
      document.getElementById('menuuu').classList.toggle('hovver');
      document.body.classList.add('noScroll');
    } else if (event.target.classList.contains('dropdown-content')) {
      // console.log('3');
    } else {
      if (!document.getElementById('homeCheck')) {
        dropdown.classList.remove('active');
        document.getElementById('empty').classList.remove('active');
        document.getElementById('menuuu').classList.remove('hovver');
        document.body.classList.remove('noScroll');
      }
    }
  }
  if (document.getElementById('aboutFrame').style.display == 'block') {
    // console.log('object');
    document.body.classList.add('noScroll');
  }
  shootSvg(event);
});

/////////////////////////////////////////////////////////////////////////////////
