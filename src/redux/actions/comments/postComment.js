import axios from "axios";

const postComment = (comment, cvId, userId) => {
    const endpoint = "http://localhost:3001/comment/" + cvId + "/" + userId;

    return async () => {
        try {
            await axios.post(endpoint, {comment: comment});

        } catch (error) {
            console.log(error);
        }
    };
};

export default postComment;