const path = require("path")
const schedule = require('node-schedule');
const env = require('dotenv');
env.config({ path: path.resolve(process.cwd(), ".env") })

const { Client, Intents, TextChannel } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  schedule.scheduleJob('0 11-15 * * 0-5', function(fireDate){
    global()
    console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
  });
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

//   if (interaction.commandName === 'ping') {
//     await interaction.reply('Pong!');

//   }


});

async function global(){
   const g =  await client.guilds.fetch(process.env['DISCORD_GID'])
   const ch = await g.channels.fetch(process.env['DISCORD_GID'])
    if(ch instanceof TextChannel){
        ch.send(":bell: C'est l'heure de faire les signatures @here !")
    }
}



client.login(process.env['DISOCRD_TOKEN']);