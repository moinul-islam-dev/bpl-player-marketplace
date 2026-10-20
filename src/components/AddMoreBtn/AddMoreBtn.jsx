export default function AddMoreBtn({ setToggle }) {
  return (
    <div className="my-10 md:my-15 flex justify-start">
      <button 
        onClick={() => { setToggle(true) }} 
        className="group relative inline-flex items-center justify-center p-0.5 md:p-1 overflow-hidden font-bold rounded-xl md:rounded-2xl border-2 border-[#E1FF00]"
      >
        
        <span className="relative px-4 md:px-8 py-2 md:py-3 transition-all ease-out bg-linear-to-b from-[#E1FF00] to-[#ADCC00] rounded-lg md:rounded-xl text-black text-sm md:text-xl font-extrabold hover:brightness-110 active:scale-95 shadow-inner whitespace-nowrap">
          Add More Player
        </span>
      </button>
    </div>
  )
}