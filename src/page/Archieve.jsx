import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import deleteButton from '../assets/delete-button-svgrepo-com.svg'
import doneButton from '../assets/round-done-button-svgrepo-com.svg'
import Navbar from './Nav'
import { API_URL } from '../config';

const Archieve = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetchTodos();
    }, [])

    const fetchTodos = () => {
        axios.get(`${API_URL}/get`)
            .then(result => {
                setTodos(result.data);
                console.log("Todos loaded:", result.data);
            })
            .catch(err => console.log(err))
    }
    
    const handleComplete = (id) => {
        console.log("Attempting to complete todo with ID:", id);
        if (!id) {
            console.error("No valid ID provided for completion");
            return;
        }
        
        axios.put(`${API_URL}/complete/${id}`)
            .then(result => {
                console.log("Complete result:", result.data);
                fetchTodos();
            })
            .catch(err => console.log("Error marking todo as complete:", err));
    }

    const handleDelete = (id) => {
        console.log("Attempting to delete todo with ID:", id);
        if (!id) {
            console.error("No valid ID provided for deletion");
            return;
        }
        
        axios.delete(`${API_URL}/delete/${id}`)
            .then(result => {
                console.log("Delete result:", result.data);
                fetchTodos();
            })
            .catch(err => console.log("Error deleting todo:", err));
    }


  return (
    <>
        <Navbar />
        <div className='flex w-screen h-screen justify-center items-center flex-row gap-[30px] px-[20px]'>
            <div className="w-[50%] h-[50%] flex flex-col gap-[20px] scroll overflow-y-auto border-[4px] border-slate-300 p-[15px] rounded-lg">
                {
                    todos.length === 0 ? (
                        <div className='font-extrabold flex flex-col w-full h-full text-center items-center justify-center'>
                            <p>NO RECORD</p>
                            <img src={deleteButton} alt="delete" className='w-[50%] h-[70px] my-[20px]' />
                            <p>ADD YOUR FIRST TODO</p>
                        </div>
                    ) : todos.filter(todo => !todo.completed).length === 0 ? (
                        <div className='font-extrabold flex flex-col w-full h-full text-center items-center justify-center'>
                            <p>ALL TASKS HAVE BEEN COMPLETED</p>
                            <img src={doneButton} alt="done" className='w-[50%] h-[70px] my-[20px]' />
                            <p>ADD ANOTHER TODO</p>
                        </div>
                    ) : (
                        todos.filter(todo => !todo.completed).map((todo) => (
                            <div key={todo.id} className="flex flex-row justify-center items-center sticky">
                                <div className="bg-slate-200 w-[100%] px-[20px] h-[50px] flex items-center rounded-md">
                                    <p className="text-xl">{todo.task}</p>
                                </div>

                                <button onClick={() => handleComplete(todo.id)} className="bg-slate-300 hover:bg-slate-400 text-white font-bold py-2 px-4 h-[100%] rounded ml-4">
                                    <img src={doneButton} alt="done" className='w-[50px] h-[20px]' />
                                </button>
                        
                                <button onClick={() => handleDelete(todo.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 h-[100%] rounded ml-4">
                                    <img src={deleteButton} alt="delete" className='w-[50px] h-[20px]' />
                                </button>
                            </div>
                        ))
                    )
                }
            </div>
            <div className="w-[50%] h-[50%] flex flex-col gap-[20px] scroll overflow-y-auto border-[4px] border-slate-300 p-[15px] rounded-lg">
                {
                    todos.length === 0 ? (
                        <div className='font-extrabold flex flex-col w-full h-full text-center items-center justify-center'>
                            <p>NO RECORD</p>
                            <img src={deleteButton} alt="delete" className='w-[50%] h-[70px] my-[20px]' />
                            <p>ADD YOUR FIRST TODO</p>
                        </div>
                    ) : todos.filter(todo => todo.completed).length === 0 ? (
                        <div className='font-extrabold flex flex-col w-full h-full text-center items-center justify-center'>
                            <p>ALL TASKS HAVE BEEN COMPLETED</p>
                            <img src={doneButton} alt="done" className='w-[50%] h-[70px] my-[20px]' />
                            <p>ADD ANOTHER TODO</p>
                        </div>
                    ) : (
                        todos.filter(todo => todo.completed).map((todo) => (
                            <div key={todo.id} className="flex flex-row justify-center items-center sticky">
                                <div className="bg-slate-200 w-[100%] px-[20px] h-[50px] flex items-center rounded-md">
                                    <p className="text-xl">{todo.task}</p>
                                </div>
                        
                                <button onClick={() => handleDelete(todo.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 h-[100%] rounded ml-4">
                                    <img src={deleteButton} alt="delete" className='w-[50px] h-[20px]' />
                                </button>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    </>
  )
}

export default Archieve