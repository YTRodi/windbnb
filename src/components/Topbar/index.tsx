import Logo from '../Logo';
import SearchBar from '../Searchbar';

function Topbar() {
	return (
		<header>
			<nav className='mt-5 mb-9'>
				<Logo />

				<div className='mt-10 flex justify-center'>
					<SearchBar />
				</div>
			</nav>
		</header>
	);
}

export default Topbar;
