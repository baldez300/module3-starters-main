
// Continue task 5. Folder t11 already exists. Follow the instructions in t11.txt.
// Modify the program to open large image in a modal when <article> is clicked. (6p)
  // kick yourself at this point if you used innerHTML to create the <article> and its content.
  // add the following html code between </div> and </body> manually to the HTML-document (no JS)
  // <dialog>
  //    <span>&#x2715;</span>
  //    <img>
  // </dialog>
  // picArray has two images for each item: medium and large.
  // Medium is used in the <img> inside the <article> and large is used in the <img> inside the <dialog>.
  // use showModal() and close() functions to show and hide <dialog>
  // the same time you are opening the modal, you should put the large image to the <img> in the modal.
  // Don't forget to add alt attribute.
  // use <span> inside <dialog> to close the modal.
'use strict';

const picArray = [
  {
    title: 'Title 1',
    caption: 'Caption 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    image: {
      large: 'img/pic1.jpg',
      medium: 'thumbnails/pic1.jpg',
    },
  },
  {
    title: 'Title 2',
    caption: 'Caption 2',
    description:
      'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    image: {
      large: 'img/pic2.jpg',
      medium: 'thumbnails/pic2.jpg',
    },
  },
  {
    title: 'Title 3',
    caption: 'Caption 3',
    description:
      'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    image: {
      large: 'img/pic3.jpg',
      medium: 'thumbnails/pic3.jpg',
    },
  },
  {
    title: 'Title 4',
    caption: 'Caption 4',
    description:
      'Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    image: {
      large: 'img/pic4.jpg',
      medium: 'thumbnails/pic4.jpg',
    },
  },
  {
    title: 'Title 5',
    caption: 'Caption 5',
    description:
      'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. ',
    image: {
      large: 'img/pic5.jpg',
      medium: 'thumbnails/pic5.jpg',
    },
  },
  {
    title: 'Title 6',
    caption: 'Caption 6',
    description:
      'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh.',
    image: {
      large: 'img/pic6.jpg',
      medium: 'thumbnails/pic6.jpg',
    },
  },
  {
    title: 'Title 7',
    caption: 'Caption 7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    image: {
      large: 'img/pic7.jpg',
      medium: 'thumbnails/pic7.jpg',
    },
  },
  {
    title: 'Title 8',
    caption: 'Caption 8',
    description:
      'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. ',
    image: {
      large: 'img/pic8.jpg',
      medium: 'thumbnails/pic8.jpg',
    },
  },
  {
    title: 'Title 9',
    caption: 'Caption 9',
    description:
      'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. ',
    image: {
      large: 'img/pic9.jpg',
      medium: 'thumbnails/pic9.jpg',
    },
  },
];


// Solution for 5 task starts here
for (let pic of picArray) {
  const section = document.querySelector('#pictures');
  const article = document.createElement('article');
  const h2 = document.createElement('h2');

  const figure = document.createElement('figure');
  let imgMedium = document.createElement('img');

  const figcaption = document.createElement('figcaption');
  const p = document.createElement('p');

  h2.append(pic.title)
  imgMedium.src = pic.image.medium;
  imgMedium.alt = pic.title;
  figcaption.append(pic.caption);
  //figcaption.textContent = pic.caption; // Another way for the above line
  p.append(pic.description)

  figure.append(imgMedium, figcaption);
  article.append(h2, figure, p);
  section.appendChild(article);

}

// Solution for 11 task starts here =========================================
// How to the images from the picArray
for (let photo of picArray) {
  const dialog = document.querySelector('dialog');
  let imgLarge = document.createElement('img');

  imgLarge.src = photo.image.large;
  imgLarge.alt = photo.title;

  let dialogImages = dialog.appendChild(imgLarge);

  // How to open and close dialog
  (() => {
    const updateButton = document.querySelector('#updateDetails');
    const close = document.querySelector('span');
    let dialog = document.querySelector('dialog');
    dialog.returnValue = dialogImages;

    function openCheck(dialog) {
      if (dialog.open) {
        console.log('Dialog open');
      } else {
        console.log('Dialog closed');
      }
    }

    // Update button opens a modal dialog
    updateButton.addEventListener('click', () => {
      dialog.showModal();
      openCheck(dialog);
    });

    // Span closes the dialog image
    close.addEventListener('click', () => {
      dialog.close('Photo not chosen');
      openCheck(dialog);
    });

  })();
}