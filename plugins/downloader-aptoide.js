let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
if (!args[0]) throw `\`\`\`[ 🌟 ] Ingresa el nombre de la aplicación que quieres descargar. Ejemplo:\n${usedPrefix + command} Whatsapp\`\`\``
let res = await fetch(`https://api.dorratz.com/v2/apk-dl?text=${args[0]}`);
let result = await res.json();
let { name, size, lastUpdate, icon } = result;
let URL = result.dllink
let packe = result.package
let texto = `  ❯───「 𝗔𝗣𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 」───❮
    🌸 Nombre : ⇢ ${name} 📩
    🌸 Tamaño : ⇢ ${size} ⚖️
    🌸 Package : ⇢ ${packe} 📦
    🌸 Actualizado : ⇢ ${lastUpdate} 🗓️
    
## Su aplicación se enviará en un momento POR FAVOR ESPERE . . .`
await conn.sendFile(m.chat, icon, name + '.jpg', texto, m)

await conn.sendMessage(m.chat, { document: { url: URL }, mimetype: 'application/vnd.android.package-archive', fileName: name + '.apk', caption: ''}, { quoted: m });
}
handler.command = ['apk', 'apkdl', 'modapk']
handler.help = ['apkdl']
handler.tags = ['downloader']
handler.group = true 
export default handler