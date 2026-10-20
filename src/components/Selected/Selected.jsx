import AddMoreBtn from "../AddMoreBtn/AddMoreBtn"
import SelectedPlayerCard from "../SelectedPlayerCard/SelectedPlayerCard"

const SelectedPlayers = ({ setToggle, selectedPlayers, setSelectedPlayers, setAvailableBalance }) => {

  const selectedPlayersArray = Object.values(selectedPlayers)




  const handleRemove = (player) => {

    const newSelectedPlayers = { ...selectedPlayers }

    const playerID = player.id;
    const playerPrice = player.price;

    if (selectedPlayers[playerID]) {

      delete newSelectedPlayers[playerID];

      setSelectedPlayers(newSelectedPlayers)

      setAvailableBalance(availableBalance => availableBalance + playerPrice);
    }

  }





  return (
    <div className="px-8 max-w-300 mx-auto w-full">
      {
        selectedPlayersArray.map(player => (
          <SelectedPlayerCard
            key={player.id}
            player={player}
            handleRemove={() => handleRemove(player)} />
        ))
      }

      <AddMoreBtn setToggle={setToggle} />

    </div>
  )
}

export default SelectedPlayers