
function Menu() {
    return (
        <>
            <div className='fixed top-0 right-0 w-1/3  bg-[#091e31] shadow-lg text-white py-20 z-20'>
                <div className='mx-2'>
                    <h1 className='text-white font-semibold mb-5'>Menu</h1>
                    <ul>
                        <li className="border-b-2 pt-2"><a href='#home'>Home</a></li>
                        <li className="border-b-2 pt-2"><a href='#search'>Search</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Menu;