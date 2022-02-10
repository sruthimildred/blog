import React,{useState} from 'react';

const AddCommentForm=({articleName,setArticleInfo})=> {
    const [name,setName]=useState("");
    const [comment,setComment]=useState("");
     
    const addComment=async()=>{
     const result=await fetch(`/api/articles/${articleName}/add-comment`,{
         method:"post",
         body: JSON.stringify({username:name, text:comment}),
         headers:{
             "content-type":"application/json",
         }
     });
     const body=await result.json();
     setArticleInfo(body);
     setName('');
     setComment('');

    }

        return (
            <div id='add-comment-form'>
                <h3>Add a comment</h3>
                <label>
                    name:
                    <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/>
                </label>

                <label>
                    comment:
                    <textarea rows="4" cols="50" value={comment} onChange={(event)=>setComment(event.target.value)}/>
                </label>

                <button onClick={()=>addComment()}>Add comment</button>

            </div>
        );
    }

export default AddCommentForm;