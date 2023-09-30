import { NextApiRequest, NextApiResponse } from 'next';
const CloudIpsp = require('cloudipsp-node-js-sdk');

const fondy = new CloudIpsp({
	merchantId: 1396424,
	secretKey: 'test',
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const statusData = {
		order_id: req.body.order_id,
	};

	fondy
		.Status(statusData)
		.then((data: any) => {
			console.log(data);
			res.status(200).json(data);
		})
		.catch((error: any) => {
			res.status(500).json({ error: error.message });
		});
}
