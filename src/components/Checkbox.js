import React from 'react';
import { firebase } from '../firebase';
//import { Tasks } from './Tasks';

export const Checkbox = ({ id }) => {
	const archiveTask = () => {
		firebase.firestore().collection('task').doc(id).update({
			archived: true,
		});
	};
	return (
		<div
			className='checkbox-holder'
			data-testid='checkbox-id'
			onClick={() => archiveTask()}>
			<span className='checkbox' />
		</div>
	);
};
