const express=require("express");
const app=express();
const data=require("./data");



app.use(express.json());

app.get('/',(req,res)=>{
    res.json({"API working":"true"
});
})


app.get('/api/data',(req,res)=>{
    res.json(data);
})

app.get('/api/data/:id',(req,res)=>{
    const {id}=req.params;
     let result=data;
     let ans;
     result.map(e=>{
         console.log(e.id);
         if(e.id==id){
             ans=e;
         }
     })
     res.json(ans);
})




app.post('/api/data',(req,res)=>{
  res.json({"data_added":"true"})
  data.push(req.body);
})




app.listen(4000,()=>{
    console.log(`Server running on port 4000`);
})