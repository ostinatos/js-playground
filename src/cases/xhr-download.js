let testButton = document.createElement("button")
var newContent = document.createTextNode("test");
testButton.appendChild(newContent)
testButton.onclick = e => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/test/theme.zip');
    xhr.responseType = 'blob';
    xhr.send();
    xhr.onload = function (e) {
        if (this.status === 200) {
            var blob = new Blob([this.response], { type: 'zip' });
            let a = document.createElement("a");
            a.style = "display: none";
            document.body.appendChild(a);
            //Create a DOMString representing the blob and point the link element towards it
            let url = window.URL.createObjectURL(blob);
            a.href = url;
            // NOTICE: the following line cannot be omitted.
            a.download = 'theme.zip';
            //programatically click the link to trigger the download
            a.click();
            //release the reference to the file by revoking the Object URL
            window.URL.revokeObjectURL(url);
        }
    }
}
document.body.appendChild(testButton)