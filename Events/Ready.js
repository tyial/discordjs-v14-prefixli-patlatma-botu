const { ActivityType, Events } = require("discord.js");
const { SahipAdı } = require("../Config.js");

module.exports = (client) => {
    client.on(Events.ClientReady, () => {
        client.user.setActivity(`${SahipAdı} tarafından yapıldım.`, { type: ActivityType.Playing });
        client.user.setStatus("dnd");
        console.success(`Bot başarıyla Discord'a bağlandı!`);
    });
};