import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
      {
        path: '/',
        element: <Main></Main>
      }
  ])
  return (
    <div className="App">
      <RouterProvider ></RouterProvider>
    </div>
  );
}

export default App;
