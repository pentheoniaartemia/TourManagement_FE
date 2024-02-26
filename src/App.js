import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import { routes } from './routes'

function App() {

  console.log(process.env.REACT_APP_API_KEY);
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          const Page = route.page; 
          return (
            <Route path= {route.path} element = {<Page />}  ></Route>
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
