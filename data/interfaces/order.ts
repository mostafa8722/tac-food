interface Order {
    orders: ProductOrder[],
  store_id:number ,
  order_time:string ,
}
export default Order;

interface ProductOrder {
    product_id:number,
    count:number,
    details: ProductOrderDetail[]
}
interface ProductOrderDetail {
    id: number,
    count:number,
}