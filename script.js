// Сніг (фон)
const snowContainer = document.getElementById('snow-container');
const snowflakes = ['❄', '❅', '❆'];
for(let i=0; i<35; i++) {
    const el = document.createElement('div');
    el.className = 'snowflake';
    el.innerText = snowflakes[Math.floor(Math.random()*snowflakes.length)];
    el.style.left = Math.random()*100 + '%';
    el.style.animationDuration = (Math.random()*5 + 5) + 's';
    el.style.animationDelay = (Math.random()*5) + 's';
    el.style.fontSize = (Math.random()*12 + 10) + 'px';
    snowContainer.appendChild(el);
}

// Заборона клавіш
document.onkeydown = function(e) {
    if(e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83 || e.keyCode === 67)) {
        return false;
    }
};

// Переклад
const translations = {
    en: {
        name: 'Bohdan <span class="white-tree">🎄</span>',
        info: '🎂 03.02 • 🇺🇦 Kyiv, Ukraine',
        tg: 'My only account: @qelry',
        donate: 'Donate for Holidays',
        aboutTitle: 'About Me',
        aboutText: 'I am a law-abiding citizen of Ukraine, respecting the laws of my country and leading a responsible, honest life. My actions are guided by respect for the law and personal integrity.',
        rulesTitle: 'Important Notice',
        rulesText: 'I am a compliant Telegram user who adheres to communication rules and shows respect to other participants. I recognize the importance of safe and constructive interaction.',
        footer: '<span class="footer-snow">❄️</span> Happy New Year 2026! <span class="footer-snow">❄️</span><br>© Filipov. All rights reserved.'
    },
    ua: {
        name: 'Богдан <span class="white-tree">🎄</span>',
        info: '🎂 03.02 • 🇺🇦 Київ, Україна',
        tg: 'Мій єдиний акаунт: @qelry',
        donate: 'Донат на свята',
        aboutTitle: 'Про мене',
        aboutText: 'Я є законослухняним громадянином України, дотримуюся законів своєї країни та веду відповідальний, чесний спосіб життя. Мої вчинки керуються повагою до закону та особистою чесністю.',
        rulesTitle: 'Важливе повідомлення',
        rulesText: 'Я є слухняним користувачем Telegram, який дотримується правил спілкування та демонструє повагу до інших учасників. Усвідомлюю важливість безпечної та конструктивної взаємодії.',
        footer: '<span class="footer-snow">❄️</span> З Новим Роком 2026! <span class="footer-snow">❄️</span><br>© Filipov. All rights reserved.'
    },
    ru: {
        name: 'Богдан <span class="white-tree">🎄</span>',
        info: '🎂 03.02 • 🇺🇦 Киев, Украина',
        tg: 'Мой единственный аккаунт: @qelry',
        donate: 'Донат на праздники',
        aboutTitle: 'Обо мне',
        aboutText: 'Я являюсь законопослушным гражданином Украины, соблюдаю законы своей страны и веду ответственный, честный образ жизни. Мои поступки основаны на уважении к закону и личной честности.',
        rulesTitle: 'Важное уведомление',
        rulesText: 'Я являюсь послушным пользователем Telegram, придерживающимся правил общения и демонстрирующим уважение к другим участникам. Осознаю важность безопасного и конструктивного взаимодействия в цифровом пространстве.',
        footer: '<span class="footer-snow">❄️</span> С Новым Годом 2026! <span class="footer-snow">❄️</span><br>© Filipov. All rights reserved.'
    }
};

function setLang(lang) {
    const content = document.getElementById('dynamic-content');
    const data = translations[lang];

    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btn-' + lang).classList.add('active');

    content.classList.add('hidden');

    setTimeout(() => {
        document.getElementById('t-name').innerHTML = data.name; 
        document.getElementById('t-info').innerText = data.info;
        document.getElementById('t-tg').innerText = data.tg;
        document.getElementById('t-donate').innerText = data.donate;
        document.getElementById('t-about-title').innerText = data.aboutTitle;
        document.getElementById('t-about-text').innerText = data.aboutText;
        document.getElementById('t-rules-title').innerText = data.rulesTitle;
        document.getElementById('t-rules-text').innerText = data.rulesText;
        document.getElementById('t-footer').innerHTML = data.footer;
        content.classList.remove('hidden');
    }, 250);
        }

