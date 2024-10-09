
import yts from 'yt-search';
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    if (!text) throw `*\`Iиgяєѕα єℓ иσмвяє ∂є ℓσ qυє qυιєяєѕ вυѕ¢αя\`*`;
    m.react('🔍');

    let result = await yts(text);
    let ytres = result.videos;


    let listSections = [];
    for (let index in ytres) {
        let v = ytres[index];
        listSections.push({
            title: `${index}┃ ${v.title}`,
            rows: [
                {
                    header: '🎧мυѕι¢α </>',
                    title: "",
                    description: `🚀 тιтυℓσ : ${v.title}\n`, 
                    id: `${usedPrefix}fgmp3 ${v.url}`
                },
                {
                    header: "🎥νι∂єσ",
                    title: "" ,
                    description: `🚀тιтυℓσ : ${v.title}`, 
                    id: `${usedPrefix}fgmp4 ${v.url}`
                }
            ]
        });
    }

    await conn.sendListB(m.chat, '*𝘈𝘴𝘶𝘯𝘢 𝘉𝘰𝘵*🔎', `\n 🌱 Rєѕυℓтα∂σѕ ∂є:\n *${text}*`, `σρ¢ισиєѕ`, ytres[0].image, listSections, m);
};

handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 
handler.disabled = false

export default handler