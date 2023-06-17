$(function() {
    $('.btn img').click(function() {
      var currentMode = $(this).attr('src');
      if (currentMode === 'assets/moon.png') {
        $(this).attr('src', 'assets/sun.png');
        $('body').css('background-color', 'rgb(236, 233, 233)');
        $('#main').css('background-color', 'rgb(2, 2, 33)');
        $('#main').css('color', 'white');
      } else {
        $(this).attr('src', 'assets/moon.png');
        $('body').css('background-color', 'rgb(2, 2, 33)');
        $('#main').css('background-color', 'rgb(236, 233, 233)');
        $('#main').css('color', 'black');
      }
    });
  });
  