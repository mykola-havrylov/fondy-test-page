'use client';
import { useEffect, useState } from 'react';

const orderID = 'a997fa1dda384718a399004db12ce08a';

const handleSubmit = async () => {
	try {
		const response = await fetch('/api/success', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(orderID),
		});
		const data = await response.json();
		console.log('data', data);
	} catch (error) {
		console.error(error);
	}
};

export default function Success() {
	const [hasLoaded, setHasLoaded] = useState(false);

	useEffect(() => {
		if (!hasLoaded) {
			handleSubmit();
			setHasLoaded(true);
		}
	}, []);

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1 className='text-4xl font-bold text-center'>Success!</h1>
		</main>
	);
}
