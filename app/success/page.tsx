'use client';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Success() {
	const effectRan = useRef(false);
	const updateArray = useRef(false);
	const [orderArray, setOrderArray] = useState({});

	const searchParams = useSearchParams();
	const search = searchParams?.get('search');

	console.log('search', search);

	useEffect(() => {
		if (effectRan.current === false) {
			if (localStorage.getItem('orderData')) {
				const orderData = JSON.parse(localStorage.getItem('orderData')!);

				// const orderID = orderData.order_id;

				console.log('localStorage orderData', orderData);

				const handleSubmit = async () => {
					try {
						const response = await fetch('/api/callback', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(orderData),
						});
						const data = await response.json();
						// console.log('data', data, typeof data);
						setOrderArray(data);
					} catch (error) {
						console.error(error);
					}
				};

				handleSubmit();
			}

			return () => {
				effectRan.current = true;
			};
		}
	}, []);

	useEffect(() => {
		if (updateArray.current === false && Object.keys(orderArray).length > 0) {
			console.log('orderArray', orderArray);
			localStorage.removeItem('orderData');
		}

		return () => {
			if (Object.keys(orderArray).length > 0) {
				updateArray.current = true;
			}
		};
	}, [orderArray]);

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1 className='text-4xl font-bold text-center'>Success!</h1>
		</main>
	);
}
