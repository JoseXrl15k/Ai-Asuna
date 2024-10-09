import db from '../lib/database.js'
import { createHash } from 'crypto'
import fs from 'fs'
import fetch from 'node-fetch'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) return m.reply(`🚩 Ya estás registrado.\n\n*¿Quiere volver a registrarse?*\n\nUse este comando para eliminar su registro.\n*${usedPrefix}unreg* <Número de serie>`)
  if (!Reg.test(text)) return m.reply(`🚩 Formato incorrecto.\n\nUso del comamdo: *${usedPrefix + command} nombre.edad*\nEjemplo : *${usedPrefix + command} ${name2}.18*`)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) return m.reply('🚩 El nombre no puede estar vacío.')
  if (!age) return m.reply('🚩 La edad no puede estar vacía.')
  if (name.length >= 100) return m.reply('🚩 El nombre es demasiado largo.' )
  age = parseInt(age)
  if (age > 100) return m.reply('👴🏻 Wow el abuelo quiere jugar al bot.')
  if (age < 5) return m.reply('🚼  hay un abuelo bebé jsjsj. ')
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)        
  let img = await (await fetch(`https://ibb.co/sRhHT4r`)).buffer()
  let txt = '*`📄 VERIFICACIÓN ACTUAL 📄`*\n'
      txt += ` *∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷*\n`
      txt += `┊ *</> NOMBRE*\n`
      txt += `┊ ⁘ \`${name}\`\n`
      txt += `┊\n`
      txt += `┊ *</> EDAD* \n`
      txt += `┊ ⁘ \`${age} años\`\n`
      txt += `┊\n`
      txt += `┊ *</> FECHA*\n`
      txt += `┊ ⁘ \`${fecha}\`\n`
      txt += `┊\n`
      txt += `┊ *</> IDENTIFICADOR SERIAL*\n`
      txt += `┊ ⁘ \`${sn}\`\n`
      txt += `╰┈┈┈┈┈┈┈┈┈┈┈┈•\n\n`
      txt += '🌻 \```Escriba el siguiente comando para ver el menu completo:\```\n'
      txt += `✩ *.allmenu*`
await conn.sendMini(m.chat, botname, textbot, txt, img, img, canal, m)
await m.react('✅')
}
handler.help = ['reg'].map(v => v + ' *<nombre.edad>*')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler