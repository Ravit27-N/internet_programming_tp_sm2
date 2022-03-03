<template>
  <div class="container">
    <center>
        <div class="register">
              <div class="card" style="width: 30rem;"> 
                <span class="title">Register Here</span>
                <div class="input_info">
                  <div class="mb-3">
                    <label  class="form-label"><b>Email</b></label>
                    <input type="text" class="form-control" placeholder="Enter email" v-model="email">
                  </div>
                  <div class="mb-3">
                    <label  class="form-label"><b>FirstName</b></label>
                    <input type="text" class="form-control" placeholder="Enter your FirstName" v-model="firstname">
                  </div>
                  <div class="mb-3">
                    <label  class="form-label"><b>LastName</b></label>
                    <input type="text" class="form-control"  placeholder="Enter your LastName" v-model="lastname">
                  </div>
                  <div class="mb-3">
                    <label  class="form-label"><b>Username</b></label>
                    <input type="text" class="form-control"  placeholder="Enter username" v-model="username">
                  </div>
                  <div class="mb-3">
                    <label  class="form-label"><b>Password</b></label>
                    <input type="password" class="form-control" id="password" placeholder="Enter password" v-model="password">
                  </div>
                </div>
                <div  class="message">
                    <div v-if="message" class="alert alert-danger" role="alert">
                        {{command}}
                    </div> 
                    <div v-if="message_success" class="alert alert-success" role="alert">
                        Register Success
                    </div> 
                </div>
                <div class="button text-center">
                    <button @click="writeUser" type="button" id="register" class="btn btn-primary" style="margin: 0 2% 2% 2%;">Register</button>
                </div>
                
              </div>
        </div>
      </center>
  </div>

</template>



<script>

import axios from 'axios'

export default {
  data(){
    return{
      email:"",
      username:"",
      password:"",
      firstname:"",
      lastname:"",
      message:false,
      message_success:false,
      command:"",
    }
  },
  methods:{
    writeUser(){
      axios.post(`http://localhost:3001/api/register?username=${this.username}&password=${this.password}&email=${this.email}&firstname=${this.firstname}&lastname=${this.lastname}`)
      .then(response => (
        this.info = response
      ))
      .then(()=>{
        if(this.info){
          console.log(this.info.data.message);
          if(this.info.data.message=='true'){
            this.message_success = true;
            location.href = '/';
          }else{
            this.message=true;
            this.command = this.info.data.command;
          }
        }
      })
    }
  },
}
</script>








<style scoped>

.register{
  width: 50%;
  height: auto;
}
.title{
  font-size: 1.3em;
  font-weight: bold;
  border: solid 2px;
  background-color: green;
  color: white;
}
.card{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); 
  border: 4px solid  rgba(0,0,0,0.4);
}

.input_info{
  margin: 3%;
  text-align: left;
}

</style>