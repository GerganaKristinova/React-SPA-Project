import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore'

export const getAllShapedGems = async () => {
    const result = await request.get(`${baseUrl}/shaped-gems`)

    return Object.values(result);
};

export const getOneShapedGem = async (shapedGemId) => {
    const result = await request.get(`${baseUrl}/shaped-gems/${shapedGemId}`)

    return result;
}

export const createShapedGems = async (postData) => {
    const result = await request.post(`${baseUrl}/shaped-gems`, postData)

    return result;
}
