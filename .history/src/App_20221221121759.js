import './App.css';
import {  RouterProvider } from 'react-router-dom';
import Re from './Router/Routes/Routes';

function App() {
  
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
