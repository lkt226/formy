"use client"

import css from '../../style.module.scss'
import { ModalUpdateTask } from '../ModalUpdateTask'

import { CheckSquare, MoreHorizontal, Trash2 } from 'lucide-react'

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Button } from '@/components/ui/button'
import { App } from '@/components/app'

import { TaskGet } from '@/services/task/type'
import { service } from '@/services'

interface Props {
  task: TaskGet
}

export const ActionsCard = ({task}: Props) => {
  const handleComplete = () => {
    service.task.complete(task.id)
  }

  const handleDelete = () => {
    service.task.delete(task.id)
  }

  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button variant={'ghost'} size={'sm'}>
          <MoreHorizontal className='w-4 h-4' />
        </Button>
      </HoverCardTrigger>

      <HoverCardContent align='start' className={css["hover-card"]}>
        <Button onClick={handleComplete} variant={'ghost'} className={css["hover-card-item"]}>
          <CheckSquare className='w-4 h-4' />
          <span>Terminar tarefa</span>
        </Button>

        <ModalUpdateTask task={task} />
        
        <App.DestructiveCard onClick={handleDelete}>
          <Button variant={'ghost'} className={css["hover-card-item"]}>
            <Trash2 className='w-4 h-4' />
            <span>Deletar tarefa</span>
          </Button>
        </App.DestructiveCard>
      </HoverCardContent>
    </HoverCard>
  )
}