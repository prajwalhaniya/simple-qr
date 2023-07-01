const button = document.querySelector(".button");
const qrDiv = document.querySelector(".qr-code");

button.addEventListener("click", () => {
    console.log("Button clicked. Generate QR");
    const userInput = document.querySelector("#input_text");

    if (userInput.value !== "") {
        if (qrDiv.childElementCount == 0) {
            generateQR(userInput);
        } else {
            qrDiv.innerHTML = "";
            generateQR(userInput);
        }
        console.log("Continue");
    } else {
        alert("Please enter the text");
    }
});

const generateQR = (inputData) => {
    qrDiv.style = "";
    const qrCode = new QRCode(qrDiv, {
        text: `${inputData.value}`,
        width: 180,
        height: 180,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    console.log(qrCode);

    // to make it downloadale
    const downloadButton = qrDiv.appendChild(document.createElement("button"));
    downloadButton.setAttribute("class", "button");
    const downloadLink = document.createElement("a");
    downloadLink.setAttribute("download", "qr-code");
    downloadLink.innerText = "Download";

    downloadButton.appendChild(downloadLink);

    if (document.querySelector(".qr-code img").getAttribute("src") == null) {
        setTimeout(() => {
            downloadLink.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`)
        }, 200);
    } else {
        setTimeout(() => {
            downloadLink.setAttribute("href", `${document.querySelector("canvas").getAttribute("src")}`)
        }, 200);
    }
};
