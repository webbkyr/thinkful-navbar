'use strict';
/*global $ */

//ES5
// $(document).ready(function() {
//   console.log('Ready!');
// });

//ES6

const main = () => {

  $('.hamburger').on('click', () => {
    console.log('I was clicked!');
    $('.js-menu-main').toggle();
  });


};

$(() => {
  main();
  console.log('ready!');
});