/*____▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄_
───█▒▒░░░░░░░░░▒▒█─── 
────█░░█░░░░░█░░█────
─▄▄──█░░░▀█▀░░░█──▄▄─
█░░█─▀▄░░░░░░░▄▀─█░░█
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█----╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗----█
█----║║║╠─║─║─║║║║║╠─----█
█----╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝----█
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█*/

import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'

global.owner = [
  ['51950148255', 'Jᴏsᴇ Xʀʟ..🐢', true],
  ['18294868853', 'Dioneibi 🚩', true],
  ['595972157130', 'Ivan ✨', true]

]


global.mods = []
global.prems = []
   

global.packname = '𝘼𝙨𝙪𝙣𝙖 𝙔𝙪𝙪𝙠𝙞 𝘽𝙤𝙩 🌸'
global.author = '𝙅𝙤𝙨𝙚 𝙓𝙧𝙡'
global.wait = '🤗 𝙀𝙨𝙥𝙚𝙧𝙚 𝙪𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤 𝙨𝙤𝙮 𝙡𝙚𝙣𝙩𝙖...'
global.botname = '© 𝘼𝙞 𝘼𝙨𝙪𝙣𝙖'
global.textbot = '{\n "bot": {\n   "name": "Aɪ Asᴜɴᴀ",\n     "author": "Jose Xrl",\n   "status_bot": "active"\n }\n}'
global.listo = '*𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚 - 𝘽𝙮 𝘼𝙨𝙪𝙣𝙖 ฅ^•ﻌ•^ฅ*'
global.namechannel = '𝘾𝙖𝙣𝙖𝙡 𝘼𝙨𝙪𝙣𝙖 𝙔𝙪𝙪𝙠𝙞'


global.catalogo = fs.readFileSync('./storage/img/catalogo.png')
global.miniurl = fs.readFileSync('./storage/img/miniurl.jpg')

global.group = 'https://chat.whatsapp.com/EyIKeHl16JNB4J6O4KMjpD' //Grupo Ai Asuna
global.canal = 'https://whatsapp.com/channel/0029VaoRpDF5PO190ZCItg3D' //Canal Ai Asuna
global.canal2 = 'https://whatsapp.com/channel/0029VaYh3Zm4dTnQKQ3VLT0h' //CANAL GOKU BLACK
global.bgp2 = 'https://chat.whatsapp.com/ETIiqEsDfpiFepKjQEDi3O' //GRUPO GOKU BLACK
global.bgp3 = 'https://chat.whatsapp.com/GD0al1LF7Ux2dmPF0fDFYZ' //GRUPO GOKU BKACK LITE
global.bgp4 = 'https://chat.whatsapp.com/EwtaaShQF0l4DRch5EPB3g' //COMUNIDAD


global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: botname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}


global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios


global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'lokito.js'"))
  import(`${file}?update=${Date.now()}`)
})
