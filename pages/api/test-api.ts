import CloudIpsp from 'cloudipsp-node-js-sdk';
import { NextApiRequest, NextApiResponse } from 'next';

const fondy = new CloudIpsp({
	merchantId: 1396424,
	secretKey: 'test',
});

const successPage = `https://5802-62-122-114-6.ngrok-free.app/success`;
const server_callback_url = `https://5802-62-122-114-6.ngrok-free.app/api/callback`;

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
