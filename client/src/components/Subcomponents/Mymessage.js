const Mymessage = ({message, avatar}) =>{
return (
    <div className="">
         <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs mx-2 order-1 items-end  max-w-xs">
               <div ><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">{message}</span></div>
            </div>
            <img src={`/assets/images/avatars/${avatar}.png`} alt="My profile" className="w-6 h-6 rounded-full order-2"/>
         </div>
      </div>
)
}
export default Mymessage