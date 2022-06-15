
import DetailProduct from '~/data/models/detailProduct';
 type Product = {
    id: number,
    name: string,
    logo: string,
    price: number,
    description: string,
    favorite: boolean,
    rating: number,
    vote: number,
    count: number,
    store_id: number,
    store_name: string,
    category: string,
    unit: string,
    discount: number,
    priority: null,
    status: number,
    limited: number,
    days: number[],
    details: DetailProduct[],
    time_available: string,
    is_rate: boolean,}

    export default Product;