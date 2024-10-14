import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://i.imgur.com/CDhYyY5.jpeg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*💗 GRUPO OFICIAL*

   *_Asᴜɴᴀ Yᴜᴜᴋɪ Cᴀɴᴀʟ🛍️_*
┃🌸 ❏ ${canal}

   *_ ͟͞Cᴀɴᴀʟ Gᴏᴋᴜ Bʟᴀᴄᴋ_*
┃🌸 ❏ ${canal2}

   *_Gʀᴜᴘᴏ Oғɪᴄɪᴀʟ Asᴜɴᴀ Yᴜᴜᴋɪ_*
┃🌸 ❏ ${group} 

   *_Gʀᴜᴘᴏ Oғɪᴄɪᴀʟ Gᴏᴋᴜ Bʟᴀᴄᴋ_*
┃🌸 ❏ ${bgp2}

   *_Gᴏᴋᴜ Bʟᴀᴄᴋ Lɪᴛᴇ Bᴏᴛ_*
┃🌸 ❏ ${bgp3}

   *_Cᴏᴍᴜɴɪᴅᴀᴅ Gᴏᴋᴜ Bʟᴀᴄᴋ_*
┃🌸 ❏ ${bgp4}
*_╰━━━━━━━━━━━━━━━━⊜_*
> 🚩 ${textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos)$/i
export default handler
