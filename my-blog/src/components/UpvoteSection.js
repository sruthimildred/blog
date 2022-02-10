import React from 'react';

const UpvoteSection=({upvotes,articleName,setArticleInfo})=>  {
     
    const upvoteArticle=async()=>{
        const result=await fetch(`/api/articles/${articleName}/upvote`,{
            method: 'post',
        });
        const body=await result.json();
        setArticleInfo(body);
    }
        return (
            <div id="upvotes-section">
                <button onClick={()=>upvoteArticle()}>Add upvoteArticle</button>
                <p>This article has been upvoted {upvotes} times.</p>
           </div>
        );
    }




export default UpvoteSection;