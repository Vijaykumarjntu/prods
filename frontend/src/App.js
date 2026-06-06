
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products,setProducts] = useState([])
  
  useEffect(()=>{
    const fetchProducts = async()=>{
      const res = await axios.get('http://localhost:5000/api/products')
      console.log(res.data);
      setProducts(res.data);
    }
    fetchProducts()
  },[])

  return (
    <div className="App">
      {products.map(x => (
        <div className='prod-item'>
          <h2>{x.title}</h2>
          <p>{x.description}</p>
          <p>{x.price}</p>
          <p>{x.category}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
