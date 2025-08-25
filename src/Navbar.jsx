import HamburgerImg from './assets/Hamburger_icon.svg.png';

function Navbar() {

    return (
        <>
            <nav className='flex justify-between items-center pt-4 px-8 bg-transparent'>
                <h1 className='text-white font-bold text-2xl'>
                    <a href="#home">
                        Clan Manager
                    </a>
                </h1>

                <ul>
                    <li>
                        <a>
                            <img 
                                className='w-10 h-10'
                                alt='Menu'
                                src={HamburgerImg}
                            />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;