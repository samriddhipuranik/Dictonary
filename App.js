const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", (save) => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            function save() {
                let wordss = inpWord;
                let meann = data[0].meanings[0].definitions[0].definition;
                let array=new Array();
                array=JSON.parse(localStorage.getItem("dict"))?JSON.parse(localStorage.getItem("dict")):[]
                array.push({
                    "wordi":wordss,
                    "meani":meann
                })
                localStorage.setItem("dict",JSON.stringify(array));
            }
            save();
            // let wome = {word:inpWord,mean:data[0].meanings[0].definitions[0].definition};
            // let stri =JSON.stringify(wome);
            // localStorage.setItem("mea", stri);
            
            result.innerHTML = `
            <div class="word">
                <h3>${inpWord}</h3>
                <button onclick="playSound()">
                    <i class="fas fa-volume-up"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                
            </div>
            <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>`;
            sound.setAttribute("src", `${data[0].phonetics[1].audio}`)
        })
        .catch( () => {
            result.innerHTML = `<h3 class="error">Sorry! Couldn't find the word...</h3>`
        })
        
        
});


function playSound() {
    sound.play();
}

