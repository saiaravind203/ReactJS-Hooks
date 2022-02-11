import './index.css'


const Comments = ({comments,prop}) =>{
    return(
        <div>
            {/* {prop} */}
            {comments.map(comment => {
                let{id,commentss} =comment;
                // console.log(id)
                // console.log(prop)
                if (prop === id ){
                    return(
                        <div className="comments" key={id} >
                            <h3>Comment</h3>
                            <p>{commentss}</p>
                        </div>
                    )
                }
                else{
                    console.log ("nothing");
                }  
            })}
            
        </div>
       
    )
}

export default Comments;

