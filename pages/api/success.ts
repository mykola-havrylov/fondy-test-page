import { NextApiRequest, NextApiResponse } from 'next';
const CloudIpsp = require('cloudipsp-node-js-sdk');

const fondy = new CloudIpsp({
	merchantId: 1396424,
	secretKey: 'test',
});

const now = new Date();
const NotNow = new Date();
NotNow.setHours(NotNow.getHours() - 1);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const orderId = req.body;
	console.log(orderId);

	const requestData = {
		date_from: NotNow,
		date_to: now,
	};

	fondy
		.Reports(requestData)
		.then((data: any) => {
			// console.log(data);
			res.status(200).json(data);
		})
		.catch((error: any) => {
			res.status(500).json({ error: error.message });
		});
}
