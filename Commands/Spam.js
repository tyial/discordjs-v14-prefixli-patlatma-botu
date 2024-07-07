const Config = require("../Config.js")

exports.run = async (client, message, args) => {
    message.delete()
    const channel = message.channel
    for (let i = 0; i < 50; i++) {
        channel.send(`@everyone | Bu sunucu ${Config.SahipAdı} tarafından patlatılmıştır.\n ${Config.ReklamSunucuLink}`);
    }
};
exports.conf = {
    aliases: [],
    komut: "spam"
};