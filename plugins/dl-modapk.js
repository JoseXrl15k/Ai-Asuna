import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `*[❗] Ingrese el nombre de la APK que quiera buscar.*`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `📲 *∂єѕ¢αяgα∂σя ∂є αρтσι∂є* 📲\n\n📌 *Nσмвяє:* ${data5.name}\n📦 *ρα¢кαgє:* ${data5.package}\n🕒 *ύℓтιмα α¢тυαℓιzα¢ισ́и:* ${data5.lastup}\n📥 *Tαмαи̃σ:* ${data5.size}`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '*[ 🌩️ ] Eℓ αя¢нινσ єѕ ∂ємαѕια∂σ ρєѕα∂σ ρσя ℓσ ¢υαℓ иσ ѕє єиνιαяά.*'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `*[❗] Error, no se encontrarón resultados para su búsqueda.*`;
  }    
};
handler.command = /^(apkmod|modapk|dapk2|aptoide|aptoidedl)$/i;
export default handler;
