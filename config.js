const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function toBool(val, defaultOn = true) {
    if (val === undefined || val === null || val === '') return defaultOn;
    return val.toLowerCase() !== 'false';
}

module.exports = {
    SESSION_ID:            process.env.SESSION_ID || "Panda~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUhpNzB4elRWbFlBdWcreDNUV2t4citXZ1FjWjkwdUh1dGlVN0cvOVAwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmtqY2JPYzAxYUhHTlRlRVJzaFBlcE9nSkUzZUxFSnZ6OXpFOEIwdDZBZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TEtxc3NCdUZqWmVQb1dTRmNuaEZ4aXNpaDV2eEpmbWtGRVdwWHZrLzBvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKQmM4TVNaYzYyMnlUWnFwaHFram0zeWNJZllTTjZHc1RXUkRzUGJrcEJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBDbWw2bFllQnZVNW0vVlZPN0VhOXc4bkU4ekR6NXVZTktpYUxmTUhGbHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJyWlJrTEM4RUpDRUNDOElOdXRZU2VWZkU0V0RpdnNQUzNWelNpOVpLeEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUh1NnFhdGxOMGwvdHI1d1FKTjFRaTZPOUx4eWJyOUtwT1JneFJGT3NWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHBSY3VQSFBLZFVxbDRLV3pWQW5tNGt5OGJQNHVVaGxnUmFUYTBtbDFpbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZVT3J1VWRGNTRLOGVJcmljaXBLV0hZdkxMZFZlbm1JNGdNQng3SjZUWldZT1VzY3dMUEhnT1ZtdzNLRVdGWWliWDVKT1MzM1U5U1RoTjlkSFdYY0RBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzQsImFkdlNlY3JldEtleSI6IkFUTVJWbVhXV3YrRndOemFiTEZjRXI1QWRHVHFNWGFxVDdaQkVoVkZjTzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjAyMjAwNTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNDREUzOTAzMjNFMkFCN0M5NzU5Q0IzRTJFQTVBNDEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NjQ0MzYxNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjAyMjAwNTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMyRTYzMzFBQzA2NEMwREE0OTcxOTY2QjFGQjRGQjgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NjQ0MzYxNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjAyMjAwNTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNDNDA3RjUxMzkzOEVCOTMwOTY4QzY0OTE0Qjk1QjIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NjQ0MzYxNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjAyMjAwNTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM3RTUwNDRFNUUxMTdDNTY0QUQzRDVENTNGNDE1NDgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NjQ0MzYxNn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjAyMjAwNTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNCODM2QTlDNkVDREFBQzQ2RkYwQ0ZFNzA0RjMyOTkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NjQ0MzYxN31dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjozLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2bjRyMVRLbVRGMjNIR1ppc2Zzcll3IiwicGhvbmVJZCI6ImQyMzgxMDc4LWUyMjctNGE1MS1iNWIyLTIwYWFjYzE5YzQxZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtb01BSmFNNjErbFRoT2E3WDZvc0RSbk1FNms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLzBIek1OYnlSMjBNM1lpSmhMbnA2TllwNmZzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQxSzE2OUpMIiwibWUiOnsiaWQiOiI5NDc2MDIyMDA1MjozQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNDEyODgyMDg0OTg4OTg6M0BsaWQiLCJuYW1lIjoiQm90IFRlc3QifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xEWm9jd0dFTW5CaWM4R0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImgvNVordGtiUnYzWFpqc3RacnNLeGR3ZUdjb2NJUDRlOGZ4cnVxNUEvZ1E9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ild0dldMU2hTTEdQMjlwQTVBY0ZZQkxqejdHMm9IQzRoeFVGWFV2bC9zL2VqaDZyMVhYc3VoWDlzd0wyVnZJMldidlhFS3JnZ1ZXWkwyMHBEV1p6QUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2cmZTWExGNytpckNWTWJJS0RsUGtWeDJMZldQVHFoVjQyWU9sVFh4UFlvSERNVlQ0OTc5MFdrblExVWFrcHY3WUR1djNCQ2J2VG9yMjR1VDlMNnJCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYwMjIwMDUyOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWYrV2ZyWkcwYjkxMlk3TFdhN0NzWGNIaG5LSENEK0h2SDhhN3F1UVA0RSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnZ04ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzc2NDQzNjE0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFkNyJ9",
    PREFIX:                process.env.PREFIX || ".",
    BOT_NAME:              process.env.BOT_NAME || "CYBER-PANDA-MD-V.10",
    OWNER_NUMBER:          process.env.OWNER_NUMBER || "+94702782946",
    OWNER_NAME:            process.env.OWNER_NAME || "CYBER-PANDA-MD-V.10",
    DESCRIPTION:           process.env.DESCRIPTION || "CYBER-PANDA-MD-V.10",
    ALIVE_IMG:             process.env.ALIVE_IMG || "https://files.catbox.moe/5uli5p.jpeg",
    LIVE_MSG:              process.env.LIVE_MSG || "Cyber Panda MD Is Active",
    MODE:                  process.env.MODE || "both",
    AUTO_STATUS_SEEN:      toBool(process.env.AUTO_STATUS_SEEN,      true),
    AUTO_STATUS_REACT:     toBool(process.env.AUTO_STATUS_REACT,     true),
    AUTO_STATUS_REPLY:     toBool(process.env.AUTO_STATUS_REPLY,     false),
    AUTO_STATUS_MSG:       process.env.AUTO_STATUS_MSG || "Seen by Panda Md",
    CUSTOM_REACT_EMOJIS:   process.env.CUSTOM_REACT_EMOJIS || "❤️,🔥,💯,😍,👏,💙,🙌",
    READ_MESSAGE:          toBool(process.env.READ_MESSAGE,          false),
    AUTO_REACT_NEWSLETTER:   toBool(process.env.AUTO_REACT_NEWSLETTER,   true),
    AUTO_FOLLOW_NEWSLETTER:  true,
    ANTI_BAD:              toBool(process.env.ANTI_BAD,              false),
    ALWAYS_ONLINE:         toBool(process.env.ALWAYS_ONLINE,         true),
    AUTO_TYPING:           toBool(process.env.AUTO_TYPING,           true),
    AUTO_RECORDING:        toBool(process.env.AUTO_RECORDING,        false),
    DELETE_LINKS:          toBool(process.env.DELETE_LINKS,          false),
    ANTIDELETE_GROUP:      toBool(process.env.ANTIDELETE_GROUP,      true),
    ANTIDELETE_PRIVATE:    toBool(process.env.ANTIDELETE_PRIVATE,    true),
    ANTILINK:              toBool(process.env.ANTILINK,               false),
    ANTIVV:                toBool(process.env.ANTIVV,                 true),
    DEBUG:                 toBool(process.env.DEBUG,                 false),
};
