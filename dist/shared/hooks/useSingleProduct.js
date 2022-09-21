var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import getProductById from '../../core/services/productService';
import { setCartNumberThunk } from '../../core/store/cart/actions/cart.actions';
export default function useSingleProduct(productId) {
    const [productData, setProductData] = useState({});
    const [colors, setColors] = useState([]);
    const [storage, setStorage] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        getProductById(productId).then((product) => {
            const { options } = product, otherProductData = __rest(product, ["options"]);
            setProductData(otherProductData);
            setColors(options === null || options === void 0 ? void 0 : options.colors);
            setStorage(options === null || options === void 0 ? void 0 : options.storages);
        });
    }, []);
    const saveProduct = (producInfo) => {
        dispatch(setCartNumberThunk(Object.assign({ id: productId }, producInfo)));
    };
    return {
        productData,
        colors,
        storage,
        saveProduct,
    };
}
