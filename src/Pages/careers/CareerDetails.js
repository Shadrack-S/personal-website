import { useLoaderData, useParams} from "react-router-dom"


function CareerDetails() {
   const {id} =useParams()
    const career =useLoaderData()
  return (
   <div className="career-details">
    <h2>Career Details for {career.title}</h2>
    <p>Expected Salary  : {career.salary}</p>
    <p>Job Location  : {career.location}</p>
    <div className="details">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet harum omnis accusamus suscipit quis odit hic repudiandae, 
            ad excepturi veniam, in impedit temporibus sint error tempora dicta facere nemo quasi adipisci. Velit dolor consectetur quaerat, 
            excepturi sequi dolorum exercitationem ut obcaecati! Quibusdam, optio amet minus reprehenderit a rerum laborum nulla officiis sit deleniti, 
            nihil quasi dicta repudiandae ab harum quos doloribus? Reprehenderit nostrum labore cumque. Est repudiandae odio atque expedita sint porro reprehenderit 
            ratione recusandae totam? Nam ut nostrum fugit harum voluptate, et temporibus possimus animi distinctio nemo illum quisquam beatae assumenda modi voluptatum 
            illo corrupti debitis quasi sint! </p>
    </div>
   </div>
  )
}
// Loader Function
export const careerDetailsLoader = async({params})=>{
const {id}=params

    const res=await fetch ("http://localhost:4000/careers/" + id)

    if(! res.ok){
        throw Error('Cound Not Find that carrer.')
    }
    
    return res.json()
   

}

export default CareerDetails