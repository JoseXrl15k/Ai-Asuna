const xppercookies = 500;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^rentar/i, '');
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xppercookies) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);

  if (global.db.data.users[m.sender].cookies >= xppercookies * count) {
    global.db.data.users[m.sender].cookies -= xppercookies * count;
    global.db.data.users[m.sender].tokens += count;;

    let userRents = global.db.data.userRents || {};
    
    if (!userRents[m.sender]) {
      userRents[m.sender] = {
        tokens: 0,
        groups: []
      };
    }

    userRents[m.sender].tokens += count;

    global.db.data.userRents = userRents;

    conn.reply(m.chat, `
┌─『 Rentar 』*
│╭──────────────┄
││ *Compra Nominal* : + ${count} Token
││ *Gastado* : -${xppercookies * count} cookies 🍪
││ *Tokens Disponibles* : ${userRents[m.sender].tokens}
│╰──────────────┄
└──────────────`, m, rcanal);
  } else {
    conn.reply(m.chat, `😔 Lo siento, no tienes suficientes *Cookies 🍪* para comprar *${count}* Token`, m, rcanal);
  }
};
handler.help = ['rentar'];
handler.tags = ['grupo'];
handler.register = true;
handler.command = ['rentar'];

handler.disabled = false;

export default handler;