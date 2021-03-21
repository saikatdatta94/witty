import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Chat from './components/Chat';
import Join from './components/Join';


function App() {

 

  // socket.emit('join',()=>{
  //   console.log("Sent");
  // })


  return (
    <div className="App">
     <Router>
       <Route exact path="/">
          <Join/>
       </Route>
       <Route exact path="/chat">
         <Chat/>
       </Route>
     </Router>
    </div>
  );
}

export default App;
