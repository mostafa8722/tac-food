interface Cart {
    products: ProductCart[],
  store_id:number ,
  store_name:string ,
}
export default Cart;

interface ProductCart {
    id:number,
    category:string,
    count:number,
    days: [],
    description: string,
    details: ProductCartDetail[],
    discount:number,
    favorite:boolean,
    is_rate: boolean,
    limited: number,
    logo: string,
    name: string,
    price: number,
    priority: number,
    rating: number,
    status: number,
  
    time_available:string,
    unit: string,
    vote: number
    
}
interface ProductCartDetail {
    id: number,
    limited: number,
    name: string,
    price: number,
    status:number,
}