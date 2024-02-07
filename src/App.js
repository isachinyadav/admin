import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./component/Home";
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Table from "./component/Table";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
