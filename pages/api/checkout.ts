import { NextApiRequest, NextApiResponse } from 'next';
const CloudIpsp = require('cloudipsp-node-js-sdk');

const fondy = new CloudIpsp({
	merchantId: 1396424,
	secretKey: 'test',
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const requestData = {
		order_id: req.body.order_id,
		order_desc: req.body.order_desc,
		currency: req.body.currency,
		amount: req.body.amount,
		response_url: req.body.response_url,
		server_callback_url: req.body.server_callback_url,
	};
	fondy
		.Checkout(requestData)
		.then((data: any) => {
			// console.log(data);
			res.status(200).json(data);
		})
		.catch((error: any) => {
			res.status(500).json({ error: error.message });
		});
}
