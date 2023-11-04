import { SlashCommandBuilder, CommandInteraction, CacheType } from 'discord.js';

const ping = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Responde pong!'),

  async execute(interaction: CommandInteraction<CacheType>) {
    await interaction.reply({ content: 'Pong!' });
  },
};

export default ping;
