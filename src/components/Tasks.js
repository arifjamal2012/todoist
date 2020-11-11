import React, { useState, useEffect } from 'react';
import { Checkbox } from './Checkbox';
import { useTasks } from '../hooks';
import { collectedTasks } from '../constants';
import { getTitle, getCollectedTitle, colletedTasksExist } from '../helpers';
import { useSelectedProjectValue, useProjectsValue } from '../context';

export const Tasks = () => {
	const { selectedProject } = useSelectedProjectValue();
	const { projects } = useProjectsValue();
	const { tasks } = useTasks(selectedProject);

	let projectName = '';

	if (projects && selectedProject && !colletedTasksExist(selectedProject)) {
		projectName = getTitle(projects, selectedProject).name;
		console.log('projectName 1', projectName);
	}
	if (colletedTasksExist(selectedProject) && selectedProject) {
		projectName = getCollectedTitle(collectedTasks, selectedProject).name;
		console.log('projectName 2', projectName);
	}

	useEffect(() => {
		document.title = `${projectName}:Todoist`;
	});

	console.log('tasks', tasks);

	return (
		<div className='tasks' data-testid='tasks'>
			<h2 data-testid='project-name'>{projectName}</h2>
			<ul className='task__list'>
				{tasks.map((task) => (
					<li key={`${task.id}`}>
						<Checkbox id={task.id} />
						<span>{task.task}</span>
					</li>
				))}
			</ul>
		</div>
	);
};
