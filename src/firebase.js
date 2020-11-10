import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
	apiKey: 'AIzaSyB-9xDQDHQzNHv3KPQGh0ZH7hie1tpov_E',
	authDomain: 'todoist-d6155.firebaseapp.com',
	databaseURL: 'https://todoist-d6155.firebaseio.com',
	projectId: 'todoist-d6155',
	storageBucket: 'todoist-d6155.appspot.com',
	messagingSenderId: '147179714776',
	appId: '1:147179714776:web:fada5f5478b99251e63fad',
	measurementId: 'G-VTC1NZTDB4',
});

export { firebaseConfig as firebase };
