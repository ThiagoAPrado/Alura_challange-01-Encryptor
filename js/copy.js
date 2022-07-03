const buttonCopy = document.querySelector(".copy");

buttonCopy.addEventListener("click", function(event) {
    event.preventDefault();

    const textAreaOutput = document.querySelector(".textoutput");
    const textCopied = textAreaOutput.value;

    navigator.clipboard.writeText(textCopied);
    textAreaOutput.value = "";

});