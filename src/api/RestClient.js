import { ApiError } from "./ApiError";
import { store } from "../redux/store";
import { signOut } from "../_actions/app";

export class RestClient {
    static async get(url, body) {
        try {
            const result = await fetch(`${process.env.REACT_APP_API_URL}${url}`);
            if (!result) {
                throw new ApiError();
            }
            return result;
        } catch (error) {
            // TODO:
            // if (error.code === 401) {
            //     store.dispatch(signOut());
            // }
            throw RestClient.parseError(error);
        }
    }

    static async put() {
        try {

        } catch (error) {
            throw RestClient.parseError(error);
        }
    } 

    static parseError (error) {
        return new ApiError(error.message, error.code);
    }
}
