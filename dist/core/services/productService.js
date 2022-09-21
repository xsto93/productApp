import { API_URL, GET_PRODUCT } from './settings';
const fromApiResponseToProductDetail = (apiResponse) => {
    if (Object.keys(apiResponse).length > 0) {
        const { id, brand, model, price, imgUrl, cpu, ram, os, displayResolution, battery, primaryCamera, secondaryCmera, dimentions, weight, options, } = apiResponse;
        return {
            id,
            brand,
            model,
            price,
            imgUrl,
            cpu,
            ram,
            os,
            displayResolution,
            battery,
            primaryCamera,
            secondaryCmera,
            dimentions,
            weight,
            options,
        };
    }
    return {};
};
export default function getProductById(id) {
    const apiURL = `${API_URL}${GET_PRODUCT}${id}`;
    return fetch(apiURL)
        .then((response) => response.json())
        .then(fromApiResponseToProductDetail)
        .catch((error) => error === null || error === void 0 ? void 0 : error.message);
}
