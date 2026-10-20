const Toggle = ({ toggle, setToggle, selectedPlayers }) => {
    return (

        <div className='px-2 sm:px-8 max-w-300 mx-auto mt-12 mb-6 flex justify-between items-center gap-2'>

            <h1 className='font-bold text-[clamp(1rem,4vw,2rem)] whitespace-nowrap'>
                {toggle ? "Available Players" : `Selected (${Object.keys(selectedPlayers).length}/6)`}
            </h1>

            <div className='flex items-center shrink-0'>
                {/* Available Button */}
                <button onClick={() => setToggle(true)} className={`${toggle && "bg-[#D6F400]"} border-slate-600/60 border-[.05rem] border-r-0 rounded-l-xl px-3 sm:px-8 py-2`}>
                    <span className='font-semibold text-xs sm:text-base whitespace-nowrap'>Available</span>
                </button>

                {/* Selected Button */}
                <button onClick={() => setToggle(false)} className={`${!toggle && "bg-[#D6F400]"} border-slate-600/60 border-[.05rem] border-l-0 rounded-r-xl px-3 sm:px-6 py-2`}>
                    <span className='font-semibold text-xs sm:text-base whitespace-nowrap'>
                        Selected ({Object.keys(selectedPlayers).length})
                    </span>
                </button>
            </div>
        </div>
        
    )
}

export default Toggle