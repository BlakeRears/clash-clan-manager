import HamburgerImg from './assets/Hamburger_icon.svg.png';

function Navbar({menuToggle}) {

    return (
        <>
            <nav className='fixed top-0 w-full flex justify-between items-center pt-4 px-8 bg-transparent z-50'>
                <h1 className='text-white font-bold text-2xl'>
                    <a href="#home">
                        Clan Manager
                    </a>
                </h1>

                <ul>
                    <li>
                        <a>
                            <img 
                                className='w-10 h-10 hover:cursor-pointer'
                                alt='Menu'
                                src={HamburgerImg}
                                onClick={menuToggle}
                            />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;