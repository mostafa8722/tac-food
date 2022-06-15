
import ActivityTime from '~/data/models/activityTime';
import News from '~/data/models/news';

type Store = {
id:number,
name :string,
type : number,
logo : string,
min: number,
max: number,
favorite : boolean,
distance :number,
delivery_cost :number,
min_cost :number,
address :string,
lat :number,
lng :number,
rating :number,
vote :number,
categories : string[],
activity_times : ActivityTime[],
news : News[],
description :string,
pre_order :boolean,
booking :boolean,
booking_types : [],

status : number,
cash_on_delivery : boolean,
grid : boolean,
is_unit :boolean,
ago : string,
tax : number,
is_car : boolean,
more_than : number,
is_new : boolean,
}

export default Store;