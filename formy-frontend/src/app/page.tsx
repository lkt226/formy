"use client"

import { Task } from '@/components/tasks'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

export default function Home() {
  const tasks = useSelector((state: RootState) => state.task.items)

  return (
    <main className="flex">
      <Task.Root>
        { Object.values(tasks).map(task => (
          <Task.Item key={task.id} task={task} />
        ))}
        <Task.Post />
      </Task.Root>
    </main>
  )
}
