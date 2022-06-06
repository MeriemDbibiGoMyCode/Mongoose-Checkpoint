import React from 'react'
import { Card} from 'react-bootstrap';
import axios from 'axios'
import { deletContact } from '../api/contact';
import { useNavigate } from 'react-router';
const CardContact = ({contact,getContact}) => {
  console.log('contact',contact.id)
  let navigate = useNavigate();
const update=()=>{
navigate(`/update/${contact._id}`)
}
  
  return (
    <div>
      <Card style={{ width: '18rem' }}>
    <Card.Body>
      <button onClick={async()=>{ await deletContact(contact._id); getContact()}} >X</button>
      <button onClick={()=>update()} >modify</button>
      <Card.Title>{contact.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Card.Link href="#">{contact.email}</Card.Link>
      <Card.Link href="#">{contact.age}</Card.Link>
    </Card.Body>
  </Card>
  </div>
  )
}

export default CardContact