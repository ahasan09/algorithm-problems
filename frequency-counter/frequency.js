function normalizeText(text) {
    return text.toLowerCase().replace(/[^a-z'\s]+/g, "");
}

function countCharacters(text) {
    const typedText = normalizeText(text);
    const letterCounts = {};

    for (let i = 0; i < typedText.length; i++) {
        let currentLetter = typedText[i];
        if (letterCounts[currentLetter] == undefined) {
            letterCounts[currentLetter] = 1;
        }
        else {
            letterCounts[currentLetter]++;
        }
    }

    return letterCounts;
}

function countWords(text) {
    const typedText = normalizeText(text);
    const words = typedText.split(" ");
    const wordCounts = {};

    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];
        if (wordCounts[currentWord] == undefined) {
            wordCounts[currentWord] = 1;
        }
        else {
            wordCounts[currentWord]++;
        }
    }

    return wordCounts;
}

function renderCounts(counts, elementId) {
    for (let item in counts) {
        const span = document.createElement("span");
        const textContent = document.createTextNode('"' + item + '": ' + counts[item] + ', ');
        span.appendChild(textContent);
        document.getElementById(elementId).appendChild(span);
    }
}

function bindFrequencyCounter() {
    document.getElementById("countButton").onclick = function () {
        let typedText = document.getElementById("textInput").value;
        renderCounts(countCharacters(typedText), "lettersDiv");
        renderCounts(countWords(typedText), "wordsDiv");
    }
}

if (typeof document !== 'undefined') {
    bindFrequencyCounter();
}

if (typeof module !== 'undefined') {
    module.exports = { normalizeText, countCharacters, countWords };
}
