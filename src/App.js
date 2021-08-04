import React, {useState} from 'react';
import { Contacts } from "@capacitor-community/contacts";


function App() {
  const [contacts, setContacts] = useState(null);
  const permissionCall = async () => {
    console.log('here');
    Contacts.getPermissions().then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }
  const contactsCall = async () => {
    console.log('here');
    Contacts.getContacts().then(results => {
      setContacts(results.contacts);
    }).catch(err => {
      console.log(err);
    });
  }
 
  return (
    <div>
      <button onClick={permissionCall}>Click me for permission</button>
      <button onClick={contactsCall}>Click me contacts</button>
      <h1>Contacts</h1>
      {contacts?.map((contact)=><div key={contact.contactId}>{contact.displayName}</div>)}
    </div>
  );
}

export default App;
