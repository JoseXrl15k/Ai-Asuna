import fetch from 'node-fetch'

export async function before(m, { conn }) {
let img = await (await fetch(`https://i.imgur.com/LwER8uG.jpeg`)).buffer()

 global.rcanal = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363337523216426@newsletter",
      serverMessageId: 100,
      newsletterName: namechannel,
    },
    },
  }

 global.adReply = {
	    contextInfo: { 
             forwardingScore: 9999, 
                 isForwarded: false, 
                    externalAdReply: {
				    showAdAttribution: true,
					title: botname,
					body: textbot,
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnailUrl: img,
                    thumbnail: img,
		           sourceUrl: canal,
		           mediaType: 1,
                   renderLargerThumbnail: true
				}
			}
		}
}