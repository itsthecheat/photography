console.log('\'Allo \'Allo!');

$(function(){
  'use strict';

  $('a.gallery').featherlightGallery({
      previousIcon: '«',
      nextIcon: '»',
      galleryFadeIn: 200,
      closeOnClick: 'background',
      closeOnEsc: true,
      openSpeed: 300
    });


  $.featherlightGallery.prototype.afterContent = function () {
          var caption = this.$currentTarget.find('img').attr('alt');
          this.$instance.find('.caption').remove();
          $('<div class="caption">').text(caption).appendTo(this.$instance.find('.featherlight-content'));
  };

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
