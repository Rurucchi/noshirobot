const help = {
  preview: {
    name: "help",
    description: "Displays all the available commands.",
  },
  action: (interaction) => {
    interaction.reply({
      content:
        "Here are the list of available commands : \n `/help` Displays this message",
      ephemeral: true,
    });
  },
};

module.exports = { help };
