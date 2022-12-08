import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
  import Calci from './calci/Calci';
  import MyButton from './MyButton';
  import Homepage from './Pages/Homepage';
  import App from './dic/App';
function Main(){
  return (
      <div className="app">
          <Router>
              <MyButton to="" />
              <MyButton to="Calci"/>
              <MyButton to="App"/>
              <Switch>
              <Route path="/" element={<Homepage/>} />
                  <Route path="/Calci" element={<Calci/>}/>
                  <Route path="/App" 
                      element={<App/>} />
              </Switch>
          </Router>
      </div>
  )
}

export default Main;
