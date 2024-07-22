document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        '¡Feliz cumpleaños! Que todos tus sueños se hagan realidad.',
        "¡Feliz cumpleaños, amor de mi vida! Que cada día te traiga tanta alegría como tú me das a mí.",
        'Te quiero más de lo que las palabras pueden expresar.',
        'Eres la razón de mi sonrisa.',
        "Que este día sea tan especial y maravilloso como tú lo eres para mí. ¡Feliz cumpleaños, mi amor!",
        'Gracias por ser tú y estar siempre a mi lado.',
        "¡Feliz cumpleaños a la persona más increíble del mundo! Te amo con todo mi corazón.",
        "Que todos tus deseos se hagan realidad hoy y siempre. ¡Feliz cumpleaños, mi corazón!",
        "¡Feliz cumpleaños, mi vida! Gracias por ser mi compañera y mi mejor amiga.",
        "¡Feliz cumpleaños, mi preciosa! Eres el motivo de mi felicidad.",
        "¡Feliz cumpleaños, mi princesa! Eres y siempre serás mi mayor tesoro.",
        "¡Feliz cumpleaños, mi amor! Que cada instante de tu vida esté lleno de alegría y amor.",
        "¡Feliz cumpleaños, mi vida! Cada día contigo es una bendición.",
        "¡Feliz cumpleaños, mi amor! No hay palabras para describir lo mucho que significas para mí.",
        "¡Feliz cumpleaños, mi amor! Que este día sea tan increíble como tú lo eres.",
        "Cada día a tu lado es un regalo.",
        "Eres la persona que más quiero en este mundo.",
        "Mi corazón late por ti y solo por ti.",
        "Gracias por ser mi compañera de vida y mi mejor amiga.",
        "Gracias a Dios por bendecirme con tu amor y tu compañía.",
        "Doy gracias a Dios cada día por tenerte a mi lado.",
        "Agradezco a Dios por cada momento que pasamos juntos.",
        "Gracias, Dios, por la bendición de tenerte en mi vida.",
        "Estoy eternamente agradecido a Dios por haberte encontrado.",
    ];

    const textSpace = document.getElementById('text-space');
    const showPhraseBtn = document.getElementById('show-phrase-btn');

    showPhraseBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        textSpace.textContent = phrases[randomIndex];
    });

    // Create hearts
    const background = document.querySelector('.background');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        background.appendChild(heart);
    }
});
