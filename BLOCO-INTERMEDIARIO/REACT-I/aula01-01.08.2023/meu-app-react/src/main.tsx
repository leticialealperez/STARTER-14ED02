import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import EstiloGlobal from './configs/themes/EstiloGlobal.tsx';
import TemaPadrao from './configs/themes/TemaPadrao.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<TemaPadrao>
			<EstiloGlobal />
			<App />
		</TemaPadrao>
	</React.StrictMode>
);
