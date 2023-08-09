document.addEventListener("DOMContentLoaded", function () {
    
    const wordOfDayContainer = document.getElementById("wordnik-wordofday");

    function fetchWordOfTheDay() {
        fetch("https://random-words-api.vercel.app/word")
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    var word = data[0].word;
                    var definition = data[0].definition;
                    var pronunciation = data[0].pronunciation;

                    var wordElement = document.createElement("span");
                    wordElement.innerHTML = `<a href="https://random-words-api.vercel.app/word/${word}">${word}</a>`;
                    wordElement.classList.add("wordnik-word");

                    var definitionElement = document.createElement("span");
                    definitionElement.textContent = definition;
                    definitionElement.classList.add("wordnik-word-definition");

                    var pronunciationElement = document.createElement("span");
                    pronunciationElement.textContent = `Pronunciation: ${pronunciation}`;
                    pronunciationElement.classList.add("wordnik-word-pronunciation");

                    wordOfDayContainer.appendChild(wordElement);
                    wordOfDayContainer.appendChild(document.createElement("br"));
                    wordOfDayContainer.appendChild(definitionElement);
                    wordOfDayContainer.appendChild(document.createElement("br"));
                    wordOfDayContainer.appendChild(pronunciationElement);
                } else {
                    console.error("Invalid API response:", data);
                }
            })
            .catch(error => {
                console.error("Error fetching word of the day:", error);
            });
    }

    fetchWordOfTheDay();
});
