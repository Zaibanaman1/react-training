import react from 'react'
import React from 'react'
import styles from './phonepack.module.css'

function Phonepack() {
    const [Radio,setRadio] = react.useState("")
    const [Phone,setPhone] = react.useState("")

    const handleTextChange = (e)=>{

        let Value = e.target.value
        console.log(Value)
        setPhone(Value)

    }

    const handleClick = (e)=>{
        let radio = e.target.value
        setRadio(radio)  
    }

    const handleSubmit = ()=>{
        
            alert("phone:"+ Phone +" "+"radio:"+ Radio)
    }



    return (
        <div className={styles.container}>
            <form>
            <label for="phonenNumber"> Phone Number: </label>
            <input onChange={handleTextChange} type="tel" name="phoneNumber"  minLength="10" maxLength="10"></input>
         
            <div className={styles.displaybox}>{Phone}</div>
         
            <p>Has Data Pack:</p>
            <input onClick={handleClick} type="radio" id="yes" name="Phone Pack" value="yes" />
            <label for="yes">YES</label>
            <br/>
            <input  onClick={handleClick} type="radio" id="no" name="Phone Pack" value="no" />
            <label for="no">NO</label><br/>
            <br/>
            <div className={styles.displaybox}>{Radio}</div>
            <button  type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Phonepack
