import"./assets/modulepreload-polyfill-3cfb730f.js";import{S as i}from"./assets/vendor-d920e91f.js";function r(){document.addEventListener("DOMContentLoaded",function(){new i(".swiper-container",{navigation:{nextEl:".swiper-button-next"},slidesPerView:1,spaceBetween:0,breakpoints:{320:{slidesPerView:2,spaceBetween:0},480:{slidesPerView:3,spaceBetween:30},640:{slidesPerView:4,spaceBetween:40}}})})}r();const n=({review:e,avatar_url:t,author:s})=>`<li class="rev-list-item ">
        <img src="${t}" alt="${s}" class="rev-item-img">
        <h3 class="rev-item-title">${s}</h3>
        <p class="rev-item-text">${e}</p>
      </li>`,o=e=>e.map(n).join("");var c=document.querySelector(".reviews-list");fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{const t=o(e);c.insertAdjacentHTML("beforeend",t)}).catch(e=>{console.log("Not found",e)});
//# sourceMappingURL=commonHelpers.js.map
