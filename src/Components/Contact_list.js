import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
function Contact_list({contact,removeContact}) {
  console.log(contact)
const contactlist=contact.map((val)=>{
  return (
    

      <div className='list_contact'>
      <div className='text'>{val.props.name}</div>
      <div className='text'>{val.props.email}</div>
      <span onClick={() => removeContact(val.id)}
><DeleteIcon/></span>

    </div>
    
    
  )
})  
return(
  <>
  <div className='list'>Contact List</div>
  <div className='heading'>
    <h3>Name</h3>
    <h3>Email</h3>
    <h3>Action</h3>

  </div>
  <div >{contactlist}</div>
  </>
)
}

export default Contact_list
