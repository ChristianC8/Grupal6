const inputs = document.getElementsByTagName('input')

const registrBtn = document.getElementById('register-btn')
const form = document.getElementById('form')

const formControl = document.querySelectorAll('.form-control')

const password = document.getElementById('password1')
const password2 = document.getElementById('password2')

const terms = document.getElementById('terms')

let isSubmit = false

for(let i = 0; i < inputs.length; i++){

    registrBtn.addEventListener('click', ()=>{
        isValid(inputs[i])
        passwordValidate()
        isChecked()

        form.addEventListener('submit', (e)=>{
            isSubmit = true
            if(!inputs[i].checkValidity()){
                e.preventDefault()
            }
        })
    })
}

function passwordValidate(){
    if(password.value === password2.value && password.classList.contains('is-valid')){
        password2.classList.remove('is-invalid')
        password2.classList.add('is-valid')
    } else {
        password2.classList.remove('is-valid')
        password2.classList.add('is-invalid')
    }
}

const terminos = document.getElementById('terminos')
const btnLink = document.getElementById('btn-link')

function isChecked(){
    if(terminos.checked){
        terms.classList.add('d-none')
        terms.classList.remove('d-block')
        btnLink.classList.remove('error')
        terminos.classList.remove('is-invalid')
        terminos.classList.add('is-valid')
    } else {
        terms.classList.add('d-block')
        terms.classList.remove('d-none')
        btnLink.classList.add('error')
        terminos.classList.remove('is-valid')
        terminos.classList.add('is-invalid')
    }
}

terminos.addEventListener('change', ()=>{
    if (isSubmit){
        isChecked()
    }
    
})

for (let i = 0; i < formControl.length; i++) {
    formControl[i].addEventListener('input', ()=>{
        if (isSubmit){
            isValid(formControl[i])
            passwordValidate()
        }
    })
    
}

function isValid(element){
    if(element.checkValidity()){
        element.classList.remove('is-invalid')
        element.classList.add('is-valid')
    } else{
        element.classList.remove('is-valid')
        element.classList.add('is-invalid')
    }
}