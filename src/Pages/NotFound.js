import {Link } from "react-router-dom"
function NotFound() {
  return (
    <div>
        <h2>Page Not Found !</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo blanditiis hic consectetur libero, fuga ex illum tenetur amet, est corrupti rerum omnis quaerat voluptatem nesciunt modi? Ad fugit dolores nobis.</p>
        <p>Go to <Link to = "/">Home Page</Link>.</p>
    </div>
  )
}
export default NotFound