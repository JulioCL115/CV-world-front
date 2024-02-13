import axios from "axios";

const postComment = (comment) => {
    const endpoint = "http://localhost:3001/comment/:cvId/:userId"

    return async () => {
        try {
            await axios.post(endpoint, comment);

        } catch (error) {
            console.log(error);
        }
    };
};

export default postComment;