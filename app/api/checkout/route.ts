import { NextApiRequest } from 'next';

export async function GET(req: NextApiRequest) {
	const callbackUrl = `http://localhost:3000/api/checkout`;

	try {
		const res = await fetch(callbackUrl, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();

		return Response.json({ data });
	} catch (error) {
		console.error(error);
		return Response.json({ error: 'Failed to fetch data' });
	}
}
