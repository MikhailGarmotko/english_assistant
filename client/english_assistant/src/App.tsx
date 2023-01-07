import { Routes, Route, RouteObject } from "react-router-dom";
import { Login } from './components/login'
import { Home } from "./components/home";
import { useRoutes } from "react-router-dom";
import { ProtectedRoute } from "./components/protectedRoute";

const App:React.FC = () => {
  const routes:RouteObject[] = 
    [
      {
        path:'/',
        element:<ProtectedRoute><Home /></ProtectedRoute>,
      },
      {  
        path:'/login',
        element:<Login />,}
    ];
    return useRoutes(routes);

}

export default App;
