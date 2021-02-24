import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useSignupForm } from '../SignupFormContext';

export default function SocialForm() {
	const { register, handleSubmit, errors } = useForm();
	const history = useHistory();
	const { social, setSocial } = useSignupForm();

	function onSubmit(data) {
		setSocial(data);
		history.push('/review');
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<h2>How can we find you on social?</h2>

			<input
				type="text"
				name="instagram"
				placeholder="What's your instagram?"
				defaultValue={social.instagram}
				ref={register({ required: true })}
			/>
			<p>{errors.instagram && 'Instagram is required'}</p>

			<input
				type="text"
				name="telegram"
				placeholder="What's your telegram?"
				defaultValue={social.telegram}
				ref={register({ required: true })}
			/>
			<p>{errors.telegram && 'Telegram is required'}</p>

			<input type="submit" value="Next" />
		</form>
	);
}
