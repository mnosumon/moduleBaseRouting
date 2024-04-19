import Account from "../../components/accounts/Account";
import Hr from "./hr/Hr";
import User from "./user/User";

export default {
    path: "/account",
    element: <Account/>,
    children: [ User, Hr ],
}