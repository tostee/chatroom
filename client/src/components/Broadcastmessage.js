
const BroadcastMessage = ({message}) => {
    return(
        <div class="chat-message">
         <div class="flex items-end justify-center">
        <div class="flex flex-col justify-end space-y-3 text-xs max-w-xs mx-2 order-2 items-end">
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-100 text-blue-700 ">{message}</span></div>
            </div>
            </div>
            </div>
    )
}

export default BroadcastMessage



