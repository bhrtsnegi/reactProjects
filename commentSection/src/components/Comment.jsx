import { useState } from "react"

const Comment = () => {
    const [message, setMessage] = useState('');
    const [comments, setComments] = useState([]);
    const [replyingTo, setReplyingTo] = useState(null);
    const [reply, setReply] = useState('');

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

    const handleReplySubmit = (e, index) =>{
        e.preventDefault();
        const updatedComments = [...comments];
        const newReply = {
            message: reply,
            likes: 0,
            dislikes: 0,
            replies: []
        };

        updatedComments[index].replies.push(newReply);
        setComments(updatedComments);
        setReply('');
        setReplyingTo(null);
    }

    const renderComments = (commentList, parentIndex = null) => {
        return commentList.map((comment, index) => {
            const commentIndex = parentIndex !== null ? `${parentIndex}-${index}` : index;
            
            return (
                <div key={commentIndex} className="w-[50%] m-8 p-8 border rounded-lg border-gray-600">
                    <p className="text-3xl font-semibold">{comment.message}</p>
                    <br />
                    <button 
                        onClick={() => handleLikes(index)}
                        className="m-2 bg-blue-300 border border-gray-800 rounded-lg text-white p-1"
                    >
                        Like {comment.likes}
                    </button>
                    <button 
                        onClick={() => handleDislikes(index)}
                        className="m-2 bg-blue-300 border border-gray-800 rounded-lg text-white p-1"
                    >
                        Dislike {comment.dislikes}
                    </button>
                    <button onClick={() => setReplyingTo(commentIndex)}>Reply</button>

                    {replyingTo === commentIndex && (
                        <div>
                            <textarea
                                value={reply}
                                placeholder="Reply here"
                                onChange={(e) => setReply(e.target.value)}
                                className="w-[40%] m-6 p-1 border border-gray-600 rounded-lg"
                            ></textarea>
                            <button
                                className="font-bold bg-green-500 text-white p-2 border rounded-lg border-gray-700"
                                onClick={(e) => handleReplySubmit(e, index)}
                            > 
                                Submit
                            </button>
                        </div>
                    )}

                    {comment.replies.length > 0 && (
                        <div>
                            <h4>Replies: </h4>
                            {renderComments(comment.replies, commentIndex)}
                        </div>
                    )}
                </div>
            );
        });
    }

    return (
        <div className="m-8">
            <h1 className="font-bold text-4xl m-2">Just Checking Interactions</h1>
            <textarea 
                placeholder="Write your comment here.." 
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
                className="w-[80%]  m-6 border border-gray-500 p-4"
            ></textarea>
            <button 
                onClick={handleSubmit}
                className="font-semibold bg-green-500 text-white p-2 border rounded-lg border-gray-700"
            >
                Comment
            </button>

            {renderComments(comments)}
        </div>
    );
}

export default Comment;
