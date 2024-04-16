import React, { useState } from 'react'

const App = () => {
  const[tasks,settasks]=useState([]);
  const [title,settitle]=useState("");  

  const submithandler=(e)=>{
    e.preventDefault();
    settasks([...tasks,{title:title,completed:false }]);
    settitle("");
  }
  const DeleteHandler = (i) => {
    const copyTasks = [...tasks];

    let isValid = false;
    if (!copyTasks[i].completed) {
        isValid = confirm("Do you really Want to delete this Task ?");
    }

    if ( isValid || copyTasks[i].completed) {
        copyTasks.splice(i, 1);
        settasks(copyTasks);
    }

    // settasks(tasks.filter((task,index) => index !== i))
};

  const CompleteTaskToggle = (i) => {
    const copyTasks = [...tasks];
    copyTasks[i].completed = !tasks[i].completed;
    settasks(copyTasks);
};
 
   let taskrender=(
   < h1 className="text-orange-500 font-extrabold text-2xl">NO PENDING TASK...</h1>
   );

  
   if(tasks.length>0){
    taskrender = tasks.map((task, index) => {
      return (
          <li
              key={index}
              className="mt-4 h-[8vh] w-[25vw] flex justify-between items-center border rounded-xl p-5"
          >
              <div className="flex items-center">
                  <div
                      onClick={() => CompleteTaskToggle(index)}
                      className={`${
                          task.completed ? "bg-green-500" : "border"
                      } mr-4 rounded-full w-[30px] h-[30px]  border-orange-600`}
                  ></div>
                  <h1
                      className={`${
                          task.completed && "line-through"
                      } text-2xl font-extrabold text-yellow-100`}
                  >
                      {task.title}
                  </h1>
              </div>
              <div className="flex gap-3 text-2xl text-yellow-100">
                  <i className="ri-file-edit-line"></i>
                  <i
                      onClick={() => DeleteHandler(index)}
                      className="ri-delete-bin-3-line"
                  ></i>
              </div>
          </li>
      );
  });
   }
  return (
    <div className='centerdiv' >
   <div className='counterbox' >
    <h1 className='tododone'> TODO DONE</h1>
    <h1 className='secondchild' >Keep it up</h1>
    <div className="circle ">
    <h1> {tasks.filter((t) => t.completed === true).length}/{tasks.length} </h1> 
      
       </div>
   </div>
<form onSubmit={submithandler}>
<input  className='form' 
type="text"
 placeholder='Write your next Task ' 
 onChange={(e)=>settitle(e.target.value)}
 value={title}

 />
     <button className='button'><i className="ri-add-fill"></i></button>

</form>
<ul className='lists flex justify-between' > 
 {taskrender}
</ul>
    </div>
  )
}

export default App