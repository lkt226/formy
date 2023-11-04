import fs from 'node:fs';
import { resolve } from 'node:path';

import { REST, Routes } from 'discord.js';

import commands from '../commands';
import { TOKEN, CLIENT_ID, GUILD_ID } from './env';

const registerFile = resolve(
  __dirname,
  '..',
  'data',
  'registered-commands.json',
);

try {
  const registeredCommands = fs.readFileSync(registerFile, 'utf-8');
  const commandsNames = JSON.stringify(
    commands.map((command) => command.data.name),
    null,
    2,
  );

  if (registeredCommands === commandsNames) {
    console.log('Todos os comandos já estão registrados.');
  } else {
    console.log('Comandos desatualizados.');
    throw new Error('Comandos desatualizados.');
  }
} catch (error) {
  const rest = new REST({ version: '10' }).setToken(TOKEN);

  (async () => {
    try {
      console.log('Iniciando reset dos comandos da aplicação (/).');

      await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
        body: commands.map((command) => command.data.toJSON()),
      });

      console.log('Comandos registrados com sucesso!');

      fs.writeFileSync(
        registerFile,
        JSON.stringify(
          commands.map((command) => command.data.name),
          null,
          2,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  })();
}
