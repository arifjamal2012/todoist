import React, { useState, useEffect } from 'react';
import { Checkbox } from './Checkbox';
import { useTasks } from '../hooks';
import { collectedTasks } from '../constants';
import { getTitle, getCollectedTitle, colletedTasksExist } from '../helpers';
import { useSelectedProjectValue, useProjectsValue } from '../context';
import { AddTask } from './AddTask';

export const Tasks = () => {
	const { selectedProject } = useSelectedProjectValue();
	const { projects } = useProjectsValue();
	const { tasks } = useTasks(selectedProject);

	let projectName = '';

	if (
		projects.length > 0 &&
		selectedProject &&
		!colletedTasksExist(selectedProject)
	) {
		projectName = getTitle(projects, selectedProject).name;
	}

	if (colletedTasksExist(selectedProject) && selectedProject) {
		projectName = getCollectedTitle(collectedTasks, selectedProject).name;
	}

	useEffect(() => {
		document.title = `${projectName}:Todoist`;
	});

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
			<AddTask />
		</div>
	);
};
