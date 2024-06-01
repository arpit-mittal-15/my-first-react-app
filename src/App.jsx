import {useState} from 'react';
import {Form} from "./components/Form.jsx"
import {Successful} from "./components/successful.jsx"
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
  url: "",
  codingLang:"js",
  about: "",
};

export default function App(){

  const [userDetails, setUserDetails] = useState(initialDetails);
  const [resumeFile, setResumeFile] = useState("");
  const [successful, setSuccessful] = useState(false);

  

  return(
    <>
    <div id="successMsg">
      {successful && <Successful/>}
    </div>
    <form>
      <Form userDetailsArray={{userDetails, resumeFile}} setUserDetailsArray={{setUserDetails, setResumeFile}}/>
      {console.log(userDetails)}
      {console.log(resumeFile)}

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
          console.log(JSON.stringify(userDetails));
          fetch("http://localhost:8000/api/detail", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails),
          })
            .then(res => res.json())
            .then(data => {
              if(data.status == "success"){
                setSuccessful(true)
              }
              else if (data.error == "Incomplete Data"){
                console.log("Incomplete Data")
              }
            })
            .catch(err => console.log(err));

          // const formData = new FormData();
          // console.log(formData.get("resume"))
          // formData.append("resume", resumeFile ,resumeFile.name);

          // console.log(formData.get("resume"))

          // fetch("http://localhost:8000/api/resume", {
          //   method: "POST",
          //   body: formData,
          // })
        }
      }}>Submit</button>
    </form>
    </>
  )
}