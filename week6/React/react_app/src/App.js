import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import Card from './component/Card';
import CardData from './component/CardData'

function App() {
  let Cards = CardData.map((cards)=>{
        return <Card cards={cards}/>
        });
  return (
   <div className="App">

   <div class='container_one'>
      <Nav />
      <div class="typewriter">
        <h1>Explore Saudi</h1>
      </div>
   </div>

   < div class="container_two">
      {Cards}
   </div>

   <div class="footer">
     <p>@CopyWrite</p>
   </div>

    </div>);
}

export default App;
