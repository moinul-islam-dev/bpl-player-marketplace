import { Suspense, useState } from "react";
import Available from "./components/Available/Available";
import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import Toggle from "./components/Toggle/Toggle"
import SelectedPlayers from "./components/Selected/Selected";
import SubscribeUI from "./components/SubscribeUI/SubscribeUI";
import Footer from "./components/Footer/Footer";


const fetchPlayers = async () => {
  const response = await fetch("/players.json");
  return response.json();
}


const fetchPlayersPromise = fetchPlayers();


const App = () => {

  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(80000000)
  const [selectedPlayers, setSelectedPlayers] = useState({})
  const [isSelected, setIsSelected] = useState(false)

  return (
    <div className="w-full">
      <Navbar  totalCredit = {availableBalance} />
      <Banner />

      <Toggle toggle={toggle} setToggle={setToggle} selectedPlayers = {selectedPlayers} />

      {
        toggle ?
          <Suspense fallback={
            <div className="flex justify-center items-center min-h-100 w-full">
              <span className="loading loading-spinner loading-lg text-primary scale-150"></span>
            </div>
          }>

            <Available fetchPlayersPromise={ fetchPlayersPromise } availableBalance = { availableBalance } setAvailableBalance = { setAvailableBalance } selectedPlayers = { selectedPlayers } setSelectedPlayers = { setSelectedPlayers } isSelected = { isSelected }  setIsSelected = { setIsSelected } />

          </Suspense>
          
          : <SelectedPlayers setToggle = { setToggle }  selectedPlayers = { selectedPlayers } setSelectedPlayers = { setSelectedPlayers } availableBalance = { availableBalance } setAvailableBalance = { setAvailableBalance } />
      }


      <div className="relative mt-50">
        <div className="absolute z-10 w-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <SubscribeUI />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default App