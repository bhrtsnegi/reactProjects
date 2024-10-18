import { useState } from "react"

const Comment = () => {
    const [message, setMessage] = useState('');
    const [comments, setComments] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newComment = {
            message,
            likes: 0,
            dislikes: 0,
            replies: []
        };
        setComments([...comments, newComment]);
        setMessage(''); 
    }

    const handleLikes = (index) => {
        const updatedComments = [...comments];
        updatedComments[index].likes += 1;
        setComments(updatedComments);
    }

    const handleDislikes = (index) => {
        const updatedComments = [...comments];
        updatedComments[index].dislikes += 1;
        setComments(updatedComments);
    }

const renderComments = (commentList) =>{
    return commentList.map((comment, index) =>(
        <div key={index}>
            <p>{comment.message}</p>
            <button onClick={() => handleLikes(index)}>Like {comment.likes}</button>
            <button onClick={() => handleDislikes(index)}>Dislike {comment.dislikes}</button>
            <button>Reply</button>
        </div>
    ))
}
  return (
    <div>
        <h1>Do Comment</h1>
        <textarea 
            placeholder="Write your comment here.." 
            value={message} 
            onChange={(e) => {setMessage(e.target.value)}}
        >
        </textarea>
        <button 
            onClick={handleSubmit}
        >
            Submit
        </button>

        {renderComments(comments)}
    </div>
  )
}

export default Comment