const { Client , Intents , Collection}  = require('discord.js')
const client = new Client({intents:32767})

client.once('ready',()=>{
    console.log("봇이 준비되었습니다")
})

client.on('messageCreate' , message=>{
    if(message.content == "Ping"){
        message.reply("Pong")
    }
})

client.login("OTQ5MjU4MDgwNjkxMDQwMjY2.GQVxFm.-wKD_YH_aU3Mh7d6ZcCbuzbZthK4KPF9zrB12k")
