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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_46_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDgwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNSxcbiAgICAgICAgODIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMixcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA5MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI3LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDUzLFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgMjE0LFxuICAgICAgICA2MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDg2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDExLFxuICAgICAgICA5NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDY4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDAsXG4gICAgICAgIDExLFxuICAgICAgICAwLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4LFxuICAgICAgICAyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQyLFxuICAgICAgICA2NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDg0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkWVc3aHZUQzZsSTdUazRFWVR4c1Q3UGk3NzVjeC9FTVF0MXFGYTVpeGdFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIwMTA3MDY1OTgzMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTUzRUI4RjVDOUZCNEM0OEY5QjU5QkVCNTQyMzQ2OTZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyODc5OTU5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjAxMDcwNjU5ODMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4NEI1RjVCRDkxRjlGRDk5NEMyQjk2NDU1QzEwRTMxM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI4Nzk5NjJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRWpWaUFzVXNSdDZoXzFUcmhKYkc0d1wiLFxuICBcInBob25lSWRcIjogXCJiZmI4MzNlNC1jZTY0LTQ2YjEtOWVlZi04MWI0YjE1NjBjZTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgNzQsXG4gICAgICAxNzAsXG4gICAgICAxNTcsXG4gICAgICA4NSxcbiAgICAgIDE3MixcbiAgICAgIDkyLFxuICAgICAgMjQxLFxuICAgICAgOSxcbiAgICAgIDEwMyxcbiAgICAgIDI0MSxcbiAgICAgIDIwNCxcbiAgICAgIDgsXG4gICAgICAxMDgsXG4gICAgICAxMTYsXG4gICAgICA5NixcbiAgICAgIDE5NyxcbiAgICAgIDEyLFxuICAgICAgMjEyLFxuICAgICAgMTIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzEsXG4gICAgICA5MixcbiAgICAgIDE0MSxcbiAgICAgIDE2NCxcbiAgICAgIDExMixcbiAgICAgIDE3MSxcbiAgICAgIDU3LFxuICAgICAgNzIsXG4gICAgICAxMDMsXG4gICAgICAyNyxcbiAgICAgIDI0NyxcbiAgICAgIDE2NyxcbiAgICAgIDIzMSxcbiAgICAgIDY1LFxuICAgICAgNjYsXG4gICAgICA4NCxcbiAgICAgIDEwMyxcbiAgICAgIDE0LFxuICAgICAgMzMsXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l5KzVkRUJFTktmeExVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieFhWYUZmVXlvM3l4clBBM1JWMDdVdWdwWlhQTGJDbmhIT1hOUTVsSXF5bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHSUowWCtZNHovaExvYUJzM0VrU21zOStIQ2ZOalFFODBMYm1WLzBPd2s3d3hVSXZLbjhrSWh4UlZIdGhjYUtsWis1SVkwNElkVlZJeUt3N2VOeGJDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiTHlxSVZON2FPOGN0dlVmSFpvaUY4OUg3N3ZlNDZzcnVQeEUreUNmSU5TRUVlT2hQME9qK1dQZEhCWDBDaE5LVkp6MmNQTnBaMEh0OVZFWnJ6aEhBQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIwMTA3MDY1OTgzMDoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjMwNzIxODY4Mjc1OTYwOjE5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkppYVRhblwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjAxMDcwNjU5ODMwOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjg3OTk1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9YZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1hhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaytLMXlwWjdyeEpuaTFKNjZjMVZySDZIZkNWZUZrZHd6NlRkdWZkOVpZYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0Mzk5Njc0OTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9YYi5qc29uIjogIntcImtleURhdGFcIjpcImo0N2cvVXp3NWVWRmVJSUhPTTlpYkZXMnIydnRrODg2elg2YTMrU3RmQkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDM5OTY3NDk4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIyODc4NDAzNTkwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1hjLmpzb24iOiAie1wia2V5RGF0YVwiOlwibUJjRTNpeDZnUjdSY1JXYUlMV2lySkYwdDkxQkx5Nk5uVGdRQjdvdjA3QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0Mzk5Njc0OTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9YZC5qc29uIjogIntcImtleURhdGFcIjpcIlNoYzBGWFVYdkxDSUJDcStZNnFKK0hUOUNpNzFUeUE5enlkcnRpb1lKSjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDM5OTY3NDk5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIyODc5Njc5Mjc4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1hlLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMVoveEpHeXNWZGdwajRJbE9HRHZGN0Y1bm52MkZTbGFGVXRad0lOLzJjZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0Mzk5Njc1MDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjg3OTY5NDQzMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Jia bot",
  ownername:process.env.OWNER_NAME|| "JiaTan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
