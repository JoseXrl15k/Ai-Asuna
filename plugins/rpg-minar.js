let cooldowns = {}

let handler = async (m, { conn }) => {
let dinero = Math.floor(Math.random() * 5000)
let tiempo = 5 * 60
if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempo * 1000) {
let tiempo2 = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempo * 1000 - Date.now()) / 1000))
conn.reply(m.chat, `🙂 Hola ${nombre}, Ya has minado recientemente, espera ⏱️ *${tiempo2}* para regresar a la Mina.`, m, rcanal)
return
}
global.db.data.users[m.sender].exp += dinero
let minar = `🥳 Genial! minaste *${dinero} 💫 XP.*`
await m.react('⛏️')
await conn.reply(m.chat, minar, m, rcanal)
cooldowns[m.sender] = Date.now()}

handler.help = ['minar']
handler.tags = ['rpg']
handler.command = ['minar', 'miming', 'mine'] 
handler.register = true 
export default handler

function segundosAHMS(segundos) {
let horas = Math.floor(segundos / 3600)
let minutos = Math.floor((segundos % 3600) / 60)
let segundosRestantes = segundos % 60
return `${minutos} minutos y ${segundosRestantes} segundos`
}let cooldowns = {}

let handler = async (m, { conn }) => {
let user = global.db.data.users[m.sender]
let cookies = `${pickRandom([20, 5, 7, 8, 88, 40, 50, 70, 90, 999, 300])}` * 1; let emerald = `${pickRandom([1, 5, 7, 8])}` * 1; let iron = `${pickRandom([5, 6, 7, 9, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80])}` * 1; let gold = `${pickRandom([20, 5, 7, 8, 88, 40, 50])}` * 1; let coal = `${pickRandom([20, 5, 7, 8, 88, 40, 50, 80, 70, 60, 100, 120, 600, 700, 64])}` * 1; let stone = `${pickRandom([200, 500, 700, 800, 900, 4000, 300])}` * 1

let time = global.db.data.users[m.sender].lastmiming + 600000
if (new Date - global.db.data.users[m.sender].lastmiming < 600000) return conn.reply(m.chat, `*⏰ Debes esperar ${msToTime(time - new Date())} para volver a minar*`, m, )

let hasil = Math.floor(Math.random() * 1000)
let info = `⛏️ *Te has adentrando en lo profundo de las cuevas*

> *💥 Obtuviste estos recursos*

💣 *Exp*: ${hasil}
🍪 *Cookies 🍪*: ${cookies}
💥 *Esmeralda*: ${emerald}
🔩 *Hierro*: ${iron}
🏅 *Oro*: ${gold}
🕋 *Carbón*: ${coal}
🪨 *Piedra*: ${stone}`

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '💥 *Minando.. - AsunaYuuki* 💗', 'status@broadcast' )
await m.react('⛏️')

user.health -= 50
user.pickaxedurability -= 30
user.cookies += cookies
user.iron += iron
user.gold += gold
user.emerald += emerald
user.coal += coal
user.stone += stone
user.lastmiming = new Date * 1
}

handler.help = ['minar']
handler.tags = ['rpg']
handler.command = ['minar', 'miming', 'mine'] 
handler.register = true 
handler.group = true
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? '0' + hours : hours
minutes = (minutes < 10) ? '0' + minutes : minutes
seconds = (seconds < 10) ? '0' + seconds : seconds

return minutes + ' m y ' + seconds + ' s '
}