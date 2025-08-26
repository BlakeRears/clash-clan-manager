
function Welcome() {
    return (
        <>
            <div id='home' className='m-5 mt-50 mb-0'>
                <h1
                    className="text-[#333333] font-semibold text-4xl mb-2"
                >
                    Welcome to <br />
                </h1>
                <span className="text-black font-bold text-5xl">
                    Clash Royale <br />
                    <span className='typewriter'>Clan Manager</span>
                </span>
            </div>
            <hr className='w-full h-[3px] bg-gradient-to-r from-transparent via-gray-900 to-transparent border-0 mx-auto shadow-lg' />
        </>
    );
}

export default Welcome;