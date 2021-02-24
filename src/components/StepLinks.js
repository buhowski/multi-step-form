import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSignupForm } from './SignupFormContext';

function isEmpty(obj) {
	return Object.keys(obj).length === 0;
}

export default function StepLinks() {
	const { profile, social } = useSignupForm();
	const isProfileDone = !isEmpty(profile);
	const isSocialDone = !isEmpty(social);

	return (
		<div className="step-links">
			<NavLink to="/" exact>
				{isProfileDone ? '💖' : '🤍'} Profile
			</NavLink>
			{isProfileDone ? (
				<NavLink to="/social">{isSocialDone ? '💖' : '🤍'} Social</NavLink>
			) : (
				<a>Social</a>
			)}
			{isProfileDone && isSocialDone ? (
				<NavLink to="/review">Review</NavLink>
			) : (
				<a>Review</a>
			)}
		</div>
	);
}
