// console.log('linked!!');
// console.log($());

$(() => {

let form = document.getElementById('needs-validation')
//console.log(form);

$(form).submit( (event) => {
   //console.log('form on submit firing');
   if (form.checkValidity() === false) {
      //console.log('if valid is false');
      event.preventDefault();
      event.stopPropagation();
   }
   form.classList.add('was-validated');
});

//formValidation();

})
