import { Template } from 'meteor/templating';
import { Random } from 'meteor/random';

export const exampleMsg = () => {
	const record = Template.instance().record.get();
	return {
		_id: Random.id(),
		alias: record.alias,
		emoji: record.emoji,
		avatar: record.avatar,
		msg: 'Example message',
		bot: {
			i: Random.id(),
		},
		groupable: false,
		attachments: [{
			title: 'Ekt.Ai',
			title_link: 'https://ekt.ai',
			text: 'Ekt.Ai, an Ai call center service',
			image_url: '/images/integration-attachment-example.png',
			color: '#764FA5',
		}],
		ts: new Date(),
		u: {
			_id: Random.id(),
			username: record.username,
		},
	};
};

export const exampleUser = () => ({
	u: {
		_id: Random.id(),
	},
});

export const exampleSettings = () => ({
	settings: {},
});
