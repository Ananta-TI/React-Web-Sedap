import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import SplashCursor from "../components/SplashCursor";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function GuestLayout() {
    return (
        <div id="layout-wrapper">
            <Navbar />
            <div className="min-h-screen">
            {/* <SplashCursor/> */}
                <Outlet />
                <ScrollToTopButton />
            </div>
        </div>
    );
}
