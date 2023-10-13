import About from "../pages/About";
import Blog from "../pages/Blog";
import Booking from "../pages/Booking";
import Cart from "../pages/cart";
import Contact from "../pages/Contact";
import Detail from "../pages/detail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/register";
import Service from "../pages/Service";
import Shop from "../pages/Shop";
import success from "../pages/success";
import Notfound from "../pages/notfound";


const publicRoutes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/service", component: Service },
    { path: "/contact", component: Contact },
    { path: "/shop", component: Shop },
    { path: "/blog", component: Blog },
    { path: "/booking", component: Booking },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/detail", component: Detail },
    { path: "/cart", component: Cart },
    { path: "/success", component: success },
    { path: "*", component: Notfound },
];

const privateRoutes = []

export { publicRoutes, privateRoutes }