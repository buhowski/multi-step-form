import React from 'react';
import { useSignupForm } from '../SignupFormContext';

export default function Review() {
	const { profile, social } = useSignupForm();

	function handleSubmit(e) {
		e.preventDefault();
		alert('you are submitting! congrats :)');
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Review all your info</h2>

			<p>
				<strong>Name</strong>:{profile.name}{' '}
			</p>
			<p>
				<strong>Email</strong>:{profile.email}{' '}
			</p>
			<p>
				<strong>Instagram</strong>:{social.instagram}{' '}
			</p>
			<p>
				<strong>Telegram</strong>:{social.telegram}{' '}
			</p>
			<input type="submit" value="Submit All Info" />
		</form>
	);
}
