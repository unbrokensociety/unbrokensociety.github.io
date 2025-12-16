const translations = {
    en: {
        title: "🇺🇸 English",
        desc: "I am a law-abiding citizen of Ukraine, respecting the laws of my country and leading a responsible, honest life. My actions are guided by respect for the law and personal integrity.",
        btnAccount: "✈️ My only account: @qelry",
        btnDonate: "🎁 Donate for Holidays",
        rules: "⏺ I am a compliant Telegram user who adheres to communication rules and shows respect to other participants. I recognize the importance of safe and constructive interaction.",
        footer: "❄️ Happy New Year 2026! ❄️<br>© Filipov. All rights reserved."
    },
    ua: {
        title: "🇺🇦 Українська",
        desc: "Я є законослухняним громадянином України, дотримуюся законів своєї країни та веду відповідальний, чесний спосіб життя. Мої вчинки керуються повагою до закону та особистою чесністю.",
        btnAccount: "✈️ Мій єдиний акаунт: @qelry",
        btnDonate: "🎁 Донат на свята",
        rules: "⏺ Я є слухняним користувачем Telegram, який дотримується правил спілкування та демонструє повагу до інших учасників. Усвідомлюю важливість безпечної та конструктивної взаємодії.",
        footer: "❄️ З Новим Роком 2026! ❄️<br>© Filipov. All rights reserved."
    },
    ru: {
        title: "🏳️ Русский",
        desc: "Я являюсь законопослушным гражданином Украины, соблюдаю законы своей страны и веду ответственный, честный образ жизни. Мои поступки основаны на уважении к закону и личной честности.",
        btnAccount: "✈️ Мой единственный аккаунт: @qelry",
        btnDonate: "🎁 Донат на праздники",
        rules: "⏺ Я являюсь послушным пользователем Telegram, придерживающимся правил общения и демонстрирующим уважение к другим участникам. Осознаю важность безопасного и конструктивного взаимодействия в цифровом пространстве.",
        footer: "❄️ С Новым Годом 2026! ❄️<br>© Filipov. All rights reserved."
    }
};

// Функция открытия/закрытия меню
function toggleLangMenu() {
    document.getElementById("langList").classList.toggle("show");
}

// Функция выбора языка
function selectLang(lang) {
    const data = translations[lang];

    // Обновляем все тексты
    document.getElementById('main-title').innerText = data.title;
    document.getElementById('main-desc').innerText = data.desc;
    document.getElementById('btn-account').innerText = data.btnAccount;
    document.getElementById('btn-donate').innerText = data.btnDonate;
    document.getElementById('rules-desc').innerText = data.rules;
    document.getElementById('footer-text').innerHTML = data.footer;

    // Обновляем текст на кнопке и закрываем меню
    document.getElementById('currentLangBtn').innerText = lang.toUpperCase() + " ▾";
    document.getElementById("langList").classList.remove("show");
}

// Закрываем меню, если кликнули в любое другое место
window.onclick = function(event) {
    if (!event.target.matches('.lang-btn')) {
        var dropdowns = document.getElementsByClassName("lang-list");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

