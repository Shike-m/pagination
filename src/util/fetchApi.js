import axios from "axios";

const baseUrl = "https://api.douban.com/";
const apiKey = "0b2bdeda43b5688921839c8ecb20399b";

const fetchApi = {
    RestApi: (url, method) => {
        axios({
            method,
            url:baseUrl+url,
            params: {
                apikey:apiKey
            }
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(err=>console.log(err));
    }
}
export default fetchApi;