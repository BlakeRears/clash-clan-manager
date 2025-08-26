
function Menu({ onClose, isOpen }) {
    return (
        <>
            <div className={`fixed top-0 right-0 w-3/7 h-full  bg-[#ffffff] shadow-lg text-black py-20 z-20 transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            >
                <ul className="mx-2">
                    <li className="border-b-2 pt-2"><a href='#home' onClick={onClose}>Home</a></li>
                    <li className="border-b-2 pt-2"><a href='#search' onClick={onClose}>Search</a></li>
                </ul>
            </div>
        </>
    );
}
export default Menu;