window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
  }
  

  $(document).ready(function () {
    $("#goto__top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#goto__top').fadeIn();
            } else {
                $('#goto__top').fadeOut();
            }
        });

        $('#goto__top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
    });
});

$('input,textarea').on('focusin', function() {
    $(this).parent().find('label').addClass('active');
  });
  
  $('input,textarea').on('focusout', function() {
    if (!this.value) {
      $(this).parent().find('label').removeClass('active');
    }
  });