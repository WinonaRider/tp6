import React from 'react'
import { Button, Divider } from 'antd';

const Todo = ({todo, index, deleteTodo}) => {
    return (
        <>
            <Divider className="list">
                <h3>{todo}</h3> <Button style={{background: "#dfcab3", border: "brown"}} className="btn-delete" onClick={() => deleteTodo(index)}>x</Button>
            </Divider>
        </>
    )
}

export default Todo