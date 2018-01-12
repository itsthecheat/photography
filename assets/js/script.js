console.log('\'Allo \'Allo!');

$(function(){
  'use strict';

  $(document).ready(function () {

      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });

  });

  $('.hamburger').on('click', function () {
      $('.hamburger').toggleClass('is-active');
  });

  var $grid = $('.grid').imagesLoaded( function() {
    $grid.masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      gutter: 10
    });
  });


});
