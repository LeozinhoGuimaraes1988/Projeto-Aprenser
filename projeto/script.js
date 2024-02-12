$(document).ready(function () {
  $('.btn').hover(
    function () {
      $(this).addClass('active');
    },
    function () {
      $(this).removeClass('active');
    }
  );
  $('.header_nav a').hover(
    function () {
      $(this).addClass('active');
    },
    function () {
      $(this).removeClass('active');
    }
  );
  $(document).ready(function () {
    $('.btn').click(function () {
      alert('Mais informações serão exibidas em breve!');
    });
  });
});
