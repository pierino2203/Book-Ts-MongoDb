const mongoose =require('mongoose')
import { mongodb } from './keys'
mongoose.connect(mongodb.URI, {
     useNewUrlParser: true 
})  
  .then(() => console.log("Db is online",))
 .catch((err: any) =>  console.log(err))

   