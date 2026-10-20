import { Images } from "../../assets/assets"

const PlayerCard = ({ player, availableBalance, setAvailableBalance, selectedPlayers, setSelectedPlayers }) => {

    const { player_name, country_name, player_type, rating, batting_style, price, player_image } = player

    const playerID = player.id
    const isExist = !!selectedPlayers[playerID]
    const countSelectedPlayers = Object.keys(selectedPlayers).length

    const handleChoosePlayer = () => {
        if (availableBalance < price) {
            return alert("Insufficient Credit")
        }

        if (isExist) return alert("Already Selected!")

        if(countSelectedPlayers >= 6) return alert("Maximum 6 players allowed");

        setAvailableBalance(availableBalance - price)

        setSelectedPlayers(prev => ({
            ...prev, [playerID]: player
        }))
    }

    
    return (
        <div className="card bg-base-100 w-full max-w-100 mx-auto rounded-xl shadow-xl p-3">
            <figure
                className="bg-cover bg-center h-60 rounded-xl mb-6"
                style={
                    { backgroundImage: `url(${player_image})` }
                }
            >

            </figure>
            <div className="px-3">
                <h2 className="font-bold flex gap-2 items-center text-lg mb-6">
                    <img src={Images.user} className="w-5 h-5" alt="userIcon" />
                    {player_name}
                </h2>

                <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                        <img src={Images.flag} className="w-4 h-4" alt="" />
                        <span className="font-semibold">{country_name}</span>
                    </span>

                    <span className="bg-[#F3F3F3] font-semibold text-sm px-4 py-1 rounded-lg">{player_type}</span>
                </div>

                <div className="bg-slate-200 w-full h-px rounded-2xl mt-6"></div>
            </div>

            <div className="px-3 grid grid-cols-1 gap-4">
                <div className="flex justify-between items-center">
                    <span className="font-semibold">Rating</span>
                    <span className="font-semibold">{rating}</span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="font-semibold">Bating Style</span>
                    <span className="font-semibold">{batting_style}</span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="font-semibold">
                        Price:$ <span>{price}</span>
                    </span>

                    <button disabled={selectedPlayers[playerID]} onClick={ () => {handleChoosePlayer()}} className="btn font-semibold text-sm px-4 rounded-lg">
                        {selectedPlayers[playerID] ? "Selected" : "Choose Player"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlayerCard