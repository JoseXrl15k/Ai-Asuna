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
   // m.react('⏳');
    await conn.sendMessage(m.chat, { react: { text: '👊🏻', key: m.key } })
    let str = `${name2} golpeó a ${name}`.trim();
    if (m.isGroup){
    
    let pp = 'https://telegra.ph/file/8e60a6379c1b72e4fbe0f.mp4'  
    let pp2 = 'https://telegra.ph/file/8ac9ca359cac4c8786194.mp4' 
    let pp3 = 'https://telegra.ph/file/cc20935de6993dd391af1.mp4'
    let pp4 = 'https://telegra.ph/file/9c0bba4c6b71979e56f55.mp4' 
    let pp5 = 'https://telegra.ph/file/5d22649b472e539f27df9.mp4' 
    let pp6 = 'https://telegra.ph/file/804eada656f96a04ebae8.mp4' 
    let pp7 = 'https://telegra.ph/file/3a2ef7a12eecbb6d6df53.mp4' 
    let pp8 = 'https://telegra.ph/file/c4c27701496fec28d6f8a.mp4' 
    let pp9 = 'https://telegra.ph/file/c8e5a210a3a34e23391ee.mp4' 
    let pp10 = 'https://telegra.ph/file/70bac5a760539efad5aad.mp4' 
    const videos = [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9, pp10];
    const video = videos[Math.floor(Math.random() * videos.length)];
    conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption:str, mentions: [m.sender] },{ quoted: estilo })
    };
   
}

handler.help = ['golpear @tag'];
handler.tags = ['fun'];
handler.command = ['punch','pegar','golpear'];
handler.group = true;

export default handler;