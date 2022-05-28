import { useState } from 'react';
import SearchMenu from '../SearchMenu';
import Logo from '../Logo';
import SearchBar from '../Searchbar';

function Topbar() {
	const [showSearchMenu, setShowSearchMenu] = useState(false);

	// TODO: maybe make absolute-the searchMenu (hacerlo flotante y con un zIndex), para que no se modifiquen los elementos que están abajo.

	return (
		<header>
			<nav className='mt-5 mb-9'>
				{showSearchMenu ? (
					<SearchMenu setShowSearchMenu={setShowSearchMenu} />
				) : (
					<>
						<Logo />
						<div className='mt-10 flex justify-center'>
							<SearchBar setShowSearchMenu={setShowSearchMenu} />
						</div>
					</>
				)}
			</nav>
		</header>
	);
}

export default Topbar;
