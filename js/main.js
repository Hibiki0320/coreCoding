'use strict';

const open = document.getElementById('open');
const overlay = document.querySelector('.overlay');
const close = document.getElementById('close');
const toFeatures = document.getElementById('toFeatures');
const toPrice = document.getElementById('toPrice');
const toContact = document.getElementById('toContact');

open.addEventListener('click',() => {
  overlay.classList.add('show');
  open.classList.add('hide');
});

close.addEventListener('click',() => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
});

toFeatures.addEventListener('click',() => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
});

toPrice.addEventListener('click',() => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
});

toContact.addEventListener('click',() => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
});

{

  $(document).ready(function() {
    const $submitBtn = $('#submit')
    $('#form input, #form textarea').on('change', function() {
      if(
        $('#form input[type="text"]').val() !== "" &&
        $('#form #checkbox').prop('checked') === true
      ) {
        $submitBtn.prop('disabled', false);
      } else {
        $submitBtn.prop('disabled', true);
      }
    });

    $('a[href^="#"]').click(function() {
      const gap = 184;
      let speed = 400;
      let type = 'swing';
      let href = $(this).attr("href");
      let target = $(href == "#" ? 'html' : href);
      let position = target.offset().top;
      $('body,html').animate({scrollTop:position - gap}, speed, type);
      return false;
    });
    
    AOS.init({
      offset: 100,
      delay: 0,
      duration: 500,
      easing: 'ease-out',
      anchorPlacement: 'bottom-top',
      once: false,
//       disable: 'mobile',
    });

    const dts = document.querySelectorAll('dt');

    dts.forEach(dt => {
      dt.addEventListener('click', () => {
        dt.parentNode.classList.toggle('appear');
      });
    });
  });
}
