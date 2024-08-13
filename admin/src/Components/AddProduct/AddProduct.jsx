import React, { useState } from 'react';
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {

    const [image, setImage] = useState(null);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "Lainnya", // Memastikan nilai default sesuai dengan salah satu dari opsi yang ada.
        new_price: "", // Jangan tentukan nilai default yang tidak masuk akal seperti "Laki".
        old_price: "",
    })

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
        setProductDetails({...productDetails, image: e.target.files[0]}); // Simpan file di dalam state.
    }

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setProductDetails({...productDetails, [name]: value});
    }

    const Add_product = async () => {
        console.log(productDetails); // Anda bisa mengirimkan langsung data ke backend atau melakukan tugas lainnya di sini.
        let responData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product',image);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                accept:'application/json',
            },
            body:formData,
        }).then((resp) => resp.json()).then((data)=>{responData=data});

        if (responData.success) 
        {
            product.image = responData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'content-type':'application/json',
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product Added"):alert("Failed")
            })
        }
    }

    return (
        <div className='add-product'>
            <div className="addproduct-itemfield">
                <p>Product Title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder='Type here' />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Type here' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Type here' />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                    <option value="Laki">Laki</option>
                    <option value="Perempuan">Perempuan</option>
                    <option value="Lainnya">Lainnya</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumnail-img' alt="" />
                </label>
                <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
            </div>
            <button onClick={Add_product} className='addproduct-btn'>ADD</button>
        </div>
    );
};

export default AddProduct;
