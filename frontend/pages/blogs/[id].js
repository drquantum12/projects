export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3005/api/blogs');
    const data = await res.json();

    const paths = data.map(blog =>{
        return {
            params : {id:blog._id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export  const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://localhost:3005/api/blog/'+id);
    const data = await res.json();

    return {
        props : {blog:data}
    }
}

const Details = ({blog}) => {
    return (  
        <div>
            <h1>Details</h1>
            <h4>{ blog.title }</h4>
            <p>{ blog.description }</p> 

        </div>
    );
}
 
export default Details;