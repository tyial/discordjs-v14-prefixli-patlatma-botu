const { Prefix, SahipID } = require("../Config.js");
const { Events } = require("discord.js");

module.exports = (client) => {
    client.on(Events.MessageCreate, async (message) => {
        if (message.author.bot) return;
        if (!SahipID.includes(message.author.id)) return;
        if (!message.guild) return;
        if (!message.content.startsWith(Prefix)) return;

        let command = message.content.split(" ")[0].slice(Prefix.length);
        let params = message.content.split(" ").slice(1);

        let cmd;
        if (client.commands.has(command)) {
            cmd = client.commands.get(command);
        } else if (client.aliases.has(command)) {
            cmd = client.commands.get(client.aliases.get(command));
        }

        if (cmd) {
            cmd.run(client, message, params);
        }
    });
};
