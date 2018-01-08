'use strict';
/*global $ */

//ES5
// $(document).ready(function() {
//   console.log('Ready!');
// });

//ES6

const main = () => {

  $('.hamburger').on('click', () => {
    $('.js-menu-main').toggle();
  });

  $('#courses').on('click', () => {
    $('.course-items').toggle();
  });

  $('#how-it-works').on('click', () => {
    $('.info-items').toggle();
  });


};

$(() => {
  main();
  console.log('ready!');
});