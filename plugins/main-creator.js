let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:JoseXrl15k;;\nFN:JoseXrl15k \nORG:JoseXrl15k 🐢\nTITLE:\nitem1.TEL;waid=51950148255:51950148255\nitem1.X-ABLabel:JoseXrl15k 🐢\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:JoseXrl15k  🐢\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'JoseXrl15k⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
