let media = 'https://qu.ax/zUUy.jpeg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
await m.react('☕');
let str = `Asuna Yuuki`
await conn.sendButton(m.chat, `᥀·࣭࣪̇˖🐢Como desea Vincular\n\n• Selecciona un Boton.\n`, str, media, [
['𓏲୭᳟🚩̸̷̸̷᮫᮫໋໋݂݂ׄׄ.Qʀ𓏲᭔᷼⁩', '.serbotqr'],
['𓏲୭᳟🚩̸̷̸̷᮫᮫໋໋݂݂ׄׄ.ᴄᴏᴅɪɢᴏ𓏲᭔᷼⁩', '.serbotcode']], null, [
['𓏲୭᳟🚩̸̷̸̷᮫᮫໋໋݂݂ׄׄ.ᴄʀᴇᴀᴅᴏʀ𓏲᭔᷼⁩', `https://wa.me/51950148255`]], estilo)}
handler.command = /^serbot$/i
export default handler
