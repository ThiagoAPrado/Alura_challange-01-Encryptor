 const buttonDecrypt = document.querySelector(".decrypt");

 buttonDecrypt.addEventListener("click", function(event) {
    event.preventDefault();

    const textAreaInput = document.querySelector(".textinput");
    const textAreaOutput = document.querySelector(".textoutput");

    let textDecript = textAreaInput.value;

    function decrypt(text) {

        let textDe = text.replace(/enter/gi, 'e');
            textDe = textDe.replace(/imes/gi, 'i'); 
            textDe = textDe.replace(/ai/gi, 'a');
            textDe = textDe.replace(/ober/gi, 'o');
            textDe = textDe.replace(/ufat/gi, 'u');

        return textDe;
    }

    textAreaOutput.value = decrypt(textDecript);
});