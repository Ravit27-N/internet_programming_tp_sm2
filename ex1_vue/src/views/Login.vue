<template>

      <div class="container">
          <div class="login">
            <div class="card" style="width: 30rem;"> 
              <center>
                <img class="profile" src="../assets/profile.png"> 
              </center>
              <div class="input_info">
                <div class="mb-3">
                  <label  class="form-label"><b>Username</b></label>
                  <input type="text" class="form-control" id="user" placeholder="Enter email">
                </div>
                <div class="mb-3">
                  <label  class="form-label"><b>Password</b></label>
                  <input type="password" class="form-control" id="password" placeholder="Enter password">
                </div>
              </div>
              <div class="button text-center">
                  <button type="button" id="login" class="btn btn-primary" style="margin: 0 2% 2% 2%;">Log in</button>
              </div>
              
            </div>
          </div>
      </div>

</template>

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

