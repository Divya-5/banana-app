var btnTranslate = document.querySelector("#translate-button");
var txtInput = document.querySelector("#translate-input");
var outputDiv = document.querySelector("#translate-output");

var serverUrl = "https://api.funtranslations.com/translate/kraut.json";

function getTranslatedUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

function errorHandler() {
  console.log("error occured", error);
  alert("something wrong with server, try after sometime");
}
function clickHandler() {
  const inputText = txtInput.value; //input
  //calling server for processing
  fetch(getTranslatedUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText; //output
    })
    .catch(errorHandler);
}
btnTranslate.addEventListener("click", clickHandler);
