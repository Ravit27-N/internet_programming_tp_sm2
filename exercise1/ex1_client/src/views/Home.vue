<template>
 <div >
    <center>
        <div class="card col-9">
          <h5 class="card-header">HOME</h5>
          <div class="card-body">
            <img class="picture" src="../assets/go.png">
            <h5 class="card-title">Welcome to Home page</h5>
            <button @click="logout" class="btn btn-danger">Log Out</button>
          </div>
        </div>
    </center>

 </div>
</template>
<script>
import VueCookies from 'vue-cookies'
import axios from 'axios'

export default {
  data(){
    return{
      info:null,
    }
  },
  methods:{
    logout(){
      axios.get(`http://localhost:3001/api/logout`)
      .then(response => (
        this.info = response
      ))
      .then(()=>{
        if(this.info){
          console.log(this.info.data.msg);
          if(this.info.data.msg=='logout success'){
            VueCookies.remove('Token');
            location.href = '/';
          }else{
            alert("Log out false");
          }
        }
      })
    }
  },
  mounted () {
    var Token = VueCookies.get('Token');
    if(!Token){
       location.href = '/';
    }
  }
}
</script>

<style scoped>
.card{
  margin-top: 15px;
  border: solid 2px;
}
.picture{
  width: 10vw;
}
.card-title{
  font-weight: bold;
  color:chartreuse;
  margin-bottom: 25px;
}


</style>

