import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import Home from "./Home";
import Account from "./accounts/Account";

const router = createBrowserRouter([ Login, Registration, Home, Account]);

export default router