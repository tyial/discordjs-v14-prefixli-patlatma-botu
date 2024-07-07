const { Collection } = require("discord.js");
const fs = require("fs");
const path = require("path");

const komutlar = [];

module.exports = async (client) => {
    client.commands = new Collection();
    client.aliases = new Collection();

    const commandFiles = fs.readdirSync(path.join(__dirname, "../Commands")).filter(file => file.endsWith(".js"));

    for (const file of commandFiles) {
        const props = require(`../Commands/${file}`);

        komutlar.push(props.conf.komut);
        client.commands.set(props.conf.komut, props);

        if (props.conf.aliases) {
            props.conf.aliases.forEach(alias => {
                client.aliases.set(alias, props.conf.komut);
            });
        }
    }
}
