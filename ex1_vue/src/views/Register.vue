<template>
  <div class="container">
      <div class="register">
            <div class="card" style="width: 30rem;"> 
              <span class="title">Register Here</span>
              <div class="input_info">
                <div class="mb-3">
                  <label  class="form-label"><b>Email</b></label>
                  <input type="text" class="form-control" id="user" placeholder="Enter email">
                </div>
                <div class="mb-3">
                  <label  class="form-label"><b>FirstName</b></label>
                  <input type="text" class="form-control" id="user" placeholder="Enter your FirstName">
                </div>
                <div class="mb-3">
                  <label  class="form-label"><b>LastName</b></label>
                  <input type="text" class="form-control" id="user" placeholder="Enter your LastName">
                </div>
                <div class="mb-3">
                  <label  class="form-label"><b>Username</b></label>
                  <input type="text" class="form-control" id="user" placeholder="Enter username">
                </div>
                <div class="mb-3">
                  <label  class="form-label"><b>Password</b></label>
                  <input type="password" class="form-control" id="password" placeholder="Enter password">
                </div>
              </div>
              <div class="button text-center">
                  <button type="button" id="register" class="btn btn-primary" style="margin: 0 2% 2% 2%;">Register</button>
              </div>
              
            </div>
      </div>
  </div>

</template>
<style scoped>
.title{
  font-size: 1.3em;
  font-weight: bold;
  border: solid 2px;
  background-color: green;
  color: white;
}
.register{
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