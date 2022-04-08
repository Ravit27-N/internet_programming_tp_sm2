<template>
  <div class="container">

    <div class="sidenav" >
      <div class="hreader_sidebar text-center">SHOP</div>
      <div >
          <a href="#about" @click="category_click"> Category</a>
          <a href="#new"   @click="subcategory_click">Subcategory</a>
          <a href="#asd"   @click="product_click" >Product</a>
      </div>
     
    </div>
    
     
    <div class="category">
        <div class="title">
          <h1>WELCOME TO ADMIN DASH BOARD</h1>
        </div>
      
        <div class="data" v-show="display_category">

          <div class="button_add">
            <button type="button" class="btn btn-primary" @click="create_cat">CREATE CATEGORY</button>
          </div>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Category Title</th>
                <th scope="col"> </th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Edit Delete</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Edit Delete</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div class="data" v-show="display_subcategory">
          <div class="button_add">
            <button type="button" class="btn btn-primary" @click="create_sub">CREATE SUBCATEGORY</button>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Category</th>
                <th scope="col">Subcategory</th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>Edit Delete</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>Edit Delete</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div class="data" v-show="display_product">
          <div class="button_add">
            <button type="button" class="btn btn-primary" @click="create_pro">CREATE PRODUCT</button>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Subcategory</th>
                <th scope="col">Product Name</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>Edit Delete</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>Edit Delete</td>
              </tr>
            </tbody>
          </table>
        </div>



    </div> 




        <div class="popup " v-show="popup_category==true">
          
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label" style="color: white;" >Name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Phone, Computer ....">
          </div>
          <div style="width:100%" class="text-center  group_button">
              <button type="button" class="btn btn-outline-success text-center" style="color: white;border: solid white;" @click="submit_cat">SUBMIT</button>
               <button type="button" class="btn btn-outline-danger text-center" style="color: black;border: solid white;" @click="cancel_cat">CANCEL</button>
          </div>
          
        </div>

        <div class="popup" v-show="popup_subcategory==true">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label" style="color: white;" >Subcategory Title</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Iphone,Samsung....">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label" style="color: white;" >Category</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Phone, Computer ....">
          </div>
          <div style="width:100%" class="text-center group_button">
              <button type="button" class="btn btn-outline-success text-center" style="color: white;border: solid white;" @click="submit_sub">SUBMIT</button>
               <button type="button" class="btn btn-outline-danger text-center" style="color: black;border: solid white;" @click="cancel_sub">CANCEL</button>
          </div>
         
        </div>

        <div class="popup" v-show="popup_product==true">
          
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label" style="color: white;" >Product Name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Iphone11, Iphone12 ....">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label" style="color: white;" >SubCategory Name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Iphone, Samsung ....">
          </div>
          <div style="width:100%" class="text-center  group_button">
            <button type="button" class="btn btn-outline-success text-center" style="color: white;border: solid white;" @click="submit_pro">SUBMIT</button>
             <button type="button" class="btn btn-outline-danger text-center" style="color: black;border: solid white;" @click="cancel_pro">CANCEL</button>
          </div>
        </div> 






  </div> 
  

</template>


<script>



export default {

  data(){
    return{
     display_category:true,
     display_subcategory:false,
     display_product:false,
     popup_category:false,
     popup_subcategory:false,
     popup_product:false,
    }
  },
  methods:{
    category_click(){
       
      //show 
        this.display_category=true;
      
      //close data table 
        this.display_subcategory=false;
        this.display_product=false;
      //Close popup from another
        this.popup_subcategory=false;
         this.popup_product=false;
       
        
        
    },
    subcategory_click(){
         
        this.display_subcategory=true;
      //close data table 
        this.display_category=false;
        this.display_product=false;
      //Close popup from another
        this.popup_category=false;
         this.popup_product=false;

       
    },
    product_click(){
         
        this.display_product=true;

        this.display_category=false;
        this.display_subcategory=false;

        //Close popup from another
        this.popup_category=false;
         this.popup_subcategory=false;
        
    },
    create_cat(){
        this.popup_category=true;
    },
    submit_cat(){
        this.popup_category=false;
    },
    cancel_cat(){
      this.popup_category=false;
    },

    create_sub(){
        this.popup_subcategory=true;
    },
    submit_sub(){
        this.popup_subcategory=false;
    },
    cancel_sub(){
      this.popup_subcategory=false;
    },
    
    create_pro(){
        this.popup_product=true;
    },
    submit_pro(){
        this.popup_product=false;
    },
    cancel_pro(){
      this.popup_product=false;
    },
      
  },
  mounted () {
    
       

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
    width: 180px;
    /* background-color: ; */
    overflow-x: hidden;
    padding-top: 10px;
    border: 2px solid;
    margin-right: 15px ;
    
  }

    .sidenav a {
      padding: 6px 8px 6px 16px;
      text-decoration: none;
      font-size: 18px;
      color: black;
      display: block;
      font-weight: bold;
      color:coral;
      margin-top: 10px ;
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
      width: 140px;
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

    .category .title{
      display: flex;
      margin-bottom: 2vh;
    }
    .category h1{
      background-color: coral;
      width: 40vw;
      font: 1.8em sans-serif;
      text-align: center;
      color: white;
      border-radius: 15px 0px 15px 0px;
  
    }
    .category .button_add{
      width: 15vw;
      margin-bottom: 15px;
    }

    .popup{
     
      position: absolute;
      top: 25%;
      left: 25%;
      border: solid 2px white;
      border-radius: 20px;
      background-color:  coral;
      width: 50vw;
      padding: 40px;
      text-align: left;
      
    }

    .popup  .group_button{
      margin-top: 50px ;
    }


</style>