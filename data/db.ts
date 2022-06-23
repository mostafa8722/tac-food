import Dexie from "dexie";
import { DB_VERSION } from '~/data/default'
 const DB = new Dexie("takFood");
 DB.version(DB_VERSION).stores({
     users: 'id',
     products:'id',
     location:'id',
 });
 export default DB;


   // await this.db.users.put({id:1,name:"ali",family:"nazar"});