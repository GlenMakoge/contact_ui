import './App.css';
import {useState, useEffect} from 'react';
import Numbers from './components/Numbers';
import axios from "axios"
function App() {

  const [text, setText] = useState("");
  const [contact, setContact] = useState([]);
  const [isUpdating, setUpdating] = useState("")

  useEffect(() => {
    axios.get("http://localhost:5000/get-contact")
    .then((res) => setContact(res.data))
    .catch((err) => console.log(err))
  })

  const addUpdate = () => {
    if(isUpdating ===""){
      axios.post("http://localhost:5000/save-contact", {text})
    .then((res) => {
      console.log(res.data)
      setText("");
    })
    .catch((err) => console.log(err))
    }else {
      axios.post("http://localhost:5000/update-contact", {_id: isUpdating, text})
    .then((res) => {
      console.log(res.data)
      setText("");
      setUpdating("")
    })
    .catch((err) => console.log(err))
    }
  }

  const deleteContact = (_id) => {
    axios.post("http://localhost:5000/delete-contact", {_id})
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => console.log(err))
  }

  const updateContact = (_id) => {
    setUpdating(_id);
    setText(text)
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>Contact Keeper</h1>

        <div className='top'>
          <input type="text"
          placeholder='Write Contact...' 
          value={text}
          onChange={(e) => setText(e.target.value)} />
          <div className='add' onClick={addUpdate}>{isUpdating? "Update": "Add"}</div>
        </div>
        <div className='list'>
          {contact.map(numbers => <Numbers key={numbers._id} text={numbers.text} 
          remove={() => deleteContact(numbers._id)} 
          update={() => updateContact(numbers._id, numbers.text)}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
