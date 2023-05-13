function generate() {
    let word1 ="";
    let word2 ="";
    while (word1 == word2) {
        word1 = getRandomEmotion();
        word2 = getRandomEmotion();
    }

    document.getElementById("result").innerHTML = word1.toUpperCase() + " + " + word2.toUpperCase();
}

function getRandomEmotion() {
    const emotions = new Array(
        "оптимизм",
        "неприязнь",
        "досада",
        "презрение",
        "интерес",
        "ожидание",
        "настороженность",
        "злость",
        "гнев",
        "ненависть",
        "отвращение",
        "скука",
        "сожаление",
        "спокойствие",
        "радость",
        "экстаз",
        "скорбь",
        "грусть",
        "уныние",
        "любовь",
        "приятие",
        "доверие",
        "покорность",
        "восхищение",
        "ужас",
        "страх",
        "тревога",
        "потрясение",
        "благоговение",
        "удивление",
        "смущение",
        "неодобрение"
    );

    return emotions[Math.floor(Math.random() * (emotions.length))];
}