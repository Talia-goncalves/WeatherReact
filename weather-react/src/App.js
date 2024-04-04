import './App.css';
import Forecast from "../src/components/Forecast/Forecast"
import Search from "../src/components/Search/Search"
import TempInfo from "../src/components/TempInfo/TempInfo"

function App() {
  return (
    <div>
      <Search/>
      <TempInfo/>
      <Forecast/>
    </div>
  );
}

export default App;
