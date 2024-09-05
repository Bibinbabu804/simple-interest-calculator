
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {


//HOLD  Amount year,rate interest that are given by user

  const [amount,setamount]=useState(0)
  
  const [year,setyear]=useState(0)
  
  const [rate,setrate]=useState(0)
  

  //AFTER CALCULATION
  const [interest,setinterest]=useState(0)


  console.log(amount,year,rate); 

  const handleinterest=()=>{

    const output=amount*year*rate/100
    setinterest(output)

  }
const handlereset=()=>{
  setamount('')
  setrate('') 
  setyear('')
  setinterest(0)
}
  
  return (
    <>
    <center>
      <div className="row">
        <div className="col-2">


        </div>
        <div className="col-8">

        <div className='container border border-black rounded m-5 p-5 w-50   ' style={{backgroundColor: 'beige'}}>
      <h3 className='text-center' style={{backgroundColor: 'beige'}}>SIMPLE INTEREST CALCULATOR</h3>
      <p className='text-dark'  style={{backgroundColor: 'beige'}}>CALCULATE YOUR SIMPLE INTEREST WITH US ❤️</p>

      <div className='bg-light border border-light rounded p-3 shadow '>

  <h1>&#8377;{interest}</h1>
<p>YOUR TOTAL INTEREST</p>

      </div>

<div  className='my-3  '>
  {/* inppput */}

  <TextField onChange={e=>setamount(e.target.value)} value={amount} style={{width:"400px"}} id="outlined-basic" label="Amount" variant="outlined" />
  <TextField onChange={e=>setyear(e.target.value)} value={year} className='my-3' style={{width:"400px"}} id="outlined-basic" label="Year" variant="outlined" />
  <TextField onChange={e=>setrate(e.target.value)} value={rate}  style={{width:"400px"}} id="outlined-basic" label="Interest" variant="outlined" />
</div>

<div className='d-flex justify-content-evenly'>
  {/* button? */}


  <Button onClick={handleinterest} variant="contained" color='success'>Calculate</Button>
  <Button onClick={handlereset}  variant="outlined" >Reset</Button>

  
</div>


    </div>
        </div>
        <div className="col-2">

        </div>

   
    </div>
    </center>
    </>
  )
}

export default App
