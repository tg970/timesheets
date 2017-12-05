// console.log('linked!!');
// console.log($());

// OLD WAY
// (function() {
//   'use strict';
//   window.addEventListener('load', function() {
//     var form = document.getElementById('needs-validation');
//     form.addEventListener('submit', function(event) {
//       if (form.checkValidity() === false) {
//         event.preventDefault();
//         event.stopPropagation();
//       }
//       form.classList.add('was-validated');
//     }, false);
//   }, false);
// })();

$(() => {
   let form = document.getElementById('needs-validation')
   $(form).submit((event) => {
      if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
      }
      form.classList.add('was-validated');
   });
});
