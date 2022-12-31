function translate(text) {

    var translatedText = "";
    sentenceArray = text.split(/(\.)/g);
    sentenceArray = sentenceArray.filter(function (s) {return s !== "";})

    for (var i = 0; i < sentenceArray.length; i++) {

        text = sentenceArray[i];

        if (text === ".") {
            translatedText += ".";
            continue;
        }
        if (text.trim() === "") {
            translatedText += text;
            continue;
        }

        var startsWithSpace = false;
        if (text[0]===" ") startsWithSpace = true;
        var firstLetterIsCapital = false;
        if (text.trim()[0]===text.trim()[0].toUpperCase()) firstLetterIsCapital = true;

        text = " " + text + " ";
        text = text.toLowerCase();
        text = phraseSwap(phrases1, phrases2, text);
        text = wordSwap(words1, words2, text);
        text = text.trim();
        if (firstLetterIsCapital) text = text[0].toUpperCase() + text.substr(1);
        if (startsWithSpace) text = " " + text;

        translatedText += text;
    }

    return translatedText;
}

function phraseSwap(phrases1, phrases2, text) {
    var wordSeps = new Array(" ", ",", ".", "'", "!", ":", "?", "\"", ";", "/", "<", ">", ")", "(", "%", "$");
    for (var i = 0; i < phrases1.length; i++) {
        if (phrases2[i].length==0) continue; 
        for (var j = 0; j < wordSeps.length; j++) {
            text = text.split(" " + phrases1[i].toLowerCase() + wordSeps[j]).join(" " + phrases2[i] + wordSeps[j]);
        }
    }
    return text;
}
function wordSwap(words1, words2, text) {
    var wordSeps = new Array(" ", ",", ".", "'", "!", ":", "?", "\"", ";", "/", "<", ">", ")", "(", "%", "$");
    for (var i = 0; i < words1.length; i++) {
        if (words2[i].length==0) continue; 
        for (var j = 0; j < wordSeps.length; j++) {
            text = text.split(" " + words1[i].toLowerCase() + wordSeps[j]).join(" " + words2[i] + wordSeps[j]); 
        }
    }
    return text;
}


