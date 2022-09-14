import { ADD_PRODUCT_TO_CART, API_URL } from './settings';

const fromApiResponseToCartNumber = (apiResponse) => {
  return apiResponse.count;
};

export default async function addProductToCart(productInfo) {
  const apiURL = `${API_URL}${ADD_PRODUCT_TO_CART}`;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productInfo),
  };

  const response = await fetch(apiURL, options);
  const apiResponse = await response.json();
  return fromApiResponseToCartNumber(apiResponse);
}
