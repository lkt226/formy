import { Client, Collection, Events, GatewayIntentBits } from 'discord.js';
import { TOKEN } from './env';
import { Command } from '../commands';

export type InternClient = Client & {
  commands: Collection<string, Command>;
};

export const client = new Client({
  intents: [GatewayIntentBits.Guilds],
}) as InternClient;
client.commands = new Collection();

client.once(Events.ClientReady, (ctx) => {
  console.log(`Conectado com sucesso como ${ctx.user.tag}!`);
});

client.login(TOKEN);
