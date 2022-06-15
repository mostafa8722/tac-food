import type Advertise from '~/data/models/advertise'
import type Category from '~/data/models/category'
import type Product from '~/data/models/product'
 type Home = {
    advertises: Advertise[],
    types: Category[],
    most_popular: Product[],
    discounts: Product[],
   
  }

  export default Home;