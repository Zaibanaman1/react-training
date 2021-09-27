import React from 'react'
import './form.css'

function Form() {


const [Email,setEmail] = React.useState("");
const [Username,setUsername] = React.useState("");
const [Phone,setPhone] = React.useState("");
 
  const handlechange = (e)=>{
    if(e.target.name==="email"){
        
        setEmail(e.target.value)

    }
    else if(e.target.name==="phone"){
        setPhone(e.target.value)    
    }
    
    else {
        setUsername(e.target.value)
    }
}
   

    const handleSubmit = (e)=>{

        // Create an object of formData
        let form_data = new FormData();
      
        // Update the formData object
        form_data.append('phone', Phone);
        form_data.append('email', Email);
        form_data.append('username',Username);
        alert(Email,Username,Phone)
    }

    return (
        <div className="formdiv">
            <h4>User Input Form</h4>
            <form onSubmit={handleSubmit}>
                <input type="text"  onChange={handlechange} id="username"  name="username" placeholder="User Name" maxLength="40"></input>
                <br>
                </br>
                <input type="email" onChange={handlechange} name="email" placeholder="email"></input>
              
                <br>
                </br>
                <input type="tel"   onChange={handlechange}  name="phone" minLength="10" maxLength="10" placeholder="phone number"></input>
                <br>
                </br>
                <button id="bt" onClick={handleSubmit}>submit</button>
            </form>
        </div>
    )

}
export default Form
