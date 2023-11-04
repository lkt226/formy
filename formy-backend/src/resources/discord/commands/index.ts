import { CacheType, CommandInteraction, SlashCommandBuilder } from 'discord.js';

// import { app } from './app';
import ping from './app/ping';

export interface Command {
  data: SlashCommandBuilder;
  execute: (interaction: CommandInteraction<CacheType>) => Promise<void>;
}

const commands: Command[] = [ping];

export default commands;
