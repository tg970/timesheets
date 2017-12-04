// console.log('linked!!');
// console.log($());

(function() {
  'use strict';

  window.addEventListener('load', function() {
    var form = document.getElementById('needs-validation');
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  }, false);
})();

// const formValidation = () => {
   // let $form = $('#needs-validation')
   // $form.on('submit', (event) => {
   //    if (form.checkValidity() === false) {
   //      event.preventDefault();
   //      event.stopPropagation();
   //    }
   //    form.classList.add('was-validated');
   // }, false);
   // console.log($form);
// };
//
// $(() => {
//
// formValidation();
//
// })
