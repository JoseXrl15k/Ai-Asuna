//modificaciones Jose Xrl
import { ttdl } from 'ruhend-scraper';

let handler = async (m, { conn, args, usedPrefix, command }) => {
 if (!args || !args[0]) return conn.reply(m.chat, '*\`Ingresa El link De la canción a descargar 🚩\`*', m, fake, )
 if (!args[0].match(/tiktok/gi)) return conn.reply(m.chat, `Verifica que el link sea de TikTok`, m, fake).then(_ => m.react('✖️'))
    try {
await m.react('🕓');
        let {title, author, username, published, like, comment, share, views, bookmark, video, cover, duration, music, profilePicture
        } = await ttdl(args[0]);//variables del resultado de 'ttdl'
       
let txt = '';
txt += `*\`[ TIKTOK MP3 ]\`*\n\n`;

//AUDIO MP3 TIKTOK
        await conn.sendMessage(m.chat, { audio: { url: music }, mimetype: "audio/mp4", fileName: title + '.mp3' }, { quoted: m })
        await m.react('✅');
    } catch (e) {//salir si hay un error
        await m.react('✖️');
        console.log(e)
    }
};

handler.help = ['tiktokmp3 *<link>*']
handler.cookies = 3
handler.tags = ['dl']
handler.command = /^(tiktokmp3)$/i;

export default handler;