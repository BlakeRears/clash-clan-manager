
function Welcome() {
    return (
        <>
            <div id='home' className='m-5 mt-50 shadow-lg'>
                <h1
                    className="text-white font-semibold text-4xl mb-2"
                >
                    Welcome to <br />
                </h1>
                <span className="text-cyan-400 font-bold text-5xl">
                    Clash Royale Clan Manager
                </span>
            </div>
            <hr className='w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent border-0 mx-auto' />
        </>
    );
}

export default Welcome;