import { v4 as uuidv4 } from 'uuid';

function CheckoutButton() {

	const handleSubmit = async () => {
		const hostUrl = `${window.location}success`.toString();

		const requestData = {
			order_id: uuidv4(),
			order_desc: 'test order',
			currency: 'USD',
			amount: '1000',
			response_url: hostUrl,
			server_callback_url: '',
		};

		await fetch('/api/checkout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(requestData),
		})
			.then(response => response.json())
			.then(data => {
				console.log('data', data.checkout_url);

				if (localStorage.getItem('orderData')) {
					localStorage.setItem(
						'orderData',
						JSON.stringify({ order_id: requestData.order_id })
					);
				} else {
					localStorage.setItem(
						'orderData',
						JSON.stringify({ order_id: requestData.order_id })
					);
				}

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
