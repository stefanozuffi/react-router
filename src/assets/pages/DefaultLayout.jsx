import { Outlet } from "react-router-dom";
import FixedHeader from "../components/FixedHeader";
import FixedFooter from "../components/FixedFooter";

export default function DefaultLayout() {
    

    return (
        <>
            <header>
                <FixedHeader/>
            </header>

            <Outlet/>
            
            <footer>
                <FixedFooter/>
            </footer>
        </>
        
    )
}