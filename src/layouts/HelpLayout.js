import { Outlet,NavLink } from "react-router-dom"

function HelpLayout() {
  return (
    <div className="help-layout">

        <h2>Website Help</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, quasi quidem id fuga, iure saepe accusamus animi deleniti impedit, ab repudiandae sit aliquid vitae nobis eum optio soluta officiis dolorem!</p>

        <nav>
            <NavLink to="faq">View the FAQ</NavLink>
            <NavLink to="contact">Contact Us!</NavLink>
        </nav>


        <Outlet/>
    </div>
  )
}
export default HelpLayout