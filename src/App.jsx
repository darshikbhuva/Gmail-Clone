import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Body from "./components/Body";
import Inbox from "./components/Inbox";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import { useSelector } from "react-redux";
import Login from "./components/Login";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
]);

function App() {
  const { user } = useSelector((store) => store.appSlice);
  return (
    <div className="w-screen h-screen bg-[#F6F8FC]">
      {user ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <RouterProvider router={AppRouter} />
          <div className="absolute w-[30%] bottom-0 right-20 z-10">
            <SendMail />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
