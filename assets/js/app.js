const translateBtn= document.getElementById("btn-translate");
const textInput= document.getElementById("txt-input");
const textOutput= document.getElementById("output");

// Get Translated Data

async function translate(){
    let textValue=textInput.value;
    console.log(textValue);
    const response =await fetch(`https://api.funtranslations.com/translate/minion.json?text=${textValue}`);
    const translateData= await response.json();
    console.log(translateData);
    const translatedText=translateData.contents.translated;
    console.log(translatedText);
    displayTranslation(translatedText);
}

// Display translated text

function  displayTranslation(text){
     textOutput.innerText=text;
     textInput.value='';
}

// Adding Event Listener to Translate Button
translateBtn.addEventListener("click",translate);