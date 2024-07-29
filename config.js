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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_14_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDM2LFxuICAgICAgICAzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAzOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2OSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ2LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg0LFxuICAgICAgICA1NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM2LFxuICAgICAgICA5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NCxcbiAgICAgICAgODAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTExLFxuICAgICAgICA1OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDUwLFxuICAgICAgICAyNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDg3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDMsXG4gICAgICAgIDg2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDc5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgwLFxuICAgICAgICAzNixcbiAgICAgICAgMTU2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpN21CWDE2NzVUS1FDdmt5UytlNGg4K0d6ellEcGhBckNTcUJaYXdaRC8wPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIwMTA3MDY1OTgzMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTgwMEQyQkM5MzY2QTFEM0U5RDNDRDE4QkJDNjBBNzFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMjQ4MDQzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjAxMDcwNjU5ODMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFRUQxOTQ3MzI4NTc3MjA4RkRGMDdCRkIzNkU2NUQzN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyNDgwNDNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMDEwNzA2NTk4MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjIwRkRERDY5NkFGOTg1REY1MjcxQUExMzE3ODgyM0JDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjI0ODA0N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIwMTA3MDY1OTgzMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjBCNzcyNzc0NkMyMTM4OTQ1QkRDQTc2NTg0Qjc2RDlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMjQ4MDQ3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk4zNS1fQmtWUncyRDVHQ2dMMkdQTndcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2ZmMjRmN2MtMGEwZi00MTQyLWIxOTUtMjYwY2MzYWFkNzAxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMixcbiAgICAgIDEwNSxcbiAgICAgIDQ4LFxuICAgICAgMjQxLFxuICAgICAgMjksXG4gICAgICAyNSxcbiAgICAgIDk0LFxuICAgICAgMTAyLFxuICAgICAgMTY4LFxuICAgICAgMTYxLFxuICAgICAgMTgsXG4gICAgICAxNTAsXG4gICAgICA2MCxcbiAgICAgIDIxMCxcbiAgICAgIDE0OSxcbiAgICAgIDEyNyxcbiAgICAgIDIyMSxcbiAgICAgIDI0OCxcbiAgICAgIDE1OSxcbiAgICAgIDEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgMTMzLFxuICAgICAgMjEsXG4gICAgICAyMzUsXG4gICAgICAxNyxcbiAgICAgIDEwOCxcbiAgICAgIDQ1LFxuICAgICAgNDQsXG4gICAgICAxOTQsXG4gICAgICAxMyxcbiAgICAgIDE2MCxcbiAgICAgIDI1MCxcbiAgICAgIDEwLFxuICAgICAgMTM4LFxuICAgICAgMTg1LFxuICAgICAgMTkyLFxuICAgICAgMTQ0LFxuICAgICAgMjI2LFxuICAgICAgMTQyLFxuICAgICAgMTkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNIMVY4TUFZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMDEwNzA2NTk4MzA6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzMDcyMTg2ODI3NTk2MDoxNEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJGZWxvblwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lhQng0Y0dFT2ZXbmJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUlZZQ2M0bjhCdnFOQ1ZuOG1aNnZ2Y0xKdnQybXFtbE80S3UzdlF6aDlROD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOb3M2Q3NRSFM2dnpXd2hqRUVtTlVoSWVkeEpqMHhjRm45YStnWkorZ0txZCtGa2UzMHpyUWZnYVZ4ZHdLTWxKajkwT2IrZnMyWk1maTdCL2dvc0xEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0ZDlTSk1iZjNoLzVNV2Z1TXd3MXVkREF6SEU4STQyU3dXMEwzWDlLZThSUCtnbkFBS1VRNnZDYjJBMUR0STNuOERIcm8xczhJZXFHVDlzM3RsQXBEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMDEwNzA2NTk4MzA6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyNDgwNDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJTk5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlOTi5qc29uIjogIntcImtleURhdGFcIjpcIlJ6U28xekNKNUkvVWF3czM2SHhOT2lhVjc5aFdPcGVRR2pob1EzR3NGRFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYyNjQ1NjE5OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMjQ4MDQzNzI1XCJ9Igp9"  // PUT your SESSION_ID 


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
