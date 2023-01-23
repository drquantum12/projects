import { useEffect, useState } from "react"
import axios from 'axios';


function myAccount() {
        const [firstname, setfirstname] = useState('');
        const [lastname, setlastname] = useState('');
        const [email, setemail] = useState('');
        const [showDiv, setShowDiv] = useState(false)
        const [input, setInput] = useState({
                _id:'',
                firstname: '',
                lastname: '',
                email: ''
        })
        
        const handleChange = (e) => {
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value
                })
              }
        const handleUpdate = () =>{}

        
        const fetchUser = async () => {

                const data = await axios.get('http://localhost:3005/api/user').then((res) => {

                        console.log(res);
                        setInput(res.data);

                        
                }).catch((error) => {
                        console.log(error)

                })
        }

        useEffect(() => {
                fetchUser()
        },[])
        const handleSubmit = async() =>{
                input.firstname = firstname;
                input.lastname = lastname;
                input.email = email;
                const data = await axios.put('http://localhost:3005/api/user/update/'+input._id,input);
        }

        return (
                <div className="text-center">
                        id - {input._id}<br/>
                        firstname - {input.firstname}<br/>
                        lastname - {input.lastname}<br/>
                        email - {input.email}<br/>
                        <button onClick={() => setShowDiv(!showDiv)}>update</button>
                        { showDiv && <div>
                                <form onSubmit={handleSubmit}>
      <label>
        First name:
        <input type="text" name="name" value={firstname} onChange={e => { setfirstname(e.currentTarget.value);}}/>
      </label>
      <br />
      <label>
        Last name:
        <textarea name="message" value={lastname} onChange={e => { setlastname(e.currentTarget.value); }}/>
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={e => { setemail(e.currentTarget.value); }}/>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
                        </div> }
                
                </div>
                
        )




}

export default myAccount
