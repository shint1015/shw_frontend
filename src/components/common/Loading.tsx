const LoadingScreen = () => {
    return (
        <div className='loading'>
            <div className='progressBarContainer'>
                <h2 className={"text-center m-auto text-base-1000"}>Now Loading...</h2>
                <div className="flex justify-center" aria-label="読み込み中">
                    <div className="animate-ping h-2 w-2 bg-base-1000 rounded-full"></div>
                    <div className="animate-ping h-2 w-2 bg-base-1000 rounded-full mx-4"></div>
                    <div className="animate-ping h-2 w-2 bg-base-1000 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen;