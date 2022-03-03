const fs =require("fs");
const path = require("path");

const readUser = ()=>{
  let rawdata = fs.readFileSync(path.join(process.cwd(),'db/user.json'),'utf8');
  if(!rawdata){
    return [];
  }else{
    return JSON.parse(rawdata);
  }
}
const writeUSer = async (data)=>{
  if(data){
    fs.writeFileSync(path.join(process.cwd(),'db/user.json'),JSON.stringify(data),'utf8');
  }
}
module.exports = {
  readUser,
  writeUSer,
}