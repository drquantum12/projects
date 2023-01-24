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
        });
        const [blg,setBlg] = useState([]);
        let newArray = [];
        
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
                const blog_data = await axios.get('http://localhost:3005/api/user/blog/'+user).then((res) => {
                        if(blg.length == 0){
                        res.data.forEach(element => {
                        blg.push(element);
                        });}

                        
                }).catch((error) => {
                        console.log(error)

                }).finally(()=>{
                        // console.log(blogs,'blogs')
                })
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
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {
               blg.map((post) => {
                  
                return (
                    <div className="items bg-gray-200">
                                              
                        <div className="images">
                            {/* <Link href={"/"} legacyBehavior><Image src={post.image} className="rounded-lg" alt="blog image" width={300} height={300} /></Link> */}
                        </div>
                      
                        <div className="info flex justify-center flex-col py-4">
                                <p className="text-1xl md:text-1xl font-bold hover:text-gray-600">
                                    {post.title}</p>
                        </div>
                        <div className="info flex justify-center flex-col py-4">
                                <p className="text-1xl md:text-1xl font-bold hover:text-gray-600">
                                    {post.description}</p>
                        </div>
                        <div className="info flex justify-center flex-col py-4">
                            <p className="text-1xl md:text-1xl font-bold hover:text-gray-600">
                                    {post.comments.map((com)=><p>{com}</p>)}</p>
                        </div>
                        <div className="info flex justify-center flex-col py-4">
                           
                                <textarea placeholder="post comment" className="bg-gray-100 border-2 border-black rounded-lg text-1xl md:text-1xl font-bold hover:text-gray-600"
                                value={commentText} onChange={e=>{setcommentText(e.currentTarget.value);}}>
                                   </textarea>
                                   <button
                                  type='button'
                                 className='inline-block w-10 py-2 border-2 border-green-600 font-extrabold text-green-600 text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'   
                                 onClick={() => handleComment(post._id)}        
                                   >Post
                               </button>
                        </div>

                    </div>
                )
                })
                }
            </div>
                        
                
                </div>
                
        )




}

export default myAccount
