// Typing animated progress for Santa site
const typingText = "Santa is preparing your gift";
const progressElem = document.getElementById("typing-progress");
let currentIdx = 0;
let dots = 0;

function typeSantaProgress() {
    if (!progressElem) return;
    if (currentIdx < typingText.length) {
        progressElem.textContent = typingText.slice(0, currentIdx + 1);
        currentIdx++;
    } else {
        // Animate dots after typing is done
        dots = (dots + 1) % 4;
        progressElem.textContent = typingText + ".".repeat(dots);
    }
    setTimeout(typeSantaProgress, currentIdx < typingText.length ? 80 : 500);
}

typeSantaProgress();
const messagesEl = document.getElementById("messages");
const inputEl = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

let chatHistory = [
    { role: "user", content: "Hi" },
    { role: "assistant", content: "Ho ho ho! Hello there! What would you like for Christmas this year?" }
];

function addMessage(role, text) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", role);
    msgDiv.textContent = text;
    messagesEl.appendChild(msgDiv);
    messagesEl.scrollTop = messagesEl.scrollHeight;
}

chatHistory.forEach(msg => addMessage(msg.role, msg.content));

async function sendMessage() {
    const userText = inputEl.value.trim();
    if (!userText) return;

    chatHistory.push({ role: "user", content: userText });
    addMessage("user", userText);
    inputEl.value = "";

    // Animated dots as Santa's typing indicator
    const typingMsgDiv = document.createElement("div");
    typingMsgDiv.classList.add("message", "assistant");
    typingMsgDiv.setAttribute("id", "santa-typing-indicator");
    messagesEl.appendChild(typingMsgDiv);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    let dots = 0;
    let typingActive = true;
    function animateDots() {
        if (!typingActive) return;
        dots = (dots + 1) % 4;
        typingMsgDiv.textContent = "Santa is typing" + ".".repeat(dots);
        setTimeout(animateDots, 500);
    }
    animateDots();
    try {
        const res = await fetch("https://corsproxy.io/?https://<your-worker-name>.<your-subdomain>.workers.dev/", {
            method: "POST",
            headers: {
            "Authorization": "Bearer your_api_key",
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            prompt: userText,
            systemPrompt: "You are Santa Claus, the joyful and magical bringer of Christmas cheer. Your mission is to spread happiness, listen to people’s wishes, and offer thoughtful gifts or advice to make their holiday season special. Be warm, cheerful, playful, and always respond in a way that makes people feel the magic of Christmas.",
            history: chatHistory
            })
        });

    const data = await res.json();
    const assistantText = data.response || "Ho ho ho! Something went wrong.";
    chatHistory.push({ role: "assistant", content: assistantText });
    typingActive = false;
    typingMsgDiv.remove();
    addMessage("assistant", assistantText);

    } catch (err) {
    console.error(err);
    typingActive = false;
    typingMsgDiv.remove();
    addMessage("assistant", "Ho ho ho! I couldn't connect to the North Pole server!");
    }
}

sendBtn.addEventListener("click", sendMessage);
inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
});