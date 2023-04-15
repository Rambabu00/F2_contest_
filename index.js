/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    console.log(" It shows all the employes which have the profession of developer using map");
    arr.map((obj,idx)=>{
        if(obj.profession=="developer"){
            console.log(obj.id,obj.name, obj.age, obj.profession);
            //console.log(arr[idx]);
        }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    console.log(" it shows all the employes which have the profession of developer using forEach");
    arr.forEach((obj,idx)=>{
        if(obj.profession=="developer"){
            console.log(arr[idx]);
        }  
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    let obj={
    id:4,
    name:"Susan",
    age:"20",
    profession:"intern"

    }
    arr.push(obj);
    console.log("add new data object to the Array");
    console.log(" Now Array length is "+arr.length);
     arr.map((obje,ind)=>{
 
        console.log(arr[ind]);
     })
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    console.log("it removes all the employes which have the profession of admin and return the remaing elements in the Array");
    arr.map((obj,ind)=>{
        if(obj.profession=="admin"){
            arr.splice(ind,1);
        }
     
    })
    arr.map((obj,ind)=>{
        console.log(arr[ind]);
    })
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    console.log("it shows Arrays concatenation")
     let arr1=[];
     let obj1={
        id:5,
        name:"Ramesh",
        age:"21",
        profession:"fresher"
     }
     arr1.push(obj1);
     let obj2={
        id:6,
        name:"Ram",
        age:"22",
        profession:"junior developer"
     }
     arr1.push(obj2);
     let obj3={
        id:7,
        name:"Siva prasad",
        age:"23",
        profession:"senior developer"
     }
     arr1.push(obj3);
     arr= arr.concat(arr1);
     arr.map((obj,ind)=>{
        console.log(arr[ind])
     })
  }
  