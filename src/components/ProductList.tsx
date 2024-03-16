import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductModel } from "../models/ProductModel";
import { json } from "stream/consumers";
import getAllProductsAPI from "../services/ProductAPIService";
import SingleProduct from "./SingleProduct";
import DeleteProduct from "./DeleteProduct";
// import DeleteProduct from "./DeleteProduct";


const apiBaseUrl : string = "http://localhost:9003/"

export function ProductList(){
    const [allProducts, setAllProducts] = useState<ProductModel[]>([])

    useEffect (() =>{
        getAllProductsAPI()
        .then(response =>{return response.json()})
        .then(json => {
            setAllProducts(json);
        console.log(allProducts);
    });
    
}, []);

/*new code */

useEffect(() => {
    const deletedProductIds = JSON.parse(localStorage.getItem('deletedProductIds') || '[]');
    const filteredProducts = allProducts.filter(product => !deletedProductIds.includes(product.loomId));
    if(filteredProducts.length !== allProducts.length){
        setAllProducts(filteredProducts);
        }
    }, [allProducts]);


    const handleDeleteProduct = async (loomId: number| undefined) => {
        if(typeof loomId !== 'undefined'){
            try{
                await fetch(`${apiBaseUrl}loomband\\${loomId}`,{
                    method:'DELETE',
                    headers: {
                        'Content-Type':'application/json',},});
                
                setAllProducts(prevProduct => prevProduct.filter(product => product.loomId !== (loomId)));
                const deletedProductIds = JSON.parse(localStorage.getItem('deletedProductIds') || '[]');
                localStorage.setItem('deletedProductIds', JSON.stringify([...deletedProductIds, loomId]));
            } catch(error){
                console.log("Error deleteing product:", error); 
            }
    }else{
        console.log("Invalid productId: ", loomId);
    }
    }; 

/*new code ends*/


return (
    <>
    <h1> Product List: </h1>
    {allProducts.length > 0? (
        <ul className="no-bullets">
            {allProducts.map((product , index) => (
                <li key={index}>
                    <div className="product-info">
                    <span className="product-property"> Product Id: </span>
                    <span className="product-value"> {product.loomId} </span>
                    <span className="product-item"> </span>
                    <span className="product-property"> Product Name: </span>
                    <span className="product-value"> {product.loomName} </span>
                    <span className="product-item"> </span>
                    <span className="product-property"> Product Price: </span>
                    <span className="product-value"> {product.loomPrice} </span>
                    <span className="product-item"> </span>
                    <span className="product-property"> Product Seller Name: </span>
                    <span className="product-value"> {product.loomSellerName} </span>
                    </div>
                    { <DeleteProduct onDelete={()=>handleDeleteProduct(product.loomId)}/> }
                </li>
            )  
            )}
    
    
        </ul>
    ) : (
        <span>Loading...</span>
    )}
    </>
    ) ; }
    


      