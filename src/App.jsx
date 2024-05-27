import {useState} from 'react';
import {Form} from "./components/Form.jsx"
import './App.css'

const initialDetails = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  gender:"",
  bestSubject: {
    english: false,
    maths: false,
    physics: false
  },
  resume:"",
  url: "",
  codingLang:"js",
  about: "",
};

export default function App(){

  
  const [userDetails, setUserDetails] = useState(initialDetails);

  return(
    <form>
      <Form userDetails={userDetails} setUserDetails={setUserDetails}/>
      {console.log(userDetails)}

      <button onClick={(e) => {
        e.preventDefault();
        setUserDetails(initialDetails);
        document.getElementById("male").checked = false;
        document.getElementById("female").checked = false;
        document.getElementById("other").checked = false;
        document.getElementById("english").checked = false;
        document.getElementById("maths").checked = false;
        document.getElementById("physics").checked = false;
        document.getElementById("resume").value = "";
      }}>Reset</button> 

      <button onClick={(e) => {
        e.preventDefault();
        if(userDetails){
          fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(userDetails),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Successful!");
              console.log(data);
            })
            .catch((err) => {
              console.log(err)
            })
        }
      }}>Submit</button>
    </form>
  )
}