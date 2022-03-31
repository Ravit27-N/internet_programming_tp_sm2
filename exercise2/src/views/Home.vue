<template>
  
 <div class="container">

<div class="sidenav" >
  <div class="hreader_sidebar text-center">SHOP</div>
  <div  v-for="c in category" :key="c.name">
    <a href="#about" >{{c.name}}</a>
        <div class="subnav" v-for="s in c.subcategories" :key="s.name">
          <a href="#services" @click="getProduct(s._id)" >{{s.name}}</a>
        </div>
  </div>
</div>

 
  <div class="category">


      <div class="product">

          <div  v-if="!product" class="card" style="width: 16rem;"  >
            <img src="https://assets.swappie.com/iPhone-6-Plus-space-gray-back.png" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">DEFAULT PRODCUT</h5>
              <p class="card-text">Apple iPhone 6 Plus ; CPU, Dual-core 1.4 GHz Typhoon (ARM v8-based) ; GPU, PowerVR GX6450 (quad-core graphics) ; Memory, Card slot ; Internal, 16GB 1GB RAM</p>
              <p style="color:orange">150 $</p>
              <a href="#" class="btn btn-primary">BUY</a>
            </div>
          </div>

  
          <div class="card" style="width: 16rem;" v-for="p in product" :key="p.name">
            <img src="https://s3.amazonaws.com/mentoring.redesign/s3fs-public/900product.jpg" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title"><b>{{p.name}}</b></h5>
              <p class="card-text"><span>Description: </span>{{p.description}}</p>
              <p style="color:orange">{{p.price}} $</p>
              <a href="#" class="btn btn-primary">BUY</a>
            </div>
          </div>



      </div>
  
  </div>

</div> 

</template>


<script>

import axios from 'axios';

export default {

  data(){
    return{
      category:[],
      product:null,
     
    }
  },
  methods:{
        getProduct(SubID){
              axios.get(`http://localhost:3001/api/product/${SubID}`)
              .then(response => (
                this.info = response
              ))
              .then(()=>{
                if(this.info){
                  console.log(this.info.data.msg);
                  if(this.info.data.msg=='success'){
                    this.product = this.info.data.datas;
                  }else{
                    alert("Log out false");
                  }
                }
              })
        }
      
  },
  mounted () {
    
        axios.get(`http://localhost:3001/api/category`)
              .then(response => (
                this.info = response
              ))
              .then(()=>{
                if(this.info){
                  console.log(this.info.data.msg);
                  if(this.info.data.msg=='success'){
                    this.category = this.info.data.datas;
                  }else{
                    alert("Log out false");
                  }
                }
              })

  }
}
</script>




<style scoped>

    .container{
      width: 100vw;
      margin-top: 1vh;
      padding: 1vh;
      display: flex;
      /* background-color: aqua; */
      font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
    }
    .hreader_sidebar{
      margin-bottom: 15px ;
      font-size: 25px;
      font-weight: bold;
      color:chocolate;
      background-color: antiquewhite;
    }

   .sidenav {
    text-align: left;
    height: 100%;
    width: 160px;
    /* background-color: ; */
    overflow-x: hidden;
    padding-top: 10px;
    border: 2px solid;
    margin-right: 15px ;
    
  }

    .sidenav a {
      padding: 6px 8px 6px 16px;
      text-decoration: none;
      font-size: 20px;
      color: black;
      display: block;
      font-weight: bold;
      color:coral;
    }


    .sidenav .subnav{
 
      width: 100%;
      padding-left: 35px ;
      
    }

    .sidenav a:hover {
      color: #f1f1f1;
    }

    .subnav {
      height: 100%;
      width: 120px;
      /* background-color: ; */
      text-align: left;
      overflow-x: hidden;
      padding-top: 5px;
   
    }

    .subnav a {
      padding: 6px 8px 6px 16px;
      text-decoration: none;
      font-size: 15px;
      color: black;
      display: block;
    }

    .subnav a:hover {
      color: #f1f1f1;
      background-color:cadetblue;
      border-radius:10px;
      
    }

    .subnav a:active {
      color: #f1f1f1;
      background-color:rgb(194, 12, 200);
      border-radius:10px; 
    }

 



    .category{
      width: 80vw;
      padding: 2vw;
      height: auto;
      border-radius: 5px;
      border: solid 1px;
    }
    .subcategory{
      width: 100%;
      padding-left: 10px;
      font-weight: bold ;
      font-size: 2em ;
      color: chartreuse;
      background-color:cadetblue ;
    }
    .product{
      width: 100%;
      /* border: 5px solid; */
      display: flex;
      flex-wrap: wrap;
    }
    .product >div {
      margin: 8px;
      border: solid 2px;
    }

</style>