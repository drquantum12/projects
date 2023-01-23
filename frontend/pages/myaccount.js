import { useEffect, useState } from "react"
import axios from 'axios';


function myAccount() {
        const [firstname, setfirstname] = useState('');
        const [lastname, setlastname] = useState('');
        const [email, setemail] = useState('');
        const [showDiv, setShowDiv] = useState(false);
        const [commentText,setcommentText] = useState('');
        const [input, setInput] = useState({
                _id:'',
                firstname: '',
                lastname: '',
                email: ''
        })
        const [blogs,setBlogs] = useState([]);
        
        const handleChange = (e) => {
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value
                })
              }
        const handleUpdate = () =>{}

        
        const fetchUser = async () => {
                const user = localStorage.getItem("username");
                const data = await axios.get('http://localhost:3005/api/user/'+user).then((res) => {

                        console.log(res);
                        setInput(res.data);

                        
                }).catch((error) => {
                        console.log(error)

                })
        }

        const fetchBlogs = async () => {
                const user = localStorage.getItem("username");
                let blog_data_temp = [];
                const blog_data = await axios.get('http://localhost:3005/api/user/blog/'+user).then((res) => {

                        // console.log(res,'blogs');
                        
                        blog_data_temp = res.data;
                        setBlogs(res.data);
                        // setfirstname(JSON.stringify(blog_data_temp));
                        console.log(firstname,'array');

                        
                }).catch((error) => {
                        console.log(error)

                }).finally(()=>{
                        console.log(blogs,'blogs')})
        }

        useEffect(() => {
                fetchUser(),
                fetchBlogs()
        },[])
        const handleComment = async(objectId)=>{
                comment.username = localStorage.getItem("username");
                comment.text = commentText;
                const data = await axios.post('http://localhost:3005/api/comment/'+objectId,comment);
                // console.log(comment)
            }

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
                        <br/>
                        <br/>

                        
                
                </div>
                
        )




}

export default myAccount
