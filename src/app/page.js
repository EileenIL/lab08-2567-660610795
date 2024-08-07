import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskInput from "./components/TaskInput";
import Task from "./components/Task";
export default function Home() {
  const task = [
    {id: 1,title : "Read a book", isDone : true},
    {id: 2,title : "Task a shower", isDone : false},
    {id: 3,title : "Sleep", isDone : false},
   ];
   return(
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header/>
      {/* 
      <div>
        <h4 className="display-4 fst-italic text-center">Todo List Mock Up</h4>
        <p className="text-secondary text-center">
          This lab teach you how to split react component(s)
        </p>
      </div> */}

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput/>
       
        {/* task */}

        {/* task */}
        
        {/* task */}
       

        <Task {...task[0]}/>
        <Task {...task[1]}/>
        <Task {...task[2]}/>
        </div>
      {/* //footer section */}
    
      <Footer year="2024" name ="Sadanun Laksanaaree" studentId="660610795" />
        
      
    </div>
  );
}
