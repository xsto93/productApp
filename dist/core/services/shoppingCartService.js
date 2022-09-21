var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ADD_PRODUCT_TO_CART, API_URL } from './settings';
const fromApiResponseToCartNumber = (apiResponse) => {
    return apiResponse.count;
};
export default function addProductToCart(productInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiURL = `${API_URL}${ADD_PRODUCT_TO_CART}`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productInfo),
        };
        const response = yield fetch(apiURL, options);
        const apiResponse = yield response.json();
        return fromApiResponseToCartNumber(apiResponse);
    });
}
