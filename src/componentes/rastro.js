import React, {useState} from 'react'
import Todo from './todo'
import { Button, Divider, Form, Input,  } from 'antd';


const Rastro = () => {
    const [todo, setTodo] = useState({})
    const [todos, setTodos] = useState([
   
    ])

    const handleChange = e => setTodo({[e.target.name]: e.target.value})

    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim() === '') {
            alert('el campo no puede estar vacio')
            return
        }
        setTodos([...todos, todo])
    }
    
    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }

    return (
        <>
            <Form onSubmit={e => e.preventDefault()}>
                <label>Agregar tarea</label>
                <div style={{paddingLeft: "42px" }}>
                <tr>
                <Input style={{background: "#dfcab3", border: "brown"}} type="text" name="todo" onChange={handleChange}/>
                </tr>
                </div>
                <br></br>
                <Button  size='large' style={{background: "#ddd0c2", border: "brown", fontSize: "bolder"}} onClick={handleClick}>agregar</Button>
            </Form>
            {
                todos.map((value, index) => (
                    <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo}/>
                 ))
            }
        </>
    )
}

export default Rastro