export function Form({userDetails, setUserDetails}){
  return (
    <>
      <h1>Form in React</h1>

      <label htmlFor="firstName">First Name:</label>
      <br/>
      <input id="firstName" 
        value={userDetails.firstName} 
        onChange={(e) => {
          setUserDetails(
            (currentState) => ({...currentState, firstName: e.target.value})
          )
        }}
      />
      <br/>
      <label htmlFor="lastName">Last Name:</label>
      <br/>
      <input id="lastName" 
        value={userDetails.lastName} 
        onChange={(e) => {
          setUserDetails(
            (currentState) => ({...currentState, lastName: e.target.value})
          )
        }}
      />
      <br/>
      <label htmlFor="email">Enter email:</label>
      <br/>
      <input id="email" 
        value={userDetails.email} 
        onChange={(e) => {
          setUserDetails(
            (currentState) => ({...currentState, email: e.target.value})
          )
        }}
      />
      <br/>
      <label htmlFor="contact">Contact:</label>
      <br/>
      <input id="contact" 
        value={userDetails.contact} 
        onChange={(e) => {
          setUserDetails(
            (currentState) => ({...currentState, contact: e.target.value})
          )
        }}
      />
      <br/>
      <label>Gender:</label>
      <br/>
      <input type="radio" name="gender" id="male" 
        value="male"
        onClick={(e) => {
          setUserDetails((currentState) => ({...currentState, gender: e.target.value}))
        }}/>
      <label htmlFor="male">Male</label>

      <input type="radio" name="gender" id="female" 
        value="female"
        onClick={(e) => {
          setUserDetails((currentState) => ({...currentState, gender: e.target.value}))
        }}/>
      <label htmlFor="female">Female</label>

      <input type="radio" name="gender" id="other" 
        value="other"
        onClick={(e) => {
          setUserDetails((currentState) => ({...currentState, gender: e.target.value}))
        }}/>
      <label htmlFor="other">Other</label>
      <br/>
      <label>Favorite Subjects:</label>
      <br/>
      <input type="checkbox" name="subject" id="english" 
        value="english"
        onClick={() => {
          setUserDetails((currentState) => ({...currentState, bestSubject:{
            ...currentState.bestSubject, english: !currentState.bestSubject.english
          }}))
        }}/>
      <label htmlFor="english">English</label>

      <input type="checkbox" name="subject" id="maths" 
        value="maths"
        onClick={() => {
          setUserDetails((currentState) => ({...currentState, bestSubject:{
            ...currentState.bestSubject, maths: !currentState.bestSubject.maths
          }}))
        }}/>
      <label htmlFor="maths">Maths</label>

      <input type="checkbox" name="subject" id="physics" 
        value="physics"
        onClick={() => {
          setUserDetails((currentState) => ({...currentState, bestSubject:{
            ...currentState.bestSubject, physics: !currentState.bestSubject.physics
          }}))
        }}/>
      <label htmlFor="physics">Physics</label>
      <br/>
      <label>Upload Resume:</label><br/>
      <input type="file" name="resume" id="resume" onChange={(e)=>
        setUserDetails((currentState) => ({...currentState, resume:e.target.files[0]}))
      }/>
      <br/>
      <label htmlFor="url">Url:</label>
      <br/>
      <input id="url" 
        value={userDetails.url} 
        onChange={(e) => {
          setUserDetails(
            (currentState) => ({...currentState, url: e.target.value})
          )
        }}
      />
      <br/>
      <label htmlFor="langs">Choose a language:</label>

      <select name="lang" id="lang" value={userDetails.codingLang} 
        onChange={(e)=>{
          setUserDetails((currentState) => (
            {...currentState, codingLang:e.target.value}
          ))
      }}>
        <option value="js">JavaScript</option>
        <option value="cpp">C++</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
      </select>
      <br/>
      <label htmlFor="about">About:</label>
      <br/>
      <input id="about" 
        value={userDetails.about} 
        onChange={(e) => {
          setUserDetails(
            (currentState) => ({...currentState, about: e.target.value})
          )
        }}
      />
      <br/>
    </>
  )
}