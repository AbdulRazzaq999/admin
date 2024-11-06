import { useState } from "react"
import { assets } from "../assets/assets"
import axios from "axios"
import { backend_url } from "../App"


const Add = () => {
  const [image1,setImage1] =useState(false)
  const [image2,setImage2] =useState(false)
  const [image3,setImage3] =useState(false)
  const [image4,setImage4] =useState(false)

  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [price,setPrice] = useState('')
  const [sizes,setSizes] = useState([])
  const [bestSeller,setBestSeller] = useState(false)
  const [category, setCategory] = useState('Men')
  const [subCategory,setSubCategroy] = useState('Topwear')
  
const SubmitHandler = async(e)=>{
  e.preventDefault()
  
  

  const formdata = new FormData()
  formdata.append("name",name)
  formdata.append("description",description),
  formdata.append("category",category),
  formdata.append("subCategory",subCategory),
  formdata.append("price",price),
  formdata.append("sizes",JSON.stringify(sizes))
  formdata.append("bestseller",bestSeller)

  image1 && formdata.append("image1",image1)
  image2 && formdata.append("image2",image2)
  image3 && formdata.append("image3",image3)
  image4 && formdata.append("image4",image4)
  
  console.log({category,subCategory,price});
  

  
  const response = await axios.post(backend_url+"/api/product/add",formdata)
if(response.data.success)
{
  console.log("product added");
  
}


  
  
  
  
}

  return (
    <form onSubmit={SubmitHandler}>
      <div className="mt-3 ml-3">
        <p className="text-base font-medium text-center">Upload Product</p>
        <div className="flex gap-2 mt-3">
          <label htmlFor="image1">
            <img className="w-20" src={!image1 ? assets.upload_area :URL.createObjectURL(image1)}  alt="" />
            <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className="w-20" src={!image2 ? assets.upload_area:URL.createObjectURL(image2)} alt="" />
            <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img className="w-20" src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img className="w-20" src={ !image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden />
          </label>
        </div>
      </div>
      <div className="mb-2 mt-3">
        <p>Product Name</p>
        <input onChange={(e)=>setName(e.target.value)} className="w-full border border-purple-400" type="text"name="name" value={name} />
      </div>
      <div className="mb-2 mt-3">
        <p>Product Description</p>
        <input onChange={(e)=>setDescription(e.target.value)} className="w-full border border-purple-400" type="text"name="description" />
      </div>
    <div className="flex gap-2">
      <div>
        <p className="mb-3">Product Category</p>
        <select onChange={(e)=>setCategory(e.target.value)}>
          <option selected value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
      </div>

      <div>
        <p className="mb-3">Product Sub Category</p>
        <select onChange={(e)=>setSubCategroy(e.target.value)}>
          <option  value="Topwear">Topwear</option>
          <option value="Bottomwear">Bottomwear</option>
          <option value="WinterWear">Winterwear</option>
        </select>
      </div>
      <div>
        <p>Price</p>
        <input onChange={(e)=>setPrice(e.target.value)} className="border border-purple-400" type="number" />
      </div>
    </div>
    <div className="mt-3">
      <p>Product Sizes</p>
      <div className="flex gap-3">
        <div className="cursor-pointer p-1" onClick={()=>setSizes(prev=>prev.includes("S") ? prev.filter(item=>item !=="S"):[...prev,"S"])}>
          <p>S</p>
        </div>
        <div onClick={()=>setSizes(prev=>prev.includes("M") ? prev.filter(item=>item !=="M"):[...prev,"M"])}>
          <p>M</p>
        </div>
        <div onClick={()=>setSizes(prev=>prev.includes("L")? prev.filter(item=>item !=="L"):[...prev,"L"],)}>
          <p>L</p>
        </div>
        <div onClick={()=>setSizes(prev=>prev.includes("XL") ? prev.filter(item=>item !=="XL"):[...prev,"XL"],)}>
          <p>XL</p>
        </div>
      </div>

    </div>
    
    <div className="mt-5">
      <input onChange={()=>setBestSeller(prev => !prev) } checked={bestSeller} type="checkbox" id="bestseller" />
      <p>Add to best Seller</p>
    </div>
    
    <button className="bg-black text-white w-28 mt-5 py-3">Add</button>

    </form>
  )
}

export default Add
