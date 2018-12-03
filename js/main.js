$(document).ready(function(){
    function addAndStop() {
      $('div').append('<img src="car.jpg">');
      $('div').append('<input type="button" value="Удалить картинку">');
      $('input[value^="Удалить"]').on('click', deleteAndStop);
      $('input[value^="Создать"]').off('click');
    }
    $('input[value^="Создать"]').on('click', addAndStop);
    function deleteAndStop() {
      $('img').remove();
      $('input[value^="Удалить"]').remove();
      $('input[value^="Удалить"]').off('click');
      $('input[value^="Создать"]').on('click', addAndStop);
    }
  })
  