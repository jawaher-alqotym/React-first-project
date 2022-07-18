import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import Card from './component/Card';
import CardData from './component/CardData'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let Cards = CardData.map((cards)=>{
        return <Card cards={cards}/>
        });
  return (
   <div className="App">

   <Router>

      <div class='container_one'>
       <Nav />
       <div class="typewriter">
         <h1>Explore Saudi</h1>
       </div>
     </div>

    <Routes>
     <Route>
       <Route path='/'></Route>
       <Route path='/Cards' element={<div className='container_two'>{Cards}</div>}></Route>
      </Route>
    </Routes>
     <div class="footer">
       <p>@CopyWrite</p>
     </div>

   </Router>

    </div>);
}

export default App;
