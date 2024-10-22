const TGbot = require("node-telegram-bot-api")
const { ru, chooseLang } = require("./languages")
const { sleep } = require("./other")
require('dotenv').config({path: `../.env`});

const TG_TOKEN = process.env.TG_TOKEN
const URL_TO_BOT = process.env.URL_TO_BOT
// const AVITO_TOKEN = process.env.AVITO_TOKEN

const bot = new TGbot(TG_TOKEN, {polling: true});

let fields = ru  // default bot language


bot.on("polling_error", err => console.log(err.data.error.message))

bot.on("text", async message => {
    console.log(message)

    if (message.text.startsWith("/start")){
        fields = chooseLang({lang: message.from.language_code})

        let description = fields["description"]
        let commands = [{
                command: "start",
                description: fields["start"]
            },
            {
                command: "ref",
                description: fields["ref"]
            },
            {
                command: "help",
                description: fields["help"]
            },
            {
                command: "lang",
                description: fields["lang"]
            },]

        bot.setMyCommands(commands)

        await bot.sendMessage(message.chat.id,
            fields["greetingsBegin"]+`${message.from.first_name} aka "${message.from.username}"!`+fields["greetingsEnd"])
        await sleep(0.85)
        await bot.sendMessage(message.chat.id,  fields["readyToStart"], {parse_mode: 'MarkdownV2'})
        await sleep(1.1)
        await bot.sendMessage(message.chat.id, fields["chooseFunc"], {reply_markup: {keyboard:
                    [[fields["messFunc"], fields["statFunc"]], [fields["announFunc"], fields["staredFunc"]]], resize_keyboard: true
            }})
    }

    if (message.text.startsWith("/help")){
        await bot.sendMessage(message.chat.id, fields["helpText"], {parse_mode: 'MarkdownV2'});
    }


    if (message.text.startsWith("/ref")){
        await bot.sendMessage(message.chat.id, `${fields["giveRef"]}${URL_TO_BOT}?start=${message.from.id}`)
    }

})




