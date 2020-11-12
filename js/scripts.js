//html elements selected
var elPasswordForm = document.querySelector('.js-password-form');
var elPasswordInput = elPasswordForm.querySelector('.js-password-input');
var elPasswordBtn = elPasswordForm.querySelector('.js-password-btn');

var elDanger = document.querySelector('.js-danger');
var elSuccess = document.querySelector('.js-success');

elDanger.classList.add('d-none');
elDanger.classList.remove('d-inline-block');

elSuccess.classList.add('d-none');
elSuccess.classList.remove('d-inline-block');

//attempts

var attempts = 5 ;
var elAttempsBox  =  document.querySelector('.js-attemps-box');
var elAttempsText = document.querySelector('.js-attempts');
elAttempsText.textContent = attempts ;

//make attemp

var elMakeAttempBtn = document.querySelector('.js-make-attemp');

elMakeAttempBtn.addEventListener('click' , function(){
  location.reload();
})

//var password

var PASSWORD = "birnima" ;

// form add eventlistener 
elPasswordForm.addEventListener('submit' , function(evt){
  evt.preventDefault();
  
  var elPasswordInputValue = elPasswordInput.value ; 
  
  if (elPasswordInputValue === ""){
    alert('Please , enter the password');
    return;
  }
  // attempts minus one
  attempts--;
  elAttempsText.textContent = attempts ;
  
  if(elPasswordInputValue === PASSWORD){
    
    elPasswordInput.classList.add('is-valid');
    elPasswordInput.classList.remove('is-invalid');
    
    // classlist add and remove classes
    elSuccess.classList.remove('d-none');
    elSuccess.classList.add('d-inline-block');
    elDanger.classList.add('d-none');
    elDanger.classList.remove('d-inline-block');
    elPasswordForm.remove();
    elAttempsBox.remove();
    
  }else{
    
    elPasswordInput.classList.remove('is-valid');
    elPasswordInput.classList.add('is-invalid');
    
    // classlist add and remove classes
    elSuccess.classList.add('d-none');
    elSuccess.classList.remove('d-inline-block');
    elDanger.classList.remove('d-none');
    elDanger.classList.add('d-inline-block');
    
    if(attempts === 0){
      elPasswordForm.remove();
      elAttempsBox.remove();
      elMakeAttempBtn.classList.add('d-block');
      elMakeAttempBtn.classList.remove('d-none');
      elDanger.textContent = `Profil egasiga xabar ketdi. Tamomsiz :P`;
    }
  }
  
});