var dictionaryWords = typeof words !== 'undefined' ? words : require('./words');

function bindAnagramFinder() {
    document.getElementById("findButton").onclick=function(){
        let typedText=document.getElementById("input").value;
        let anagrams = getAnagramsOf(typedText);

        console.log(anagrams);
        document.getElementById("output").innerHTML=anagrams
    }
}

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

function getHashMap(dictionary = dictionaryWords) {
    const anagrams = {};
    dictionary.forEach((word)=>{
        const sortedWord = alphabetize(word);
        if (anagrams[sortedWord]) {
            return anagrams[sortedWord].push(word);
        }
        anagrams[sortedWord] = [word];
    })

    return anagrams;
}


function getAnagramsOf(typedText, dictionary = dictionaryWords){
    let key=alphabetize(typedText); //aelst
    let hashMap=getHashMap(dictionary);
    return hashMap[key];
}

if (typeof document !== 'undefined') {
    bindAnagramFinder();
}

if (typeof module !== 'undefined') {
    module.exports = { alphabetize, getHashMap, getAnagramsOf };
}
