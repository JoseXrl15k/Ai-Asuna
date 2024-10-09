import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {

  if (!text) return conn.reply(m.chat, '*\`ιиgяєѕα єℓ иσмвяє ∂є ℓσ qυє qυιєяєѕ вυѕ¢αя\`*', m, fake)
        let mame = ` `
        let res = await yts(text)
        let vid = res.videos[0]
        if (!vid) throw `✳️ Vídeo/Audio no encontrado`
        let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
        //const url = 'https://www.youtube.com/watch?v=' + videoId
        m.react('🚀') 
  let play = `*\`[🚩 уσυтυвє - ρℓαу 🚩]\`*

> *\`тίтυℓσ 🌹:\`* ${vid.title}
> *\`ѕυвι∂σ 🌹:\`* ${vid.ago}
> *\`∂υяα¢ισ́и 🌹:\`* ${vid.timestamp}
> *\`νιѕтαѕ: 🌹\`* ${vid.views.toLocaleString()}`
 await conn.sendButton(m.chat, play, mame, thumbnail, [
    ['мυѕι¢α мρ3 🎧 </>', `${usedPrefix}fgmp3 ${url}`],
    ['νι∂єσ мρ4 🎥 </>', `${usedPrefix}fgmp4 ${url}`],
['мυѕι¢α ∂σ¢ 📂 </>', `${usedPrefix}ytmp3doc ${url}`],
['νι∂єσ ∂σ¢ 📂 </>', `${usedPrefix}ytmp4doc ${url}`]
  ], null, [['¢αиαℓ σfι¢ιαℓ 🍒', `${canal}`]], m)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']
handler.disabled = false

export default handler