import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons"

interface DeleteProductProps{
    onDelete:() =>void;
}

const DeleteProduct:React.FC<DeleteProductProps>=({onDelete}) =>
{
    
       return (
        <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={onDelete}/>
       
    );
};

export default DeleteProduct;

/*
import React, { useState } from 'react';

export function DeleteProduct() {
  const [loomId, setLoomId] = useState('');

  return (
 
    <div className="input-container">
      <h1>Delete Product</h1>
      
      <input
        type="number"
        placeholder="Enter Product ID"
        value={loomId}
        onChange={(e) => setLoomId(parseInt(e.target.value))}
      />
    </div>
  );
}

export default DeleteProduct;
*/
/*import { error } from 'console';
import React, {useState} from 'react';
import { deleteProductAPI } from '../services/ProductAPIService';

export function DeleteProduct(){


const [loomId, setLoomId] = useState<number>(0);


async function handleDelete(){
    try{
       const response = await deleteProductAPI(loomId);


        if(response.ok){
console.log("Deleted product successfully");
window.location.reload();
        }
        else{
            console.error('Error:', error);
        };
    }  
    catch(error){
        console.error('Error:', error);
    }
    
}
return(
   

    <div>
    <h1>Delete Product</h1>
    <input type='number'
    placeholder='Enter Product ID'
    value= 'loomId'
    onChange={(e) => setLoomId(parseInt(e.target.value))}
     />
     </div>


);


}


   
export default DeleteProduct;

*/


// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";

// interface DeleteProductProps {
//     onDelete: () => void;
//     }


// const DeleteProduct: React.FC<DeleteProductProps> =({onDelete}) =>
// {
//     return (
//         <FontAwesomeIcon icon = {faTrash} className = "delete-icon" onClick={onDelete}/>

//     );
// };

// export default DeleteProduct;

// ===============

/*import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface DeleteProductProps {
onDelete: () => void;
}

const DeleteProduct: React.FC<DeleteProductProps> = ({ onDelete }) => {
return (
<FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={onDelete} />
);
}

export default DeleteProduct;
8?

// import React from 'react';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core'; // Assuming you're using Font Awesome icons

// interface DeleteProductProps {
//   onDelete: () => void; // Adjust the type as needed
// }

// const MyComponent: React.FC<DeleteProductProps> = ({ onDelete }) => {
//   // Your component logic here
//   // Example usage of the icon:
//   const trashIcon: IconDefinition = /* Your icon definition */;
  
//   return (
//     <div>
//       {/* Render your component content */}
//       <button onClick={onDelete}>
//         <i className="fa-trash" /> {/* Use the appropriate class for your trash icon */}
//       </button>
//     </div>
//   );
// };

// export default MyComponent;
