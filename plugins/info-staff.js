let media = './src/logo1.png'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '⚡️', key: m.key } })
let str = `🐢 *EQUIPO DE AYUDANTES*
🍟 *Bot:* ${global.botname}
🍟 *Versión:* ${global.vs}

*DUEÑO DE ASUNA YUUKI*

> ⭐Jose Xrl

*COLABORADORES*

> DIONEIBI 🚩

> RUDEOS DOMENICK MODS 😈
`
await conn.sendButton(m.chat, str, `͟͞ Asᴜɴᴀ-Yᴜᴜᴋɪৎ୭࠱࠭ ͟͞\n` + wm, media, [
['Menu Lista 🌸', '/menu']], null, [
['⏤͟͞ूAsᴜɴᴀ-Yᴜᴜᴋɪ', `${md}`]], fkontak)}
                      
handler.command = ['staff']
handler.register = true
handler.exp = 33

export default handler
