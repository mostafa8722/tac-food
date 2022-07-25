interface myOrder {
    products: ProductOrder[],
    delivery:number ,
    discount:number ,
    order_id:number ,
    payment:number ,
    details : [],
 
  type:string ,
}
export default myOrder;

interface ProductOrder {
    id:number,
    count:number,
    price:number,
    name: string,
    logo: string,
    store_id : number,
}
