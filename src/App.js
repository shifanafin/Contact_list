import React from "react";
import Contact from "./Contact";
import contacts from "./contact";

function App() {
  return (
    <div className="App">
      <h1 className="heading">My Contacts</h1>
      <Contact  
      name={contacts[0].name}
      img={contacts[0].img}
      tel={contacts[0].phone}
      email={contacts[0].email}
      />
      <Contact  
      name={contacts[1].name}
      img={contacts[1].img}
      tel={contacts[1].phone}
      email={contacts[1].email}
      />
       <Contact  
      name={contacts[0].name}
      img={contacts[0].img}
      tel={contacts[0].phone}
      email={contacts[0].email}
      />
       <Contact  
      name={contacts[1].name}
      img={contacts[1].img}
      tel={contacts[1].phone}
      email={contacts[1].email}
      />
    </div>
  );
}

export default App;
