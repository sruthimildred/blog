import React from "react";

const CommentsList=({comments})=> {
    
        return (
        <>
{comments.map((comment,key)=>{
   return(
    <div className="commeent" key={key}>
        <h4>{comment.username}</h4>
        <p>{comment.text}</p>
    </div>
     )
})}
            </>
        );
    }
    export default CommentsList;


