'use client';
import { useEffect, useRef } from 'react';

export default function Success() {
	const orderID = 'a997fa1dda384718a399004db12ce08a';
	const effectRan = useRef(false);

	useEffect(() => {
		if (effectRan.current === false) {
			const handleSubmit = async () => {
				try {
					const response = await fetch('/api/callback', {
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

			handleSubmit();

			return () => {
				effectRan.current = true;
			};
		}
	}, []);

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1 className='text-4xl font-bold text-center'>Success!</h1>
		</main>
	);
}
