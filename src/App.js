import './App.css';
import Example from './components/Navbar';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Example name='Home Page' />} >
          </Route>

          <Route path='/allfiles' element={<Example name='All Files Page' />} >
          </Route>

          <Route path='/photos' element={<Example name='Photos Page' />} >
          </Route>

          <Route path='/shared' element={<Example name='Shared Page' />} >
          </Route>

          <Route path='/albums' element={<Example name='Albums Page' />} >
          </Route>

          <Route path='/settings' element={<Example name='Settings Page' />} >
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
