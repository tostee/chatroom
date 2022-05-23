import { useEffect } from "react"
import Mymodal from "./Mymodal"
import socket from "./Socket"


const Form = ({errormessage, onChange, onSubmit, user, id, onClick}) =>{
        let color = ""
        if(errormessage.color ==="")
        {
          color = "gray-700"
        }
        else{
          color = errormessage.color+"-500"
          console.log(color)
        }
    
        return (
       
        <form id={id} className="sm:mx-16 md:mx-60 lg:mx-[450px] w-full max-w-sm bg-white  rounded-md" onSubmit={onSubmit}>
  <div class="flex flex-col border-b border-teal-500 py-2">
      <div className="border-b-2 border-gray-200 pb-1">
    <input  className={`appearance-none bg-transparent w-4/5 border-2 ml-1 text-${color} mr-3 py-1 px-2 leading-tight focus:outline-none required:border-red-500`} type="text" placeholder="Chat Nickname" title={errormessage.errormessage} onChange={onChange} aria-label="Full name"/>
    <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-base border-4 text-white py-1 px-2 rounded mr-1" >
      Join
    </button>
    </div>
    <div className="">
    
<div class="flex items-center justify-center bg-gray-100 bg-opacity-5 mt-2">
   
    <Mymodal onClick = {onClick} user = {user}/>
</div>

</div>
  </div>
  
</form>
    )
}

export default Form