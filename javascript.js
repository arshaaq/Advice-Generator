const adviceID = document.getElementById("advice-id");
const mainText = document.getElementById("main-text");

fetch("https://api.adviceslip.com/advice")
.then(response =>{
    console.log(response);
    return response.json();
}).then(json =>{
    console.log(json);
    adviceID.innerText = ("#" + json.slip.id);
    mainText.innerText = (json.slip.advice);
});
