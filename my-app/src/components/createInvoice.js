import { Box,
    TextField,
    Button
    
 } from "@mui/material";


import { useState } from "react";

const CreateInvoive = ({setdata,pack,customerName,setCustomers,customers,invoices,setInvoices,customeruniqeId}) => {


    const [idInvoices,setIdInvoices] =useState(1)
    // const [idPackages,setIdPackages] =useState('')
    // const [customerId,setCustomerId] = useState(customeruniqeId)

    const [customername,setCustomer] = useState(customerName)
    const [weight,setWeight] = useState('')
    const [price,setPrice] = useState(1)
    // const [shippingOrder,setShippingOrder] = useState(1)
    
    



    const handelPackage =(e) => {
        e.preventDefault();
    
    
       
        let dataOfInvoices = [{
          name:customername,
          idInvoice:idInvoices,
          weight:weight,
          price:price,


        }]

      
        setInvoices({items: invoices.items.concat(dataOfInvoices)})

    localStorage.setItem('invoices', JSON.stringify(invoices))
    
      }
  
      
    return (
        <Box marginTop='120px'>
            <form onSubmit={handelPackage}>
  
  <TextField
        id="outlined-number"
        label="id_Invoice"
        type="number"
        value={idInvoices}
        onChange={e => setIdInvoices(e.target.value)}

        

        InputLabelProps={{
          shrink: true,
              }}
              sx={{marginTop:'10px',marginLeft:'10px'}}
            />


    <TextField
              disabled
              id="outlined-number"
              label="customer Name"
              type="text"
              value={customername}
              onChange={e => setCustomer(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{marginTop:'10px',marginLeft:'10px'}}
            />

    <TextField
              id="outlined-number"
              label="Weight"
              type="text"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{marginTop:'10px',marginLeft:'10px'}}
            />
     

    <TextField
              id="outlined-number"
              label="Price"
              type="number"
              value={price}
              onChange={e => setPrice(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{marginTop:'10px',marginLeft:'10px'}}
            />
     
             <Button variant='contained' type="submit"  sx={{marginTop:'10px'}}>
                Add
            </Button>
  </form>
        </Box>
    );
}
 
export default CreateInvoive;




