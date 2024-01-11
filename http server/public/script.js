
document.addEventListener("DOMContentLoaded", () => {

    // form data 
    document.getElementById("form-data").addEventListener("submit", function (e) {
        e.preventDefault();
        const form = new FormData(this);
        fetch('/submit-data', {
            method: 'POST',
            body: form
        }).then(response => response.json())
            .then(data => alert(data.message))
    })


    // json data 

    document.getElementById("send-json").addEventListener("click", function (e) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const number = document.getElementById("number").value;
        const message = document.getElementById("message").value;
        const ishuman = document.getElementById("isHuman").value;
        fetch('/submit-data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                number,
                message,
                ishuman
            })
        }).then(response => response.json())
            .then(data => alert(data.message))
    })


    // send image file


    document.getElementById("upload-file").addEventListener("click", function (e) {

        const input = document.getElementById("image-input")
        const data = new FormData();
        data.append('image', input.files[0])

        fetch('/upload', {
            method: 'POST',
            body: data
        }).then(response => response.json())
            .then(data => alert(data.message))
    })


})