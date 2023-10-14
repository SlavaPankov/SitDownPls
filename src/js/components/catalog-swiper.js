import Swiper from 'swiper';
import { Pagination, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

new Swiper('.content-swiper', {
  modules: [Pagination, Grid],
  spaceBetween: 32,
  slidesPerView: 3,
  slidesPerGroup: 3,

  grid: {
    rows: 3,
    fill: 'row',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletActiveClass: 'catalog__slider-bullet--active',
    bulletClass: 'catalog__slider-bullet',
    renderBullet: function (index, className) {
      return '<span class="' + className + '" tabindex="0">' + (index + 1) + "</span>";
    },
  },

  breakpoints: {
    850: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 3,
        fill: 'row',
      },
    },

    661: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 3,
        fill: 'row',
      },
    },

    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 16,
      grid: {
        rows: 3,
        fill: 'row',
      },
    }
  }
});
