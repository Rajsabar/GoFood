const mongoose = require('mongoose');
const mongoURI='mongodb+srv://rajsabarjotsingh:Rajsabar1234@cluster0.ral2vxf.mongodb.net/GoFood?retryWrites=true&w=majority'

// const mongoDB = async()=>{
//     await mongoose.connect(mongoURI , ()=>{
//         console.log("Connected")
//     });
// }

// const mongoDB = async()=>{
//     await mongoose.connect(mongoURI);
// }
// module.exports=mongoDB;

const mongoDB = async () => {
      await mongoose.connect(mongoURI, {useNewUrlParser : true}, async(err,result)=>{
        if(err) console.log(err);
        else{
          console.log("Connected to MongoDB successfully!");

          const fetched_data=await mongoose.connection.db.collection("food_item");
              //console.log(fetched_data.find({}))
              fetched_data.find({}).toArray(async function(err,data){

             const foodCategory = await mongoose.connection.db.collection("food_item2");
             foodCategory.find({}).toArray(function(err,catData){

              if(err) console.log(err);
              else 
              global.food_item=data;
              global.foodCategory=catData;
             })

                //console.log(global.food_item);
              })
        }
      });
    }
     
      
  //     const fetched_data=await mongoose.connection.db.collection("food_item");
  //     //console.log(fetched_data.find({}))
  //     fetched_data.find({}).toArray(function(err,data){
  //       if(err) console.log(err);
  //       else console.log(data);
  //     })

  //   } catch (error) {
  //     console.log("Error connecting to MongoDB:", error.message);
  //   }
  //   console.log("over");
  // };
  
  module.exports = mongoDB;