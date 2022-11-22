
// Open t7 folder in your IDE/editor.
// Make a hover effect with JavaScript. (2p)
  // when user mouses over <p id="trigger"> change the picture of <img id="target"> form picA.jpg to picB.jpg
  // when user mouses off, change the picture back to original
'use strict';

const p = document.querySelector('#trigger');
p.addEventListener('mouseover', () => {
  document.getElementById('target').src = 'img/picB.jpg';
})

p.addEventListener('mouseout', () => {
  document.getElementById('target').src = 'img/picA.jpg';
})