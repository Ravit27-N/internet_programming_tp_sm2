<template>

      <div class="container">
          <div class="login">
            <div class="card" style="width: 30rem;"> 
              <center>
                <img class="profile" src="../assets/profile.png"> 
              </center>
              <div class="input_info">
                <div class="mb-3">
                  <label  class="form-label"><b>Username or Email</b></label>
                  <input type="text" class="form-control" id="username" placeholder="Enter email Or Username" v-model="username">
                </div>
                <div class="mb-3">
                  <label  class="form-label"><b>Password</b></label>
                  <input type="password" class="form-control" id="password" placeholder="Enter password" v-model="password">
                </div>
              </div>
              <div  class="message">
                 <div v-if="message_success" class="alert alert-success" role="alert">
                        Login Success
                    </div>
                   <div v-if="message_false" class="alert alert-danger" role="alert">
                      {{command}}
                  </div> 
              </div>
              <div class="button text-center">
                  <button @click="getData" type="button" id="login" class="btn btn-primary" style="margin: 0 2% 2% 2%;">Log in</button>
              </div>
              
            </div>
          </div>
      </div>

</template>
<script>
import axios from 'axios'

export default {
  data(){
    return{
      username:"",
      password:"",
      info:null,
      message_false:false,
      message_success:false,
      command:"",
    }
  },
  methods:{
    getData(){
      axios.post(`http://localhost:3001/api/login?username=${this.username}&password=${this.password}`)
      .then(response => (
        this.info = response
      ))
      .then(()=>{
        if(this.info){
          console.log(this.info.data.message);
          if(this.info.data.message=='true'){
            this.message_success = true;
            location.href = '/home';
          }else{
            this.message_false=true;
            this.command = this.info.data.command;
          }
        }
      })
    }
  },mounted () {

        
  }
}
</script>
<style scoped>

.login{
  width: 50%;
  height: auto;
  margin: auto;
}
.display{
  width: 50%;
  height: auto;
  margin: auto;
}
.card{
  margin:10%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); 
  border: 4px solid  rgba(0,0,0,0.4);
}
.profile{
  width: 50%;
  margin-top: 5%;
}
.input_info{
  margin: 3%;
  text-align: left;
}


</style>

