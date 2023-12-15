import React from 'react';
import './App.scss';
import Grid from './components/Grid';
import Panel from './components/Panel';
import GlobalStore from './utils/store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
	return (
		<Provider store={GlobalStore}>
			<div className='w-full h-full flex justify-center items-center bg-blue-50 flex-col gap-2'>
				<Panel />
				<Grid />
			</div>
		</Provider>
	);
};

export default App;
