import axios from "axios";

const postComment = (comment, cvId, userId) => {
    const endpoint = "http://localhost:3001/comment/" + cvId + "/" + userId;

    return async () => {
        try {
            await axios.post(endpoint, {comment: comment});

            return "Success"; // This is the value that the handleSubmit function will
        } catch (error) {
            console.log(error);
            return "Error"; // This is the value that the handleSubmit function will receive
        }
    };
};

export default postComment;