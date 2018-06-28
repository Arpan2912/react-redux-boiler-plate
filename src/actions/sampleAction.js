import { SAMPLE_ACTION } from "../constants/actionType";
import sampleService from "../services/sampleService";

export const sampleAction = () => dispatch => {
    console.log("fetch posts");
    sampleService.sampleApi()
        .then(posts => dispatch({
            type: SAMPLE_ACTION,
            payload: posts
        }))
}