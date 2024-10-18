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
    <div className="m-8">
        <h1 className="font-bold text-4xl m-2">Do Comment</h1>
        <textarea 
            placeholder="Write your comment here.." 
            value={message} 
            onChange={(e) => {setMessage(e.target.value)}}
            className="border border-gray-500 p-4"
        >
        </textarea>
        <button 
            onClick={handleSubmit}
            className="font-bold bg-green-500 text-white p-2 border rounded-lg border-gray-700"
        >
            Submit
        </button>

        {renderComments(comments)}
    </div>
  )
}

export default Comment