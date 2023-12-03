document.getElementById('phone-mask').addEventListener('input', function(e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);

    e.target.value = !x[2] ? '+' + (x[1].length === 3 ? x[1] : '998') : '+' + x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
    console.log(e.target);
    if (e.target.value.length == 17) {
        e.target.style.border = "1px solid #e0e4eb"
    }else{
        e.target.style.border = "1px solid red"
    }
});

document.getElementById('phone-mask').dispatchEvent(new Event('keyup'));

let elForm = document.querySelector('.form')
let mail = ['email.com', 'gmail.com', 'mail.com', 'yahoo.com']

elForm.addEventListener('submit',(e) => {
    e.preventDefault()
   let name = e.target.name.value
   let email = e.target.email.value
   let password = e.target.password.value

   if (name.length >= 2) {
    e.target.name.style.border = "1px solid #e0e4eb"
   }else{
    e.target.name.style.border = "1px solid red"
   }
   if (mail.includes(email.split('@')[1])) {
    e.target.email.style.border = "1px solid #e0e4eb"
   }else{
    e.target.email.style.border = "1px solid red"
   }


   if (password.length >= 8) {
    e.target.password.style.border = "1px solid #e0e4eb"
   }else{
    e.target.password.style.border = "1px solid red"
   }
})

function addLang(el) {
    let lang = el.getAttribute('data-lang') 
    console.log(lang);
    localStorage.setItem('language', lang)
}