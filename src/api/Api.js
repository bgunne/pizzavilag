import { RestClient } from "./RestClient";

export class Api {
    static async getPizzas() {
        return RestClient.get('/');
    }

    // TODO: add all api calls...
}
