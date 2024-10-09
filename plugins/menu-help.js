import ws from 'ws';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    let uniqueUsers = new Map();

    global.conns.forEach((conn) => {
        if (conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED) {
            uniqueUsers.set(conn.user.jid, conn);
        }
    });

    let users = [...uniqueUsers.values()];
    let totalUsers = users.length;

    let totalusr = Object.keys(global.db.data.users).length;
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let username = conn.getName(m.sender);
    let locale = 'es';
    let d = new Date(new Date + 3600000);
    let time = d.toLocaleTimeString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    let sbot =
        conn.user.jid == global.conn.user.jid
        ? "`ʙᴏᴛ ::` Principal"
        : "`ꜱᴜʙʙᴏᴛ ᴅᴇ ::`" + `  Wa.me/${global.conn.user.jid.split`@`[0]}`;

    global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: ``,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${username}\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };

    let totalreg = Object.keys(global.db.data.users).length;
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;

    m.react("🚀");
    let menu = ``;

    let txt = ""
    txt += '`𝗖𝗥𝗘𝗔𝗗𝗢𝗥 ::`' + ` JoseXrl15k\n`;
    txt += '`𝗕𝗢𝗧 ::`' + ` • 𝘈𝚂ůnẚᅡ Ɓ𝙾Ƭ\n`;
    txt += '`𝗙𝗘𝗖𝗛𝗔 ::`' + ` ${fecha}\n`;
    txt += '`𝗩𝗘𝗥𝗦𝗜𝗢́𝗡 ::`' + ` ${vs}\n`;
    txt += `${sbot}\n`;
    txt += '`𝗣𝗥𝗘𝗙𝗜𝗝𝗢 ::`' + ` [  ${usedPrefix}  ]\n`;
    txt += '`𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 ::`' + ` ${totalusr}\n`;
    txt += '`𝗩𝗘𝗥𝗜𝗙𝗜𝗖𝗔𝗗𝗢𝗦 ::`' + ` ${rtotalreg}\n`;
    txt += '`𝗔𝗖𝗧𝗜𝗩𝗔 ::`' + ` ${uptime}\n`;
    txt += '`𝗖𝗢𝗡𝗧𝗔𝗖𝗧𝗢 ::` #owner\n\n';
    txt += "> Powered By JoseXrl15k";

    let listSections = [];

        listSections.push({
        title: `🌸 SELECCIÓNA LO QUE NECESITES`, highlight_label: `Popular Asuna Yuuki`,
        rows: [
            {
                header: "Aᴜᴛᴏ Vᴇʀɪғɪᴄᴀʀ ✅",
                title: "",
                description: `</> Verificacion Automáticamente`,
                id: `.reg SinNombre.15`,
            },
            {
                header: "Mᴇɴᴜ Cᴏᴍᴘʟᴇᴛᴏ 📖",
                title: "",
                description: `</> MENU COMPLETO`,
                id: `.allmenu`,
            },
            {
                header: "Mᴇɴᴜ Aᴜᴅɪᴏs 🔊",
                title: "",
                description: `</> 𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘢𝘶𝘥𝘪𝘰𝘴`,
                id: `${usedPrefix}menuaudios`,
            },
            {
                header: "Mᴇɴᴜ Nsғᴡ 🔞",
                title: "",
                description: `</> 𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘤𝘢𝘭𝘪𝘦𝘯𝘵𝘦`,
                id: `${usedPrefix}labiblia`,
            },
            {
                header: "Mᴇɴᴜ Juegos 🎮",
                title: "",
                description: `</> 𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘫𝘶𝘦𝘨𝘰𝘴`,
                id: `${usedPrefix}gamemenu`,
            },
            {
                header: "Mᴇɴᴜ Dᴇsᴄᴀʀɢᴀs 📥",
                title: "",
                description: `</> 𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘴`,
                id: `${usedPrefix}menudl`,
            },
            {
                header: "Mᴇɴᴜ Aɪ 🤖",
                title: "",
                description: `</> 𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘐𝘈-𝘉𝘰𝘵`,
                id: `${usedPrefix}menuai`,
            },
            {
                header: "Rᴇᴅᴇs 🚀",
                title: "",
                description: `</> 𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘭𝘢𝘴 𝘳𝘦𝘥𝘦𝘴 𝘥𝘦𝘭 𝘣𝘰𝘵`,
                id: `${usedPrefix}redes`,
            },
            {
                header: "Gʀᴜᴘᴏs Dᴇ Asᴜɴᴀ 🚩",
                title: "",
                description: `</> 𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘭𝘰𝘴 𝘨𝘳𝘶𝘱𝘰𝘴 𝘥𝘦𝘭 𝘣𝘰𝘵`,
                id: `${usedPrefix}grupos`,
            },
        ],
    });

    let vid = "https://qu.ax/xvXl.jpg";
    let img = "https://ibb.co/sRhHT4r";
    let img2 = "https://qu.ax/KJrp.jpeg";
    let img3 = "https://qu.ax/wtVo.jpeg";
    let img4 = "https://qu.ax/DYsL.jpeg";

    await conn.sendListB(m.chat, menu, txt, `『 𝑴𝑶𝑺𝑻𝑹𝑨𝑹 𝑳𝑰𝑺𝑻𝑨 』`, [vid, img, img2, img3, img4].getRandom(), listSections, estilo);
};

handler.command = ["menu", "help", "menú"];

export default handler;


function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}


  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 1: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 💤'; break;
  case 2: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🦉'; break;
  case 3: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 4: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 5: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 6: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌄'; break;
  case 7: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 8: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 9: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 10: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌞'; break;
  case 11: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌨'; break;
  case 12: hour = 'Bᴜᴇɴᴏs Dɪᴀs ❄'; break;
  case 13: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌤'; break;
  case 14: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌇'; break;
  case 15: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🥀'; break;
  case 16: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌹'; break;
  case 17: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌆'; break;
  case 18: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 19: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 20: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌌'; break;
  case 21: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 22: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 23: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
}
  var greeting = hour;