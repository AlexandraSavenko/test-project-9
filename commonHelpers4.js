import"./assets/modulepreload-polyfill-3cfb730f.js";new Swiper(".mySwiper",{direction:"horizontal",breakpoints:{320:{slidesPerView:1,slidesPerGroup:1,spaceBetween:20},768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:20},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:20}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const s=({review:e,avatar_url:t,author:r})=>`<li class="swiper-slide">
        <img src="${t}" alt="${r}" class="rev-item-img">
        <h3 class="rev-item-title">${r}</h3>
        <p class="rev-item-text">${e}</p>
      </li>`,i=e=>e.map(s).join(""),n=document.querySelector(".swiper-wrapper");fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{const t=i(e);n.insertAdjacentHTML("beforeend",t)}).catch(e=>{console.log("Not found",e)});
//# sourceMappingURL=commonHelpers4.js.map
