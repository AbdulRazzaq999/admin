import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backend_url } from '../App';

const List = () => {
  
  const [list,setList] = useState([]);
  const fetchdata = async ()=>{
    try
    {
    const response = await axios.get(backend_url+"/api/product/list")
    setList(response.data.products)
    console.log(list);
    } catch(error)
    {
      console.log(error);
      
    }
   
  }


  useEffect(()=>{
    fetchdata();
  },[])


  return (
    <div>
      {
        list.map((item,index)=>{
          return(
            <>
            <div key={index}>
              <img src={item.image[0]} alt="" />
              <p>{item.name}</p>
            </div>
            </>
          )
        })
      }
    </div>
  )
}

export default List
