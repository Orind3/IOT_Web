import Login from "../components/LoginSite/LoginSite";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import MainLayout from "../layout/MainLayout/MainLayout";
import DashBoard from "../components/DashBoard/DashBoard";

const publicRoutes = [
    { path: "/", component: DashBoard, layout: MainLayout },
    { path: "/login", component: Login, layout: DefaultLayout },
    { path: "/dashboard", component: DashBoard, layout: MainLayout},
];

export { publicRoutes };