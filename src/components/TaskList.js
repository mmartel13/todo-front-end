import { useState, useEffect } from 'react';
import { List } from 'antd';
import Task from './Task';

const fakeTasks = [ //created fake data here to feed into our list 
    { id: 1, task: 'Buy Milk', done: false },
    { id: 2, task: 'Brew Beer', done: true },
    { id: 3, task: 'Buy Trulys', done: false },
    { id: 4, task: 'Drink Wine', done: true },
    { id: 5, task: 'Buy Paper Towels', done: false }
]

export default function TaskList() {
    const [tasks, setTasks] = useState(fakeTasks)
    useEffect(() => {
        fetch('https://much-todo-mm.uc.r.appspot.com/tasks')//this is making sure our api is working. this is my api url
        .then(response => response.json())
        .then(data => setTasks(data))
        .catch(alert)
    }, [])
    return (
        <List 
            bordered
            dataSource={tasks}//data source required
            renderItem={item => <Task item={item} />} //how you want to render is also required 
        />
    )
}