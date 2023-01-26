export const getStaticProps = async() =>{
    const resp = await fetch('http://localhost:3005/api/blogs')
    const data = await resp.json()

    return {
        props: {blogs:data}
    }
}

const Blog = ({blogs}) => {
    return ( 
        <div>
            <h2>All the blogs are here!</h2>
            {blogs.map(blog=>(
                <div key={blog._id}>
                    <p>{blog.title}</p><br/>
                    <p>{blog.description}</p><br/>
                </div>
            ))}
        </div>

     );
}
 
export default Blog;