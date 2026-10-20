import { use } from "react"
import PlayerCard from "../PlayerCard/PlayerCard"

const Available = ({ fetchPlayersPromise, availableBalance, setAvailableBalance, selectedPlayers, setSelectedPlayers }) => {
    const playersData = use(fetchPlayersPromise)

    return (
        
        <div className="w-full px-8 max-w-300 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center py-4">
            {playersData.map((player) => (
                <PlayerCard key={player.id} player={player} availableBalance = { availableBalance } setAvailableBalance = { setAvailableBalance }  selectedPlayers = { selectedPlayers } setSelectedPlayers = { setSelectedPlayers } />
            ))}
        </div>
    )
}

export default Available