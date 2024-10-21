require('dotenv').config();
const TGbot = require("node-telegram-bot-api")

const TG_TOKEN = process.env.TG_TOKEN
const URL_TO_BOT = process.env.URL_TO_BOT

const bot = new TGbot(TG_TOKEN, {polling: true});

function sleep(sec){
    let ms = sec*1000
    return new Promise(resolve => setTimeout(resolve, ms))
}

const helpText = "todo (list of commands)"
const description = "It will be Avito assistant but not yet"
const commands = [{
    command: "start",
    description: "Запуск бота"
},
{
    command: "ref",
    description: "Получить реферальную ссылку"
},
{
    command: "help",
    description: "Раздел помощи"
},]

bot.on("polling_error", err => console.log(err.data.error.message))

bot.setMyCommands(commands)

bot.on("text", async message => {
    console.log(message)

    if (message.text.startsWith("/help")){
        await bot.sendMessage(message.chat.id, helpText);
    }

    if (message.text.startsWith("/start")){
        await bot.sendMessage(message.chat.id, `Hey Hi, ${message.from.first_name} aka "${message.from.username}"! What's up?`)
        await sleep(1.1)
        await bot.sendMessage(message.chat.id,  `*Are you ready to start? 😀*`, {parse_mode: 'MarkdownV2'})
    }

    if (message.text.startsWith("/ref")){
        await bot.sendMessage(message.chat.id, `Give this to your friend: ${URL_TO_BOT}?start=${message.from.id}`)
    }

})




