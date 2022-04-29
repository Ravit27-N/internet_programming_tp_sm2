

<template>
  <main>
    <div class="bg-gray-100 py-2 text-center text-lg relative">
      TopOne.com

      <div
        class="
          absolute
          text-white
          right-2
          top-2
          bg-gray-400
          px-2
          rounded-md
          cursor-pointer
        "
      >
        <router-link to="/dashboard"><div class="">Dashboard</div></router-link>
      </div>
    </div>
    <div class="container">

        <div class="sidenav" >
          <div class="hreader_sidebar text-center" ><span @click="getPorduct">SHOP</span></div>
          <div  v-for="c in category" :key="c._id" >
            <a href="#about" @click="()=>getProduct_by_cat(c._id)" >{{c.name}}</a>
                <div class="subnav" v-for="s in c.items" :key="s.id">
                  <a href="#services" @click="()=>getProduct_by_sub(s._id,c._id)" >{{s.name}}</a>
                </div>
          </div>
        </div>

        
          <div class="category">


              <div class="product" >

                  <div  class="card" style="width: 14rem;" v-for="p in product" :key="p._id"  >
                    <img v-bind:src="p.imageUrl" class="card-img-top">
                    <div class="card-body">
                      <h5 class="title_card">{{p.title}}</h5>
                      <div class="list_price">
                        <div v-for="pr in p.prices" :key="pr._id">
                          <span>{{pr.source}}</span><span>{{pr.price}}</span>
                        </div>
                      </div>
                      <a href="#" class="btn btn-primary">BUY</a>
                    </div>
                  </div>
                  
                  
          
            



              </div>
          
          </div>

    </div> 

  </main>
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
      getProduct_by_sub(subcat,cat){
          console.log(subcat,cat);
           axios.get(`http://localhost:3001/product/all/${cat}/${subcat}`)
              .then(response => (
                this.info = response
              ))
              .then(()=>{
                if(this.info){
                  console.log(this.info.data);
                   this.product = this.info.data;
                }
              })
      },
      getProduct_by_cat(cat){
          console.log(cat);
          axios.get(`http://localhost:3001/product/all/${cat}`)
              .then(response => (
                this.info = response
              ))
              .then(()=>{
                if(this.info){
                  console.log(this.info.data);
                   this.product = this.info.data;
                }
              })
      },
      getPorduct(){
         axios.get(`http://localhost:3001/product/all`)
              .then(response => (
                this.info = response
              ))
              .then(()=>{
                if(this.info){
                  console.log(this.info.data);
                   this.product = this.info.data;
                }
              })
      }
      
  },
  mounted () {
        this.getPorduct();

        axios.get(`http://localhost:3001/category/categorized-items`)
              .then(response => (
                this.info = response
              ))
              .then(()=>{
                if(this.info){
                  console.log(this.info.data);
                
                   this.category = this.info.data;
                 
                }
              })

  }
}
</script>



<style  scoped>

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
      width: 67vw;
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
    .card{
      text-align: center;
      color: rgb(0, 0, 0);
    }
    .title_card{
      font-size: 18px;
      color: rgb(0, 0, 0);
      text-align: center;
      font-weight: bold;
    }
    .list_price span{
      margin: 10px;
      font-size: 16px;
    }
    .card a{
      margin-top: 15px ;
    }
</style>

