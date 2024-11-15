import Home from './pages/Home';
import Profile from './pages/Profile';
import Volunteer from './pages/Volunteer';
import Charities from './pages/Charities';
import Services from './pages/Services';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout';
import { verifyTokenValidity } from "./utils/util";
import { useEffect, useState } from 'react';
import { getCharities, loadAllData, loadCategoriesAndCharities, loadServicesAndCharities } from "./utils/apiUtil";
import Payment from './pages/Payment';


function App() {

  const [user, setUser] = useState({
    id: 0,
    username: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  const setUserData = (userData) => {
    console.log("userData in setUser: ", userData);
    setUser({ ...userData });
    setIsLoggedIn(true);
    setToken(userData.token);
    localStorage.setItem("token", userData.token);
  };
  console.log("token: ", token);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout isLoggedIn={isLoggedIn} userData={user} />,
      children: [
        {
          index: true,
          element: <Home setUserData={setUserData} isLoggedIn={isLoggedIn} />,
          loader: loadServicesAndCharities
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/volunteer",
          element: <Volunteer />,
        },
        {
          path: "/charities",
          element: <Charities />,
          loader: getCharities
        },
        {
          path: "/services",
          element: <Services  isLoggedIn={isLoggedIn}/>,
          loader: loadAllData
        },
        {
          path: "/payment/:username/charity/:charityname",
          element: <Payment />
        },
      ],
    },
  ]);

  // called once during page load
  useEffect(() => {
    const token = localStorage.getItem("token");
    const data = verifyTokenValidity(token);
    console.log("Data recvd in useeffect: ", data);
    console.log(typeof (data))
    if (data) {
      const uData = {
        id: data.id,
        username: data.username
      }
      setUser({ ...uData });
      setIsLoggedIn(true);
      setToken(token);
    }
  }, []);

  return (
    <RouterProvider router={router} />
  );
}

export default App