import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950/95 w-full">
            <Navigation />
            <main className="pt-20 min-h-screen overflow-x-hidden">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout;