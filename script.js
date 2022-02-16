var translate = document.querySelector('#translate');
var inputArea = document.querySelector("#input");
var output = document.querySelector("#result");


const serverURL = "https://api.funtranslations.com/translate/minion.json"


function translationURL(text){
return serverURL + "?" + "text=" + text
}

function errorWindow (error){
alert("something went wrong: you can try after sometimes ")
}


function clickHandler() {
    var inputText = inputArea.value;
    fetch(translationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var goTranslate = json.contents.translated;
        output.innerText = goTranslate;
    })
    .catch(errorWindow)
};

translate.addEventListener('click', clickHandler);

