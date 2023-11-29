import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore'

export const getAllRawGems = async () => {
    const result = await request.get(`${baseUrl}/raw-gems`)

    return Object.values(result);
};

export const getAllTumbledGems = async () => {
    const result = await request.get(`${baseUrl}/tumbled-gems`)

    return Object.values(result);
};

export const getAllShapedGems = async () => {
    const result = await request.get(`${baseUrl}/shaped-gems`)
    console.log(result);

    return Object.values(result);
};

export const createRawGems = async (postData) => {
    const result = await request.post(`${baseUrl}/raw-gems`, postData)

    return result;
}

export const createTumbledGems = async (postData) => {
    const result = await request.post(`${baseUrl}/tumbled-gems`, postData)

    return result;
}

export const createShapedGems = async (postData) => {
    const result = await request.post(`${baseUrl}/shaped-gems`, postData)

    return result;
}