// import './config/register';

import { Events } from 'discord.js';

import { client } from './config/login';

import interactions from './events/interactions';

import commands from './commands';

export default async () => {
  for (const command of commands) {
    client.commands.set(command.data.name, command);
  }

  client.on(Events.InteractionCreate, async (interaction) => {
    await interactions(interaction);
  });

  // sendDiscord('Bot iniciado', 'Bot', new Date());
};
