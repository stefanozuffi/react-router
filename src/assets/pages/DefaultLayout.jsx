import { Outlet } from "react-router-dom";
import FixedHeader from "../components/FixedHeader";

export default function DefaultLayout() {
    

    return (
        <>
            <header>
                <FixedHeader/>
            </header>

            <Outlet/>
            
            <footer>
                {/* fixed footer to do */}
            </footer>
        </>
        
    )
}