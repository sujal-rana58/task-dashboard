import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function TaskDetail() {
    const { id } = useParams();
    const [ task, setTask] = useState(null);
    const [ loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => res.json())
        .then(data => {
            setTask(data);
            setLoading(false);
        })
        .catch(err => console.error(err));
    }, [id]);

    if (loading) return <p className="p-8 text-gray-500">Loading task details...</p>;
    if (!task) return <p className="p-8 text-red-500">Task not found!</p>;

    return (
        <div className="container mx-auto p-8">
      <Link to="/tasks" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Tasks
      </Link>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 uppercase">{task.title}</h1>
        <div className="space-y-3 text-gray-600">
          <p><strong>Task ID:</strong> {task.id}</p>
          <p><strong>User ID:</strong> {task.userId}</p>
          <p>
            <strong>Status:</strong>{' '}
            <span className={task.completed ? 'text-green-600' : 'text-orange-600'}>
              {task.completed ? 'Completed ✓' : 'Pending'}
            </span>
          </p>
        </div>
      </div>
    </div>
    );

}