var swiper = new Swiper('.mySwiper', {
  direction: 'horizontal',
  //   loop: true,
  // slidesPerView: 4,

  // spaceBetween: 16,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const createMarkup = ({ review, avatar_url, author }) => {
  return `<li class="swiper-slide">
        <img src="${avatar_url}" alt="${author}" class="rev-item-img">
        <h3 class="rev-item-title">${author}</h3>
        <p class="rev-item-text">${review}</p>
      </li>`;
};

const createList = arrayList => {
  return arrayList.map(createMarkup).join('');
};
const list = document.querySelector('.swiper-wrapper');
// console.dir(list);
fetch('https://portfolio-js.b.goit.study/api/reviews')
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    const createListMarkup = createList(data);
    // console.log(createListMarkup);
    list.insertAdjacentHTML('beforeend', createListMarkup);
  })
  .catch(error => {
    console.log('Not found', error);
  });
