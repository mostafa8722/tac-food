
import DetailProduct from '~/data/models/detailProduct';
 type Payment = {
    id: number,
    name: string,
    customer_id: number,
    body: string,
    rating: number,
    like: number,
    favorite: boolean,
    product: string[],
    date: string,
    reply: null,
    }

    export default Payment;

   
   
  