import { useState } from "react"
import { Navigate } from "react-router-dom"

function About() {
  const [user,setUser]=useState('Shadrack')
  if(!user){
    return <Navigate to= "/" replace={true}/>
  }
  return (
    <div className="about">
        <h2>About Us</h2>
        <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero nibh. Sed eget nisi sed nunc facilisis placerat id a odio. Fusce nec ultricies mi. Mauris ac mauris vitae ipsum tincidunt vulputate ac at urna. Ut at dui at ex pharetra 
                ultricies sit amet et tortor. Sed tincidunt ipsum vel elit interdum laoreet. Fusce laoreet enim laoreet dui dapibus rhoncus. Ut vel euismod orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus 
                porttitor rhoncus lobortis. Mauris egestas odio vitae est ultricies, a maximus est convallis. Vivamus auctor elit purus, sit amet ullamcorper lacus ullamcorper ac. Duis pellentesque velit et ante pretium, quis dignissim erat blandit.
            </p>
            <p>Proin ut sapien suscipit, tincidunt lacus a, euismod leo. Sed tincidunt est ut condimentum dapibus. Proin molestie consectetur ultricies. Sed dictum scelerisque luctus. Integer nulla nibh, ornare eu laoreet sit amet, dignissim nec lacus. Fusce non
                 turpis mi. In sed tristique tortor. Duis varius finibus lectus, ut fermentum erat egestas non. Sed cursus euismod elit ac cursus. Fusce velit libero, porttitor sed malesuada nec, elementum id purus. Cras non semper turpis. Etiam 
                fringilla sollicitudin efficitur. Morbi et consequat lacus. Aliquam efficitur, ipsum fringilla vehicula sodales, quam eros egestas felis, eget placerat odio ligula nec diam. Vestibulum augue odio, eleifend et rhoncus ut, mollis eget risus.
            </p>
            <p>Proin ut sapien suscipit, tincidunt lacus a, euismod leo. Sed tincidunt est ut condimentum dapibus. Proin molestie consectetur ultricies. Sed dictum scelerisque luctus. Integer nulla nibh, ornare eu laoreet sit amet, dignissim nec lacus. Fusce non
                 turpis mi. In sed tristique tortor. Duis varius finibus lectus, ut fermentum erat egestas non. Sed cursus euismod elit ac cursus. Fusce velit libero, porttitor sed malesuada nec, elementum id purus. Cras non semper turpis. Etiam 
                fringilla sollicitudin efficitur. Morbi et consequat lacus. Aliquam efficitur, ipsum fringilla vehicula sodales, quam eros egestas felis, eget placerat odio ligula nec diam. Vestibulum augue odio, eleifend et rhoncus ut, mollis eget risus.
            </p>
            <button onClick={()=>setUser(null)}>Logout</button>
    </div>
  )
}
export default About