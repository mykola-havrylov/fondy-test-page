import { v4 as uuidv4 } from 'uuid';

function CheckoutButton() {
	// const handleSubmit = async () => {
	// 	const hostUrl = `${window.location}success`.toString();
	// 	console.log('hostUrl', hostUrl);

	// 	const requestData = {
	// 		order_id: uuidv4(),
	// 		order_desc: 'test order',
	// 		currency: 'USD',
	// 		amount: '1000',
	// 		response_url: hostUrl,
	// 		server_callback_url: '',
	// 	};
	// 	// await fetch('/api/test', {
	// 	// 	method: 'POST',
	// 	// 	headers: {
	// 	// 		'Content-Type': 'application/json',
	// 	// 	},
	// 	// 	body: JSON.stringify(requestData),
	// 	// })
	// 	// 	.then(response => response.json())
	// 	// 	.then(data => {
	// 	// 		console.log('data', data.checkout_url);
	// 	// 		window.location.href = data.checkout_url;
	// 	// 	})
	// 	// 	.catch(error => console.error(error));

	// 	const response = await fetch('/api/checkout', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(requestData),
	// 	});

	// 	try {
	// 		const data = await response.json();
	// 		console.log('data', data.data);
	// 		window.location.href = data.data.checkout_url;
	// 	} catch (error) {
	// 		console.error('Error parsing JSON:', error);
	// 	}
	// };

	const handleSubmit = async () => {
		const hostUrl = `${window.location}success`.toString();
		console.log('hostUrl', hostUrl);

		const requestData = {
			order_id: uuidv4(),
			order_desc: 'test order',
			currency: 'USD',
			amount: '1000',
			response_url: hostUrl,
			server_callback_url: '',
		};
		await fetch('/api/test-api', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(requestData),
		})
			.then(response => response.json())
			.then(data => {
				console.log('data', data.checkout_url);
				window.location.href = data.checkout_url;
			})
			.catch(error => console.error(error));
	};

	return (
		<button
			type='button'
			onClick={handleSubmit}
			className='flex-none flex items-center justify-center h-9 pl-4 pr-4 rounded-md text-slate-300 border border-slate-200'
		>
			Checkout
		</button>
	);
}

export default CheckoutButton;
