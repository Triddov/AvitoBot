const en = {
    helpText: `*This is a bot to simplify interaction with Avito*\\. 
    
    Its functionality:

    \\- Automatically send new messages coming to your account
    \\- View the *latest messages*
    \\- View your *stared* on Avito
    \\- View your *announcements*
    \\- View *statistics*
    
    Also:
    \\/lang \\- Change the language to russian
    \\/ref \\- Share a personal link to the bot
    \\/help \\- See this information again`,
    description: "It will be Avito assistant but not yet",
    start: "Start bot",
    ref: "Get a referral link",
    help: "Help section",
    lang: "Switch language / Сменить язык",
    greetingsBegin: `Hey Hi, `,
    greetingsEnd: ` What's up?`,
    readyToStart: `*Are you ready to start? 😀*`,
    chooseFunc: `So then choose one of the functions in the panel or check menu`,
    giveRef: "Give this to your friend: ",
    messFunc: 'Last messages',
    statFunc: 'Statistics',
    announFunc: 'My announcements',
    staredFunc: 'Stared'
}

const ru = {
    helpText: `*Это бот для упрощения взаимодействия с Авито*\\. 
    
    Его функционал:

    \\- Автоматическая отправка сообщений, приходящих на твой аккаунт
    \\- Просмотр *последних сообщений*
    \\- Просмотр твоих *избранных* на Авито
    \\- Просмотр твоих *объявлений*
    \\- Просмотр *статистики*
    
    А также:
    \\/lang \\- Поменять язык на английский
    \\/ref \\- Поделиться персональной ссылкой на бота
    \\/help \\- Посмотреть эту информацию снова`,
    description: "Это будет бот-ассистент Авито, но пока что нет",
    start: "Запуск бота",
    ref: "Получить реферальную ссылку",
    help: "Раздел помощи",
    lang: "Сменить язык / Switch language",
    greetingsBegin: `О привет, `,
    greetingsEnd: ` Че как дела?`,
    readyToStart: `*Ты готов? 😀*`,
    chooseFunc: `Выбирай одну из функций в панели или загляни в меню`,
    giveRef: "Отправь ссылку своему другу: ",
    messFunc: 'Последние сообщения',
    statFunc: 'Статистика',
    announFunc: 'Мои объявления',
    staredFunc: 'Избранное'
}

function chooseLang({ lang }){
    if (lang === "ru"){ return ru }
    else{ return en }
}


module.exports = {ru, chooseLang}
