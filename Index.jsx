import React from 'react'
import { useState } from 'react'
const Index = () => {
    
        const [head, setHead] = useState("")
         const [desc, setdesc] = useState("")
         const [cards, setcards] = useState([]) 
       
         
         function del(index){
        const task=[...cards]
        task.splice(index, 1)
    
        setcards(task)
    
    }
  return (
   <>
    <div className="box grid grid-cols-2">
      <form onSubmit={(e)=>{
        e.preventDefault()
        let card={
          title:head,
          description:desc
        }
        setcards([...cards,card])

         setHead("")
         setdesc("")

        
        console.log({head})
        console.log({desc})  
      }} className='form  flex flex-col m-4 p-4  '>
        <h1 className='text-white text-center text-2xl font-bold'>Notes</h1>
        <textarea name="head" id=""
        
         placeholder='Heading' 
        className='border-2 border-white text-white my-3 rounded pl-2 pt-2'
        value={head}
        onChange={(e)=>{
           setHead(e.target.value)
           
        }}></textarea>
        <textarea name="desc" id="" 
        placeholder='Description'
        className='border-2  border-white text-white h-40 my-3   rounded pl-2 pt-2'
        value={desc}
        onChange={(e)=>{
           setdesc(e.target.value)
          
        }}
        ></textarea>
        <button 
        className='border-2 border-white text-black  font-bold h-12 w-full bg-white my-3 rounded '>Add</button>
      </form>
       
       <div className="container2 p-3 pt-5 flex flex-wrap">
        {cards.map((card,index)=>{
          return(
           <div  key={index} 
           className="card  flex flex-col jusitify-center justify-evenly overflow h-55 w-48 rounded-xl m-3 p-2 border-2 border-white bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTti0saMUblzIjPONad9vGOuFK8Wvk1J-lreVQywZxREQ&s')] bg-cover bg-center bg-no-repeat">
          <h1 className='text-black w-full h-12 px-3 font-bold '>{card.title}</h1>
          <p className='text-black w-full h-18 px-3  '>{card.description}</p>
          <button className=' ml-11 mb-5 h-8 w-22 border-none bg-emerald-200 rounded-2xl'
         onClick={()=>{
          del(index)
         }} >Delete</button>
        </div>
        
        )})}
        

       </div>
      
    </div>
  
    </>
  )
}

export default Index