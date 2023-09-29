const CloudIpsp = require('cloudipsp-node-js-sdk');

const fondy = new CloudIpsp({
	merchantId: 1396424,
	secretKey: 'test',
});

// const requestData = {
// 	order_id: 'yryryyr65758940404',
// 	order_desc: 'test order',
// 	currency: 'USD',
// 	amount: '1000',
// 	response_url: '',
// 	server_callback_url: '',
// };

export async function POST(req: Request) {
	const requestData = await req.json();

	const data = await fondy.Checkout(requestData);

	return Response.json({ data });
}
