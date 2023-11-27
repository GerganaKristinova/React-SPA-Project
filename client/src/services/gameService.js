import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore'

export const create = async (postData) => {
    const result = await request.post(`baseUrl/`, postData)

    return result;
}