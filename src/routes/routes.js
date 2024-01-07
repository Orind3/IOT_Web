import History from "../components/History/History";
import Homepage from "../components/HomePage/HomePage";
import Login from "../components/LoginSite/LoginSite";
import UserInfo from "../components/UserInfo/UserInfo";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import MainLayout from "../layout/MainLayout/MainLayout";

const publicRoutes = [
    { path: "/", component: Homepage, layout: MainLayout },
    { path: "/login", component: Login, layout: DefaultLayout },
    { path: "/userInfo", component: UserInfo, layout: MainLayout },
    { path: "/history", component: History, layout: MainLayout },

];

export { publicRoutes };