import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Alert from '@mui/material/Alert';

const Add_Contact = ({addcontact}) => {
  const [contactdata,setcontactdata]=useState({name:"",email:""})


  const handleChange=(event)=>{
    if(event.target.name==="name"){
      setcontactdata({...contactdata,name:event.target.value})
    }else{
      setcontactdata({...contactdata,email:event.target.value})
    }
  }
  const handleAdd=()=>{
    if(contactdata.name==="" || contactdata.email===""){
       alert("Please enter details")
      return;

  

      return;
    }
    addcontact(contactdata)
    setcontactdata({name:"",email:""})
  }
  return (
    <div className='main'>
    <div className='contact_head'>
      <h2 className='head'>Add To Contact </h2>
      <form className='form'>
        {/* <label>Name:</label>
        <input type='text' placeholder='Enter Name' name='name' value={contactdata.name} onChange={handleChange} />*/
  }
        <TextField autoComplete='off' className ="field"id="filled-basic" label="Name:" variant="filled" name='name' value={contactdata.name} onChange={handleChange}placeholder='Enter Name'   InputLabelProps={{
    style: { color: '#636363' }
  }}
  InputProps={{
    style: { color: 'white' },
    inputProps: { style: { color: 'white' } }
  }}

/>
{/* <label>  */}

          {/* Email:</label>
        <input type='email' placeholder='Enter email' name='email' value={contactdata.email} onChange={handleChange} /> */}
        <TextField  autoComplete='off' className ="field" id="filled-basic" label="Email:" variant="filled" name='email' value={contactdata.email} onChange={handleChange}placeholder='Enter Email'   InputLabelProps={{
    style: { color: '#636363' }
  }}
  InputProps={{
    style: { color: 'white' },
    inputProps: { style: { color: 'white' } }
  }}/>
      <button className='btn' onClick={handleAdd}>Add Contact</button>

      </form>
    </div>

    </div>
  )
}

export default Add_Contact
