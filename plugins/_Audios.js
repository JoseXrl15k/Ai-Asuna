
import fs from 'fs';

let handler = async (m, { conn }) => {
  let text = m.text.toLowerCase(); 
  let user = global.db.data.users[m.sender];

  const audioMap = {
    'linda': './Audios/hdpta.mp3',
    'sin sentimiento': './Audios/elcorazon.mp3',
    'elcorazone': './Audios/elcorazon.mp3',
    'ayuda': './Audios/ayuda.mp3',
    'gey': './Audios/gey.mp3', 
    'negra': './Audios/negra.mp3', 
    'callate': './Audios/callate.mp3', 
    'super albañil': './Audios/super albañil.mp3', 
    'peruano': './Audios/peruano.mp3', 
    'viva venezuela': './Audios/viva venezuela.mp3', 
    'que me importa': './Audios/que me importa.mp3', 
    'mondongo': './Audios/mondongo.mp3',
    'bebitofiufiu': './Audios/bebitofiufiu.mp3',
    'lala': './Audios/lala.mp3',
    'dios': './Audios/dios.mp3', 
    'sad': './Audios/sad.mp3', 
    'risa': './Audios/jaja.mp3', 
    'motivar': './Audios/motivar.mp3',
    'se unió usando el enlace de invitación del este grupo': './Audios/se unió usando el enlace de invitación del este grupo.mp3',
    'calculadora': './Audios/calculadora.mp3', 
    'tengo novia': './Audios/tengo novia.mp3'
    
  };

  for (let key in audioMap) {
    if (text.includes(key)) {
      try {
        if (fs.existsSync(audioMap[key])) {
          await conn.sendFile(m.chat, audioMap[key], `${key}.mp3`, '', m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument });
        } else {
          m.reply('El audio correspondiente no se encontró.');
        }
      } catch (err) {
        console.error(err);
        m.reply('Ocurrió un error al intentar enviar el audio.');
      }
      break;
    }
  }
};

handler.help = ['ayuda', 'gey', 'ayuda', 'elcorazon', 'sin sentimiento', 'linda','negra', 'callate', 'super albañil', 'que me importa', 'mondongo', 'bebitofiufiu', 'lala', 'dios', 'risa', 'tengo novia', 'calculadora', 'motivar',
'peruano', 'se unió usando el enlace de invitación del este grupo', 'viva venezuela', 'sad']
handler.customPrefix = /^(hola|cómo estás|Audios|gey|si te mueves|ayuda|sin sentimiento|linda|negra|eres tu|callate|super albañil|peruano|viva venezuela|que me importa|mondongo|bebitofiufiu|lala|dios|sad|jaja|motivar|calculadora|tengo novia|se unió usando el enlace de invitación del este grupo)/i;
handler.command = new RegExp;
handler.tags = ['Audios Dbz'] 
export default handler;