import React from "react";
import Card from "./Card";
import image from "./bas.JPG"
import contacts from "../contacts";
import Avatar from "./Avatar";


function createCard(contact) {
  return <Card 
  id={contact.id}
  key={contact.id}
  name={contact.name}
  img={contact.imgURL}
  phone={contact.phone}
  email={contact.email}

  
   />;



}

function App() {
  return (
    <div>
    <h1 className="heading">My Contacts</h1>

    {contacts.map(createCard)}





      {/* { <h1 className="heading">My Contacts</h1>
      <Avatar img={image}/>
      <Card 
      name="Barnabas" 
      img={image}
      phone="+123 456 789" 
      email="b@barnabas.com" />
      <Card 
      name={contacts[0].name}
      img={contacts[0].imgURL}
      phone={contacts[0].phone} 
      email={contacts[0].email} />
      <Card 
      name={contacts[1].name}
      img={contacts[1].imgURL}
      phone={contacts[1].phone} 
      email={contacts[1].email} />
      <Card 
      name={contacts[2].name}
      img={contacts[2].imgURL}
      phone={contacts[2].phone} 
      email={contacts[2].email} /> } */}
    </div>
  );
}
export default App;