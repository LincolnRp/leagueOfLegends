const inputs = document.querySelectorAll('input'); //pega os elementos do html com class input
const button = document.querySelector('btn-login')
//funcao de focus no input
const handleFocus = ({target}) =>{
   const span = target.previousElementSibling //Pega o irmão anterior da tag alvo, ou seja pega o irmao anterior do input
   //a tag span
   span.classList.add('active') //adiciona class css no elemento 
}


//funcao que desfoca apos a desceleção do input
const handleFocusOut = ({target}) =>{

    if(target.value === ''){

        const span = target.previousElementSibling
        span.classList.remove('active') 
    }

 }

inputs.forEach((input) => input.addEventListener('focus', handleFocus))
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut))
inputs.forEach((input) => input.addEventListener('input', handleChangeButton))
// eventListener => escutador de eventos => uma espera de evento como alvo
// desestruturação de array

handleChangeButton = () =>{

    const [input1, input2] = inputs;
    if(input1.value && input2.value.length >= 8) {

       button.removeAttribute('disabled') 

    }
}


