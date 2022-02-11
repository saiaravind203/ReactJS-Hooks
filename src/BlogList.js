import Comments from "./Comments"
const BlogList = ({blogs, name,comments}) => {
    // const { data: comments} = useComments('http://localhost:5000/comments');

    return(
        <div className='blog-list'>
            <h2>{name}</h2>
            { blogs.map( blog => {
                let { id, title, author, body} = blog;
                return(
                    <div className='blogcomment'>
                        <div className='blog-view' key={id}>
                            <h2>{title}</h2><hr></hr>
                            <p>written by:{author},</p><br></br>
                            <p>{body}</p>
                        </div>
                        {comments && <Comments comments={comments} prop={id}></Comments>}
                    </div>
                )}
            )}
            
        </div>
    )
}

export default BlogList;
// const BlogList = (props) => {

//     return(
//         <div className='blog-list'>
//             <h2>{props.name}</h2>
//             { props.blogs.map( blog => {
//                 return(
//                     <div className='blog-view' key={blog.id}>
//                         <h2>{blog.title}</h2>
//                         <p>{blog.author}</p>
//                         <button onClick={() => {props.handleDelete(blog.id)}}>Delete Blog!</button>
//                     </div>
//                 )}
//             )}
//         </div>
//         )
// }

// export default BlogList;