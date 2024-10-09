let handler = async (m, { conn, command, usedPrefix }) => {
let pp = 'https://qu.ax/zUUy.jpeg'
m.react('🌵')
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `\`乂 S C R I P T  -  B O T\`

> 🍂 *Te gusta nuestro Bot te invito a dejarnos una estrella a nuestro repositorio oficial para seguir mejorando nuestra Bot* 🚀¡Agradecemos tu apoyo! ayudanos a mejorar nuestra bot.
`
await conn.sendButton(m.chat, estado, 'ᴀι ᴀѕυиα уυυυкι', pp, [
['Dᴜᴇɴ̃ᴏ 🌩️', '.owner']], null, [['ɢιт ʜυв 🍒', `https://github.com/JoseXrl15k/Ai-Asuna`]], estilo)
}
handler.help = ['script']
handler.tags = ['info']
handler.command = /^(sc|script|Repositorio?)$/i

export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
