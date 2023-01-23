import React,{useState} from "react";
import './style.css';


export const Form = () => {
  const[store,setStore]=useState({
name:'',
department:'',
rating:''
  })
  const[out,setOut]=useState([])
  const change=(e)=>{
const name = e.target.name;
const value = e.target.value;
 console.log(name,value);
setStore({...store,[name]:[value]})}

const click = (e) =>{  
e.preventDefault();
setOut([...out,{...store,id:out.length}])
}
    return(
        <div>
 <h1>EMPLOYEE FEEDBACK FORM</h1>
    <form onSubmit={click}><br /><br />
      <label className="name">Name:
      <input className="box" type="text" name="name" value={store.name} onChange={change}/><br /><br />
      </label >
      <label className="name"> Department:
        <input className="box" type="text" name="department" value={store.department}  onChange={change}/><br /><br />
        </label >
        <label className="name">Rating:
      <input className="box" type="number" name="rating" value={store.rating}  onChange={change}/>
      </label><br /><br />
        <input className="submit" type="submit" />
    </form>
    <br /><br />
    <div className="mainbox">

       {out.map(ele=>(<h4>Name:{ele.name} || Department:{ele.department} || Rating:{ele.rating}</h4>))}
     
    </div>
        </div>




    )
}
