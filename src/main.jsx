import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RoutePublic from './routes/public.route.jsx';
import './styles/index.css';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<div className='container'>
				<RoutePublic />
			</div>
		</BrowserRouter>
	</React.StrictMode>
);
