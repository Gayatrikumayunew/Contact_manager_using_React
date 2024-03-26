import { useEffect, useState } from 'react';
import './App.css';
import Add_Contact from './Components/Add_Contact';
import Contact_list from './Components/Contact_list';
import Header from './Components/Header';
import { v4 as uuidv4 } from 'uuid'; // Importing uuid function



function App() {
  const localStoragekey="contact"

  const [contact,setcontact]=useState(()=>{
   return JSON.parse( localStorage.getItem(localStoragekey))

  || []});

  useEffect(()=>{
    localStorage.setItem(localStoragekey,JSON.stringify(contact))
  },[contact])

  const addcontact=(props)=>{
setcontact([...contact,{id:uuidv4(),props}])  }
const removeContact=(id)=>{
const updatelist=contact.filter((value)=>{
  return value.id!==id;
})
setcontact(updatelist)
}
  return (
    <div className="App">
<Header/>
<Add_Contact addcontact={addcontact}/>
<Contact_list contact={contact} removeContact={removeContact}/>
    </div>
  );
}

export default App;
