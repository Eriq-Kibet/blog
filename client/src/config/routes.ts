import IRoute from "../interfaces/route";
import Blog from "../pages/blog";
import Edit from "../pages/edit";
import HomePage from "../pages/home";
import Login from "../pages/login";

const authRoutes: IRoute[] = [
  { path: "/login", exact: true, auth: false, component: Login, name: "Login" },
  { path: "/register", exact: true, auth: false, component: Login, name: "Register" }
];
const blogRoutes: IRoute[] = [
    { path: "/edit", exact: true, auth: true, component: Edit, name: "Edit" },
    { path: "/edit/:blogID", exact: true, auth: true, component: Edit, name: "Edit" },
    { path: "/blogs/:blogID", exact: true, auth: true, component: Blog, name: "Blog" }
];
const mainRoutes: IRoute[] = [
    { path: "/", exact: true, auth: true, component: HomePage, name: "Home" }
];
const routes: IRoute[] = [...authRoutes, ...blogRoutes, ...mainRoutes];

export default routes;
