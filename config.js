const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "x.com"                       // put your app url here,
global.email ="mohammednassr82@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "@the 9ova" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_47_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5LFxuICAgICAgICAzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDY1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTksXG4gICAgICAgIDY5LFxuICAgICAgICA2OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcxLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE0LFxuICAgICAgICAzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUxLFxuICAgICAgICA4MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDMyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDczLFxuICAgICAgICA2MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQxLFxuICAgICAgICAzMyxcbiAgICAgICAgODksXG4gICAgICAgIDM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzYsXG4gICAgICAgI…"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "nova",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "9ova bot",
  ownername:process.env.OWNER_NAME|| "the 9ova",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
