"use client"

import css from '../../style.module.scss'

import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Modal } from '@/components/modal'
import { PlusSquare } from 'lucide-react'
import { FormEvent } from 'react'
import { TaskCreate } from '@/services/task/type'
import { service } from '@/services'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
}

export const ModalNewTask = ({...rest}: Props) => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement

    const data: TaskCreate = {
      name: form.name.value,
      description: form.description.value,
      date: new Date(`${form.date.value} ${form.time.value}`)
    }

    service.task.create(data)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={css["new-task-button"]}>
          <span>Nova tarefa</span>
        </Button>
      </DialogTrigger>

      <Modal.Root onSubmit={onSubmit}>
        <Modal.Header title="Nova tarefa:">
          <PlusSquare />
        </Modal.Header>

        <Modal.Body.Task />
        
        <Modal.Footer />
      </Modal.Root>
    </Dialog>
  )
}