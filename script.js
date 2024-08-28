const emojiInput = document.querySelector(".emoji-input");
const rapOutput = document.querySelector(".rap-output");

const emojiToRapMap = {
    "🔥": "Spitting hot fire",
    "🎤": "On the mic, I inspire",
    "👑": "I'm the king of this game",
    "🍆": "I'm practically fertile soil",
    "💩": "I'm like a pile of poop, full of goop",
    "💀": "They call me a dead body for a reason",
    "🤪": "I'm like a little kid in a candy store",
    "😃": "Smile brighter than your future",
    "😎": "I'm a superhero, I'm a superhero",
    "🤩": "Like a shining star",
    "🙏": "They keep begging, they keep begging",
    "🤡": "I'm as scary as a clown"
};

function convertToRap() {
    const emoji = emojiInput.value.trim();
    if (emoji && emojiToRapMap[emoji]) {
        const rapLyric = emojiToRapMap[emoji];
        rapOutput.innerHTML = `<p>${rapLyric}</p>`;
    } else {
        alert("Please provide a valid emoji!");
    }
}