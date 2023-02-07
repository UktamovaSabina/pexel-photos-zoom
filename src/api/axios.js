import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.pexels.com/v1/search?query=dog',
    headers: {
        Authorization: "TJoPZHhZz7VPyRfmy6CXAWCf2wz1cCG1yizn7BDSsjgwAtkGUPT0EkEK"
    }
})

export default instance