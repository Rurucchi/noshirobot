require("dotenv").config();
const {
  Intents,
  Client,
  Interaction,
  GatewayIntentBits,
  guild,
} = require("discord.js");

// import commands
const { help } = require("./commands/commands.js");

// Client startup

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  let commands;
  if (guild) {
    commands = guild.commands;
  } else {
    commands = client.application?.commands;
  }

  commands?.create(help.preview);
});

client.on("guildcreate", (gData) => {
  guildID = gData.id;
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }

  const { commandName, options } = interaction;

  if (commandName === "help") {
    help.action(interaction);
  }
});

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN);
