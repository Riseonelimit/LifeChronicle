import { useState } from 'react'
import { useUser, useUserDispatch } from '../hooks/customHook.js'
import { Form, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AiOutlineDelete } from "react-icons/ai";

// import meme from '/src/assets/meme.png'
import { addNote } from '../api/POST.js';
import { USER } from '../reducer/userReducer.js';
import RemainingTime from '../components/RemainingTime.jsx';

const AddNote = () => {

  const user = useUser();
  const userDispatcher = useUserDispatch();
  
  const navigate = useNavigate()
  const [noteData,setNoteData] = useState({
    title:"",
    content:""
  })

  const [imageContainer,setImageContainer] = useState([]);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
  });

  const imageSubmitHandler = async  (e)=>{
    
    const files = e.target.files;
    
    const images = await Promise.all(
      [...files].map((element)=>{
        return getBase64(element);
      })
    ) 

    setImageContainer([...imageContainer,...images]) 
  }

  const handleCompleteDay = async(e)=>{
    e.preventDefault()


    const payload = {
      user:user,
      note:noteData,
      media:{
        media_1:imageContainer[0]?imageContainer[0]:null,
        media_2:imageContainer[1]?imageContainer[1]:null,
        media_3:imageContainer[2]?imageContainer[2]:null,
        media_4:imageContainer[3]?imageContainer[3]:null,
      }
    }
    console.log(payload);
    const res = await addNote(payload,localStorage.getItem("token"));

    if(res){
      console.log(res);
      userDispatcher({type:USER.UPDATE_FIELD,payload:res})
      navigate('/explore',{replace:true})
      
    }

    console.log(res);
  }
  
  return (
    <section className='relative w-full grid grid-cols-5 gap-5 h-[90vh]'>     
      {user.current_day > user.completed_days ? 
          <>
          <div className=' col-span-1 w-full h-full  flex-box flex-col justify-start  gap-5'>
            <h1 className=" text-md md:text-4xl  pb-3 lg:text-8xl  font-[300] inter bg-gradient-to-tl dark:from-red-800 dark:to-rose-500  from-orange-400 to-rose-500 text-transparent bg-clip-text  ">
              <span className='text-5xl '>Write About</span> <br />Day {user.current_day}
            </h1>

            <div className=' mt-5 flex-box '>
              <div className=' relative border-2 border-black dark:border-white border-dashed rounded-2xl w-3/4 h-[7rem]'>
                <input type='file' multiple  onChange={(e)=>{imageSubmitHandler(e)}} className='w-full h-full opacity-0 border-2   rounded-2xl font-semibold'/>
                <h1 className=' -z-10 absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]'>Add Image</h1>
              </div>
            </div>
            <div className=' mt-5 w-full grid  col-span-1 h-[420px] gap-10 overflow-y-scroll no-scrollbar '>
              {
                

                imageContainer.length > 0 ? 
                imageContainer.map((image)=>{
                  return (
                    <div key={image} className=' flex-box'>
                          <div className=" w-[75%] h-[10rem] relative overflow-hidden col-span-1 group rounded-2xl">
                            <button onClick={()=> setImageContainer([...imageContainer.filter((img)=> img != image )])} className=' py-2 font-semibold px-2 bg-red-600 absolute rounded-md left-2 top-2 invisible group-hover:visible'><AiOutlineDelete className=' text-2xl fill-white'/></button>
                              <img
                                  src={`${image}`}
                                  alt="image"
                                  className=" w-full h-full  object-cover "
                              />
                          </div>
                      </div>
                  );
                }) : <h1 className=' text-center '>No Images Selected</h1>
              }
            </div>
          </div>



          <div className=' col-span-4 h-full w-full flex-box flex-col items-center justify-start'>
            <Form className=' mt-10 w-3/4 h-full flex-box flex-col justify-start gap-5 '>
              <input type="text" value={noteData.title} onChange={e=>setNoteData({...noteData,title:e.target.value})} placeholder='Title' className=' w-full bg-transparent outline-none text-5xl placeholder:text-zinc-600 dark:text-white'/>
              <div className=' w-full h-[60%] flex'>
              <ReactQuill theme='snow' value={noteData.content} id="content" onChange={(e)=>setNoteData({...noteData,content:e})} className='w-full h-full [&_.ql-toolbar]:bg-white  ' />
              </div>

              {noteData.content}
              {noteData.title}
              <button onClick={e=>handleCompleteDay(e)} className=' mt-14 p-3 bg-gradient-to-tl dark:from-red-600 dark:to-orange-400  from-yellow-400 to-orange-400  rounded-2xl font-semibold'>Complete Day</button>
            </Form>
          </div>
          </>
          :
          <div className=' col-span-5 h-full flex-box flex-col gap-4'>
            <h1 className=' text-4xl font-semibold'>You Have Completed Todays Day</h1>
            <h1 className=' font-semibold'>Time Until Next Day</h1>
            {new Date(user.day_timer).toLocaleString()}
            <RemainingTime/>
          </div>
        }   
    </section>
    )
  }
  
  export default AddNote