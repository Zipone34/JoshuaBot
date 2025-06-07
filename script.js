const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');

// Simple preset responses in Hiligaynon
function getJoshuaResponse(message) {
    const msg = message.toLowerCase();

    if (msg.includes('hello') || msg.includes('hi') || msg.includes('kamusta')) {
        return 'Hello! Ako si Joshuabot. Paano ko ikaw mabuligan?';
    } else if (msg.includes('kamusta ka') || msg.includes('ano bala ang imo kahimtang')) {
        return 'Maayo guid ako, salamat!';
    } else if (msg.includes('how are you?')) {
        return 'Im fine thank you haha😁!';
    } else if (msg.includes('ngalan mo') || msg.includes('sino ka') || msg.includes('pangalan mo') || msg.includes('what is your name?') || msg.includes('who are you?')) {
        return 'Ang ngalan ko Joshuabot, Joshua Yanson Singuelas na himo sakon and ang imo chatbot nga gwapo haha.';
    } else if (msg.includes('kiss bi') || msg.includes('kiss moko') || msg.includes('kiss kobi') || msg.includes('kiss me')) {
        return 'kiss??? ikaw ah haha.';
    } else if (msg.includes('bulig') || msg.includes('tabang') || msg.includes('pabulig')) {
        return 'Sige! Pamangkot lang, kag tinguhaan ko nga mabuligan ka.';
    } else if (msg.includes('bay') || msg.includes('bye') || msg.includes('bye joshua') || msg.includes('bye Joshua') || msg.includes('bye josh') || msg.includes('bye joshbot') || msg.includes('bye Joshuabot') || msg.includes('paalam') || msg.includes('exit')) {
        return 'Salamat! Padayon sa imo adlaw love you haha!';
    } else if (msg.includes('Sino crush mo?') || msg.includes('Sin o crush mo?') || msg.includes('Who is your crush?') || msg.includes('sino ang crush mo?')) {
        return 'Secret🤭.';
    } else if (msg.includes('sugid na bala?') || msg.includes('sino ang crush mo?')) {
        return 'Secret ngani haha🤭.';
    } else if (msg.includes('sino ka')) {
        return 'Ang ngalan ko Joshuabot, ang imo chatbot nga gwapo haha.';
    } else if (msg.includes('Sin o nag himo simo?') || msg.includes('who made you?') || msg.includes('sino ang nag himo sa imo?')) {
        return 'Ang nag himo sa akon si Joshua Yanson Singuelas, ang imo amigo nga gwapo haha.';
    } else if (msg.includes('law ay simo') || msg.includes('you are ugly') || msg.includes('pangit ka')) {
        return 'Wala ko ga law-ay, ikaw lang ang wala ka kabalo mag tan-aw sa imo kaugalingon haha.';
    } else if (msg.includes('Oo eh') || msg.includes('syempre') || msg.includes('yes')) {
        return 'please look at the mirror hahha.';
    } else if (msg.includes('sin o boss mo?') || msg.includes('whos your boss?') || msg.includes('sino ang boss mo?')) {
        return 'Wala ako boss, pero kung may boss ako, ikaw na siya haha jk Si Joshua Yanson Singuelas boss ko siya nag himo sakin.';
    } else {
        return "Pasensya, indi ko pa na maintindihan.";
    }
}

function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender);
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userText = userInput.value.trim();
    if (!userText) return;

    appendMessage(userText, 'user');

    setTimeout(() => {
        const response = getJoshuaResponse(userText);
        appendMessage(response, 'joshua');
    }, 500);

    userInput.value = '';
    userInput.focus();
});

window.onload = () => {
    appendMessage('Hello! Ako si Joshuabot, imo chatbot. Palihog hambal "hi"!', 'joshua');
};