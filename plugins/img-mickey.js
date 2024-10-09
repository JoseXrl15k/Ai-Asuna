let handler = async (m, {conn, command}) => {
  let url = Mickey[Math.floor(Math.random() * Mickey.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 Mickey`.trim(), m)
};
handler.help = ["Mickey"];
handler.tags = ["internet"];
handler.command = /^(Mickey)$/i;
export default handler;

global.Mickey = [
  "https://qu.ax/wepw.jpg",
  "https://qu.ax/rKie.jpg",
  "https://qu.ax/LTzg.jpg",
  "https://qu.ax/WMjp.jpg",
];

handler.limit = 4;