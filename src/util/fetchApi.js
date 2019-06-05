import axios from "axios";

const apiKey = "0b2bdeda43b5688921839c8ecb20399b";

const fetchApi = {
    RestApi: (url, method, request,callback) => {
        if (request) {
            request["apikey"] = apiKey;
        } else {
            request = {
                apikey:apiKey
            }
        }
        axios({
            method,
            url,
            params: request  
        })
            .then(res => {
                console.log(res.data);
                callback(res);
            })
            .catch(err=>console.log(err));
    }
}
export default fetchApi;