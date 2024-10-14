import speedTest from 'speedtest-net'

let handler = async (m, { conn }) => {
  try {
    await m.react('🕓')
    let test = await speedTest({ acceptLicense: true, acceptGdpr: true })

    let serverName = test.server?.name || 'Desconocido'
    let serverLocation = test.server?.location || 'Desconocida'
    let ping = test.ping?.latency ? `${test.ping.latency} ms` : 'No disponible'
    let downloadSpeed = test.download?.bandwidth ? `${(test.download.bandwidth / 125000).toFixed(2)} Mbit/s` : 'No disponible';
    let uploadSpeed = test.upload?.bandwidth ? `${(test.upload.bandwidth / 125000).toFixed(2)} Mbit/s` : 'No disponible'

    let txt = '`乂  S P E E D - T E S T`\n\n'
        txt += `	♢˚₊· ͟͟͞͞🌹   *Hosted By* : ${serverName}\n`
        txt += `	♢˚₊· ͟͟͞͞🌹   *Ubicación* : ${serverLocation}\n`
        txt += `	♢˚₊· ͟͟͞͞🌹   *Ping* : ${ping}\n`
        txt += `	♢˚₊· ͟͟͞͞🌹   *Speed Descarga* : ${downloadSpeed}\n`
        txt += `	♢˚₊· ͟͟͞͞🌹   *Speed Subida* : ${uploadSpeed}\n\n`
        txt += `> 🚩 ${textbot}`

    await conn.reply(m.chat, txt, m, rcanal)
    await m.react('✅')

  } catch {
    await m.react('✖️')
  }
}
handler.help = ['speedtest']
handler.tags = ['main']
handler.command = ['speedtest', 'testspeed']

export default handler