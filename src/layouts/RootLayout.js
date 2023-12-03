import { NavLink,Outlet } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs"

function RootLayout() {
  return (
    <div className="root-layouts">
        <header>
            <nav>
                <h1>Shadrack S</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="careers">Carrers</NavLink>
                <NavLink to="help">Help</NavLink>
               
                </nav>
                <Breadcrumbs/>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
export default RootLayout