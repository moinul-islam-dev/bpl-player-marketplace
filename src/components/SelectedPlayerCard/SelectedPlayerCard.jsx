import { FaTrashAlt } from "react-icons/fa";

/**
 * Component to display a selected player in a card format with a removal option.
 * Optimized for responsiveness across mobile and desktop devices.
 */
const SelectedPlayerCard = ({ player, handleRemove }) => {
    const { player_name, player_image, batting_style } = player;

    return (
        <div className="flex justify-between items-center bg-white border border-slate-200 p-3 md:p-4 rounded-2xl mb-4 shadow-sm transition-all">
            <div className="flex items-center gap-3 md:gap-4">
                
                <img 
                    src={player_image} 
                    alt={player_name} 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-xl object-cover bg-slate-100 shrink-0"
                />
                
                
                <div className="min-w-0">
                    <h3 className="font-bold text-base md:text-xl text-slate-800 truncate">
                        {player_name}
                    </h3>
                    <p className="text-slate-500 font-medium text-xs md:text-sm">
                        {batting_style}
                    </p>
                </div>
            </div>

            
            <button 
                onClick={() => handleRemove(player)} 
                className="text-red-500 hover:text-red-700 transition-colors p-2 shrink-0"
                aria-label={`Remove ${player_name}`}
                title="Remove Player"
            >
                <FaTrashAlt size={18} className="md:w-5 md:h-5" />
            </button>
        </div>
    );
};

export default SelectedPlayerCard;