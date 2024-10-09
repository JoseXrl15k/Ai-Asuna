// By Jtxs 🐢
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat, '*Ingresa un enlace de Zedge*', m, fake);
await m.react('🕓');
 
try {
let api = await fetch(`https://apis-starlights-team.koyeb.app/starlight/zedge-dl?url=${args[0]}`);
let json = await api.json();
let { url } = json

await m.react('✅');
conn.sendMessage(m.chat, { audio: { url: url }, fileName: `zedge.mp3`, mimetype: 'audio/mpeg' }, { quoted: m })


} catch {
await m.react('✖️');
conn.reply('error :v')    
}
}
    
handler.help = ['zedgedl *<link>*']
handler.cookies = 3
handler.tags = ['dl']
handler.command = ['zedgedl'];

export default handler;