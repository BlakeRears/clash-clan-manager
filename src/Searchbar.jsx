
function Searchbar() {
    return(
        <>
            <div id='search' className='flex justify-center items-center'>
                <input
                    className="bg-gray-150 border-2 border-gray-300 rounded-lg p-2 w-1/2 shadow-lg focus:outline-none"
                    type="text"
                    placeholder="Enter Clan Name..."
                >

                </input>
            </div>
        </>
    );
}

export default Searchbar;