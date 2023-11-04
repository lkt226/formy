import { EmbedBuilder, WebhookClient } from 'discord.js';
import { WEBHOOK_URL } from '../../config/env';
import { Notification } from 'src/resources/notification/types/dto';

const webhookClient = new WebhookClient({ url: WEBHOOK_URL });

const embed = (data: Notification) =>
  // eslint-disable-next-line prettier/prettier
  new EmbedBuilder()
    .setTitle(data.title)
    .setColor(0xe67e22)
    .setDescription(data.message)
    .setFooter({ text: data.date.toLocaleString('pt-BR') });

export const sendDiscord = (data: Notification, type: string) => {
  webhookClient.send({
    username: `ForMY`,
    avatarURL: 'https://i.imgur.com/AfFp7pu.png',
    embeds: [embed(data)],
  });
};
