import axios from '../axios';
const getFollowersAndFollowingAPI = (id) => {
    return axios.get(`/user/getFollowersAndFollowing/${id}`);
}
export default getFollowersAndFollowingAPI;
