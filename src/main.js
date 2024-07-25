const list = document.querySelector('.reviews-list');
fetch('https://portfolio-js.b.goit.study/api/reviews')
  .then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    const createListMarkup = createList(data);
    list.insertAdjacentHTML('beforeend', createListMarkup);
  })
  .catch(error => {
    console.log('Not found', error);
  });
const createMarkup = ({ review, avatar_url, author }) => {
  return `<li class="rev-list-item">
        <img src="${avatar_url}" alt="${author}" class="rev-item-img">
        <h3 class="rev-item-title">${author}</h3>
        <p class="rev-item-text">${review}</p>
      </li>`;
};
const createList = arrayList => {
  console.log(arrayList);
  return arrayList.map(createMarkup).join('');
};
