// import { useEffect, useState  } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
// import useComments from "./useComments";
// import Newblog from "./Newblog"
// import Comments from "./Comments"


const Home = () => {
    
    // const [blogs, setBlogs] = useState('');
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);
    const { error, isLoading, data: blogs} = useFetch('http://localhost:5000/blogs');
    // const { errorr, isLoadin, data: comments} = useComments('http://localhost:5000/comments');
    // const { data: comments} = useComments('http://localhost:5000/comments');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter( blog => blog.id !== id );
    //     setBlogs(newBlogs);
    // }

    // useEffect( () => {
    //     setTimeout( () => {
    //         fetch('http://localhost:5000/blogs')
    //          .then( res => {
    //              if(!res.ok){
    //                 throw Error('Could not fetch the desired data!!!')  
    //              }           
    //               return res.json();                   
    //             })
    //          .then( blogs => {
    //             console.log(blogs)
    //             setBlogs(blogs);
    //             setIsLoading(false);
    //         }).catch( err => {
    //             setIsLoading(false);
    //             setError(err.message);
    //         });
    //     }, 3000
    //     )
    // }, [])

    return(
        <div className="home">
            { error && <div> {error} </div>}
            {isLoading && <div>Loading Blogs........</div>}
            {/* { errorr && <div> {error} </div>}
            {isLoadin && <div>Loading Comments........</div>} */}
            {/* <Newblog></Newblog> */}
            {blogs && <BlogList blogs={blogs}  name="All blogs"  ></BlogList>}
            {/* {blogs && <BlogList blogs={blogs}  name="All blogs" comments={comments} ></BlogList>} */}
            {/* {comments && <Comments comments={comments}></Comments>} */}
            {/* <button onClick={ () => { setName('Jobs')}}>{name}</button> */}
            {/* <BlogList blogs={blogs.filter( blog => blog.author === 'John')} name="Blogs by John" handleDelete={handleDelete}></BlogList> */}
        </div>
    )
}

export default Home;