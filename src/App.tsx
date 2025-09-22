import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function App() {
  const tasks = useQuery(api.tasks.get);
  const numNonCompleted = useQuery(api.tasks.numNonComplete);

  return (
    <>
      <div className="card">
        Non-completed: {numNonCompleted}
        {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
      </div>
    </>
  )
}

export default App
