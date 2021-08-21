import React, { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
const biodata=['Fahim','Rahim','Karim'];
const address=['Naogaon','Mohadebpur','Rajshahi'];
const nayoks =['Razzak','Hadi','Lotfor','Babu','Sajib','Saju','Raihan'];
  const Products = [
   { name: 'Photoshop' , price: '$60.00'},
   { name: 'Illustrator' , price: '$100.00'},
   { name: 'PDf Converter' , price: '$40.50'}
  ] 
  return (
    <div className="App">
      <header className="App-header">
        <p>I am React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }

          {
            Products.map(product => <li>{product.name}</li>)
          }

        </ul>

          {
            Products.map(pd =><Product name={pd.name} price={pd.price} > </Product>)
          }
  
        {/* <Product name={Products[0].name} price={Products[0].price}></Product>
        <Product name={Products[1].name} price={Products[1].price}></Product>
        <Product name={Products[2].name} price={Products[2].price}></Product> */}

        

       
        <Person Name={biodata[0]} Information={address[0]} ></Person>
        <Person Name={biodata[1]} Information={address[1]}></Person>
        <Person Name={biodata[2]} Information={address[2]}></Person> 
      </header>
    </div>
  );
}

function Product (props) {
  const productStyle={
    border: '1px solid gold',
    height: '300px',
    width:  '300px',
    backgroundColor: ' gray',
    borderRadius: '5px',
    margin:'10px',
    float:'left'
  }

  

  return (
    <div style={productStyle}>

      <h2>Name:{props.name}</h2>
      <p>price:{props.price}</p>
      <button>buy now</button>
    
    </div>
  )


}

  //Dynamic API Call from jasonPlaceholder 
function Users (){
   const [users , setUsers ] = useState([]);

   useEffect (()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => setUsers(data));
   }, []) 



   return (
     <div>
       <h3>Dynamic User:{users.length}</h3>
       <ul>
         {
           users.map(user => <li> name: {user.name} Email: {user.email} Id: {user.id} </li>)
         }
       </ul>
     </div>
   )
}


function Person(props){
  const personStyle={
    border:'1px solid gold',
    margin:'5px',
    padding:'20px'
  }
  return(
     <div style={personStyle}>
       <h1>Name:{props.Name}</h1>
       <p>Address:{props.Information}</p>

     </div>
  )
}

function Counter () {
  const [count,setCount] = useState(10);
  // const handleIncrease = () => setCount = (count + 1 ); 
 
  return(
   
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count-1)}>Decrease</button>
      <button onClick={() => setCount(count+1)}>Increase</button>
    

    </div>
  )
}

export default App;
