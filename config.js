const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "201070659830";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_32_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA3NSxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MixcbiAgICAgICAgMTkzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU4LFxuICAgICAgICAzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDY4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMsXG4gICAgICAgIDkxLFxuICAgICAgICAwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NixcbiAgICAgICAgMTE1LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDkwLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM0LFxuICAgICAgICA3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MCxcbiAgICAgICAgNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAxLFxuICAgICAgICA4NixcbiAgICAgICAgNzgsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDczLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNixcbiAgICAgICAgOTAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNixcbiAgICAgICAgMTcyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIndUWUthV0pQc2pGSGU1QUhUMFViTGg4dEJYN1dybEoyVnp6WFFVUVRBeWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjAxMDcwNjU5ODMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1QkQ1RjY1NDFCQTJDNjg5OURFNzIxM0Y3QTEzMjlGNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyNjM1NDBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMDEwNzA2NTk4MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE2MTg2QTY2QTEwMEZGNDFEMjk4RUY4ODlFMkJDMDJEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjI2MzU0MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1anBoYUktY1QzV19tTko5OVlydHNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBlMWRiNDhmLTExYjctNGI4ZS1hZmU2LTEwODE2MGRkMDRiYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTEsXG4gICAgICA5LFxuICAgICAgNjEsXG4gICAgICAyMDYsXG4gICAgICAxMDEsXG4gICAgICAwLFxuICAgICAgMTkyLFxuICAgICAgODMsXG4gICAgICAxNDUsXG4gICAgICAxMDcsXG4gICAgICAzMixcbiAgICAgIDE1LFxuICAgICAgNDAsXG4gICAgICAxNTQsXG4gICAgICAxNDcsXG4gICAgICAxMjEsXG4gICAgICAyMTcsXG4gICAgICAyMjYsXG4gICAgICAyMTMsXG4gICAgICAxMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ1LFxuICAgICAgMzIsXG4gICAgICA4MyxcbiAgICAgIDIsXG4gICAgICAyMTksXG4gICAgICAyMzAsXG4gICAgICAxNzAsXG4gICAgICAzNSxcbiAgICAgIDYzLFxuICAgICAgMjAwLFxuICAgICAgNTEsXG4gICAgICAyMSxcbiAgICAgIDI4LFxuICAgICAgMjE0LFxuICAgICAgNjksXG4gICAgICAxMjQsXG4gICAgICAxNjEsXG4gICAgICAxMzgsXG4gICAgICAxOTUsXG4gICAgICA3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQRkNRMTdaVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjAxMDcwNjU5ODMwOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzA3MjE4NjgyNzU5NjA6MTVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRmVsb25cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJZUJ4NGNHRU8zUG5yVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJWWUNjNG44QnZxTkNWbjhtWjZ2dmNMSnZ0Mm1xbWxPNEt1M3ZRemg5UTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNDRZWi9tYnllbng5RG9SVitibFN0bjBGZ3phdnY3dzlFWDdEWnRrK3Vva1NNU0Y3bEJaUDZETHBpSGhkNlV5dlVBSVRjUTMyL1FlY0Y2bkxJWTRtQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMVZTWXZMbkRTRHMxclR2aWY4dVhwZGtvT1B5S2RLRXEwaitWcVpvWXlRRFZPTWJzUnAvUTBtbC9mQTlOL2w0bUlpVExjRzl5dmwyZ3l0WVltclZKaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjAxMDcwNjU5ODMwOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjYzNTM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSU5QXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJTlAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYL3crTXJnTFBGMXBMK21kSVhzc1E3RjVyU0h0bGVUck1qRG9xT3djMTBnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MjY0NTYxOTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjI2MzU0MTA1MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "jj",


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
