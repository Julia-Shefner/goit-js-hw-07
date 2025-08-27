const textInput = document.querySelector('#name-input');

const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
    if (event.target.value.trim() === ""){
        textOutput.textContent = "Anonymous";
    } else {textOutput.textContent = event.target.value.trim();}
})