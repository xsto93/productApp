import { API_URL, GET_PRODUCTS } from './settings';
const fromApiResponseToProducts = (apiResponse) => {
    const { data = [] } = apiResponse;
    if (Array.isArray(data)) {
        return apiResponse;
    }
    return [];
};
export default function getProducts() {
    const apiURL = `${API_URL}${GET_PRODUCTS}`;
    return fetch(apiURL)
        .then((response) => response.json())
        .then(fromApiResponseToProducts)
        .catch((error) => error === null || error === void 0 ? void 0 : error.message);
}
