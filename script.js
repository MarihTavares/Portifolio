const Button = document.querySelector('#button__Content');

Button.addEventListener("click", () => {

    const link = document.createElement("a");
    link.href = "arquivo/CV.pdf"
    link.download = "currículo.pdf"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)

});