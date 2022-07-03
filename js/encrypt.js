const buttonEncrypt = document.querySelector(".encrypt");

buttonEncrypt.addEventListener("click", function(event) {
    event.preventDefault();

    const textAreaInput = document.querySelector(".textinput");
    const textAreaOutput = document.querySelector(".textoutput");

    let textEncript = textAreaInput.value;

    function encrypt(text) {
        
        let textEn = text.replace(/e/gi, 'enter');  // ao criar uma variavel para receber o valor da textarea
            textEn = textEn.replace(/i/gi, 'imes'); // deve-se usar a variavel para fazer o replace, pois 
            textEn = textEn.replace(/a/gi, 'ai');   // essa variavel ja tem o valor da textarea, logo ela
            textEn = textEn.replace(/o/gi, 'ober'); // fará o replace com a informação atualizada.
            textEn = textEn.replace(/u/gi, 'ufat');

            // deve ser essa ordem para funcionar, caso coloque a,e,i,o,u. ao entrar com 'a' saira 'aimes'

        return textEn 
    }
    
    textAreaOutput.value = encrypt(textEncript);
});