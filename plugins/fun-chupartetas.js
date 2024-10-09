//Codígo creado por Jose Xrl

import fs from 'fs';
import path from 'path';

let handler = async (m, { conn, usedPrefix }) => {
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    else who = m.chat;
    if (!who) throw '🚩 Etiqueta o menciona a alguien';

    let user = global.db.data.users[who];
    let name = conn.getName(who);
    let name2 = conn.getName(m.sender);
    m.react('🔥');
    let str = `${name2} le está chupando las tetas a ${name}`.trim();
    if (m.isGroup){
    
    let pp = 'https://telegra.ph/file/1104aa065e51d29a5fb4f.mp4' //yaa
    let pp2 = 'https://telegra.ph/file/f8969e557ad07e7e53f1a.mp4' //yaa
    let pp3 = 'https://telegra.ph/file/f8cf75586670483fadc1d.mp4' //yaa
    let pp4 = 'https://telegra.ph/file/7b181cbaa54eee6c048fc.mp4' //yaa
    let pp5 = 'https://telegra.ph/file/01143878beb3d0430c33e.mp4' //yaa
    let pp6 = 'https://telegra.ph/file/9827c7270c9ceddb8d074.mp4' //yaa
    let pp7 = 'https://telegra.ph/file/95efbd8837aa18f3e2bde.mp4' //yaa
    let pp8 = 'https://telegra.ph/file/b178b294a963d562bb449.mp4' //yaa
    let pp9 = 'https://telegra.ph/file/949dff632250307033b2e.mp4' //yaa
    let pp10 = 'https://telegra.ph/file/9e1240c29f3a6a9867aaa.mp4' //yaa
    const videos = [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9, pp10];
    const video = videos[Math.floor(Math.random() * videos.length)];
    conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption:str, mentions: [m.sender] },{ quoted: estilo })
    };
   
}

handler.help = ['chupartetas @tag'];
handler.tags = ['fun'];
handler.command = ['suckboobs','chupartetas'];
handler.group = true;

export default handler;