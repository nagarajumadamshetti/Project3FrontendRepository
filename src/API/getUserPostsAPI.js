import axios from '../axios';
const getUserPostsAPI = (id) => {
    return axios.get(`/user/getUserPosts/${id}`);
}
export default getUserPostsAPI;
