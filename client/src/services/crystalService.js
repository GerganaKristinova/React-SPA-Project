import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore'

export const getAllRawGems = async () => {
    const result = await request.get(`${baseUrl}/crystals/raw-gems`)

    return Object.values(result);
};

export const getAllTumbledGems = async () => {
    const result = await request.get(`${baseUrl}/crystals/tumbled-gems`)

    return Object.values(result);
};

export const getAllShapedGems = async () => {
    const result = await request.get(`${baseUrl}/crystals/shaped-gems`)

    return Object.values(result);
};

export const createRawGems = async (postData) => {
    const result = await request.post(`${baseUrl}/crystals/raw-gems`, postData)

    return result;
}

export const createTumbledGems = async (postData) => {
    const result = await request.post(`${baseUrl}/crystals/tumbled-gems`, postData)

    return result;
}

export const createShapedGems = async (postData) => {
    const result = await request.post(`${baseUrl}/crystals/shaped-gems`, postData)

    return result;
}