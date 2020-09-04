
//Exercise 1
function ownDivide(numerator,denominator) {
    if(denominator === 0) {
        throw "Attempted to divide by zero." ;
    }
    return numerator / denominator;
}

//console.log("Divide function result is  " + ownDivide(6,2));
//console.log(ownDivide(7,0));


//Exercise 2
function gradeLabs(labs) {
    for (let i =0; i < labs.length; i++) {
      let lab = labs[i];
      try{
       let result = lab.runLab(3);
      console.log(`${lab.student} code worked: ${result === 27}`);
      } catch(err){
        let result = "Error thrown";
        console.log(`${lab.student} code worked: ${result}`);
      }
    }
  }
  
  let studentLabs = [
    {
      student: 'Carly',
      runLab: function (num) {
          return Math.pow(num, num);
      }
    },
    {
      student: 'Erica',
      runLab: function (num) {
          return num * num;
      }
    }
  ];
  
  gradeLabs(studentLabs);
  
  let studentLabs2 = [
    {
       student: 'Blake',
       myCode: function (num) {
          return Math.pow(num, num);
       }
    },
    {
       student: 'Jessica',
       runLab: function (num) {
          return Math.pow(num, num);
       }
    },
    {
       student: 'Mya',
       runLab: function (num) {
          return num * num;
       }
    }
  ];
   
  gradeLabs(studentLabs2);
  
  //Exercise 3
  const user = {
    name: 'Angela',
    cart: [],
    purchases: [],
  };
  
  
  const addItemToCart = (item1) => {
    user.cart.push(item1);
  };
  
  const applyTaxToItems = (item1) => {
    for(let i = 0;i< user.cart.length;i++) {
     if(user.cart[i] === item1){
       user.cart[i].price *= 1.03;
     }
    } 
  };
  
  const buyItems = (item1) => {
    let index;
    for(let i = 0;i < user.cart.length;i++) {
      if(user.cart[i] === item1){
        user.purchases.push(item1);
        index = user.cart.indexOf(item1);
        user.cart.splice(index,1);
      }
     } 
  }
  
  const emptyCart = () => {
    for(let i = 0;i< user.cart.length;i++) {
      user.cart.pop(user.cart[i]);
     } 
  }
  
  const item = {
    id: 1,
   name: 'toy', 
   price: 100,
  };
  
  const short = {
    id: 2,
   name: 'clothes', 
   price: 300,
  };
  
  addItemToCart(item);
  addItemToCart(short);
  applyTaxToItems(item);
  applyTaxToItems(short);
  //buyItems(item);
  console.log(user);
  //emptyCart();