import { Layout, Topbar, Stay } from './components';

function App() {
	return (
		<Layout>
			<Topbar />

			<div className='main-content'>
				<Stay />
			</div>
		</Layout>
	);
}

export default App;
