"use client"

import css from '../../style.module.scss'

import { FormEvent } from 'react'
import { PenSquare } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Modal } from '@/components/modal'

import { TaskGet, TaskUpdate } from '@/services/task/type'

import actions from '../../actions'
import { service } from '@/services'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  task: TaskGet
}

export const Put = ({task, ...rest}: Props) => {
  const item = {
    name: task.name,
    description: task.description,
    date: actions.match(task.date, actions.regex.date),
    time: actions.match(new Date(task.date).toTimeString(), actions.regex.time)
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement

    const data: TaskUpdate = {
      name: form.name.value,
      description: form.description.value,
      date: new Date(`${form.date.value} ${form.time.value}`)
    }

    service.task.update(task.id, data)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'ghost'} className={css["hover-card-item"]}>
          <PenSquare className='w-4 h-4' />
          <span>Editar tarefa</span>
        </Button>
      </DialogTrigger>

      <Modal.Root onSubmit={onSubmit}>
        <Modal.Header title="Editar tarefa:">
          <PenSquare />
        </Modal.Header>

        <Modal.Body.Task 
          name={item.name}
          description={item.description}
          date={item.date}
          time={item.time}
        />

        <Modal.Footer />
      </Modal.Root>
    </Dialog>
  )
}