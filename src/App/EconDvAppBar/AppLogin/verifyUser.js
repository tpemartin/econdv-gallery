import axios from "axios";
import config from "../../../config.json";

window.axios = axios;

export default async function verifyUser(access_token) {
    
    
    console.log("access_token", access_token)
    const data = JSON.stringify({
        accessToken: access_token
    })

    const response = await axios.post(
        config.url, 
        data)


    return response
}

export async function submit_save_Assessment(access_token, assessment, submit = false) {

    const data = JSON.stringify({
        accessToken: access_token,
        assessment: assessment
    })
    const response = await axios.post(
        uri, 
        data,
        {params: {submit: submit}})


    return response

}