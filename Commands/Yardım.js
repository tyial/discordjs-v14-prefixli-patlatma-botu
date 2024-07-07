exports.run = async (client, message, args) => {
    message.delete()
    const author = message.author
    author.send("**Komutlarım;**\n`+patlat`,\n`+ban`,\n`+spam`,\n`+yetki`")
};
exports.conf = {
    aliases: [],
    komut: "yardım"
};