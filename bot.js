const {  Snake  } = require("tgsnake")
const ping = require("ping")
const commands = [];
const utils = require('./utils'); // using utils
const bot = new Snake({
  apiHash : "process.env.HASH", // your api hash // e.g 123e1bd232c12a13f1234567be0c9
  apiId :  process.env.API // your api id // e.g 123456
  // for the bot from the father's bot, add the line botToken: "123456:abcdefghijklmniurs" // token
})

//process.env.HASH - your token in telegram api
//process.env.API - your api id

const _esStart = require('./start.json');
async function getStart() {try {_esStart.push(['ok']); await bot.run()}catch (s) {console.error("Error connect: " + s)} return 'ok';};

setTimeout(getStart, 500);

/* basic functions for your static user-bots */
bot.hears(".info", async (ctx) => {  // one command to edit a message, often used to perform functions
  console.log(`🛸 LOGGING: ${ctx.text}`)
  const msg = await ctx.reply("🔍 Search...");
  async function go() {
  
  await ctx.telegram.editMessage(ctx.chat.id,msg.message.id,`📖 Found:  info... `)
  }
  setTimeout(go, 2000);
})

/* next for api, getting answers and then */
bot.hears(".ping", async (ctx) => { // two command for check ping
 console.log(`🛸 LOGGING: ${ctx.text}`)
 const ress = console.log(ctx);
 const msgId = ctx.id;
 const pingRes = await ping.promise.probe("google.com");
 const pongMsg = `🏓 Pong\n${pingRes.time} ms`;
 if(msgId) {
  ctx.telegram.editMessage(ctx.chat.id,msgId,pongMsg);
 } else {
   await ctx.reply(pongMsg);
 } 
})

//downloads module - npm install [package] or yarn add [package]