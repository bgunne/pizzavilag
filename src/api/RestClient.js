import { ApiError } from "./ApiError";
import { Env } from "../utils/Env";
//import { store } from "../redux/store";
//import { signOut } from "../_actions/app";

export class RestClient {
	static async get(url, body) {
		console.log(Env.apiUrl);
		try {
			const result = await fetch(`${Env.apiUrl}${url}`);
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

	static async delete(url, body) {
		try {
			const result = await fetch(`${Env.apiUrl}${url}`, {
				method: 'delete',
				headers: { 'Content-Type': 'application/json' },
				body: body
			});
			if (result.status !== 200) {
				throw new ApiError();
			}
		}
		catch (error) {
			throw RestClient.parseError(error);
		}
	}

	static async post(url, body) {
		console.log(Env.apiUrl);
		try {
			const result = await fetch(`${Env.apiUrl}${url}`, {
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: body
			});
			if (result.status !== 200) {
				throw new ApiError();
			}
			return result;
		}
		catch (error) {
			throw RestClient.parseError(error);
		}
	}

	static async put(url, body) {
		try {
			const result = await fetch(`${Env.apiUrl}${url}`, {
				method: 'put',
				headers: { 'Content-Type': 'application/json' },
				body: body
			});
			if (result.status !== 200) {
				throw new ApiError();
			}
		}
		catch (error) {
			throw RestClient.parseError(error);
		}
	}

	static parseError(error) {
		return new ApiError(error.message, error.code);
	}
}
