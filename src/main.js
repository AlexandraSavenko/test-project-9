// import Swiper from 'swiper';
// import 'swiper/css';
// import Swiper from 'swiper/bundle';
// import 'swiper/swiper-bundle.min.css';
// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export function swiper1() {
  document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
      },
      slidesPerView: 1,
      spaceBetween: 0,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  });
}
swiper1();

const createMarkup = ({ review, avatar_url, author }) => {
  return `<li class="rev-list-item ">
        <img src="${avatar_url}" alt="${author}" class="rev-item-img">
        <h3 class="rev-item-title">${author}</h3>
        <p class="rev-item-text">${review}</p>
      </li>`;
};

const createList = arrayList => {
  return arrayList.map(createMarkup).join('');
};

var list = document.querySelector('.reviews-list');
fetch('https://portfolio-js.b.goit.study/api/reviews')
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    const createListMarkup = createList(data);
    list.insertAdjacentHTML('beforeend', createListMarkup);
    // swiper1;
  })
  .catch(error => {
    console.log('Not found', error);
  });
// const swiper = new Swiper('.swiper-container', {
//   direction: 'horizontal',
//   loop: true,
//   slidesPerView: 4,
//   slidesPerGroup: 4,
//   spaceBetween: 16,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     draggable: true,
//   },
// });

// const swiper = new Swiper('.swiper', {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   loop: false,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//   },
//   breakpoints: {
//     768: {
//       slidesPerView: 1,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   },
// });
