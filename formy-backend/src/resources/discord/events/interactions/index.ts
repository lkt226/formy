import { CacheType, Interaction } from 'discord.js';
import { InternClient } from '../../config/login';

export default async (interaction: Interaction<CacheType>) => {
  const client = interaction.client as InternClient;

  if (!interaction.isChatInputCommand()) {
    return;
  }

  const command = client.commands.get(interaction.commandName);

  if (!command) {
    console.log(`Comando ${interaction.commandName} não encontrado.`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
  }
};
