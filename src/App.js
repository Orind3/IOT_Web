import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes/routes';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((value, index) => {
          return <Route
            exact
            key={index}
            path={value.path}
            element={<value.layout>{<value.component />}</value.layout>}
          />
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
