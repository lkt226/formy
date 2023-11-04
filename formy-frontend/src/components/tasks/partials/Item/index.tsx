"use client"

import css from '../../style.module.scss'

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import actions from '@/components/tasks/actions'

import { TaskGet } from '@/services/task/type'

import { ActionsCard } from './ActionsCard'


interface Props {
  task: TaskGet
}

export const Item = ({task, ...rest}: Props) => {
  const item = {
    name: task.name,
    description: task.description,
    date: new Date(task.date).toLocaleString(),
  }

  return (
    <Card 
      data-completed={task.completed} 
      className={css["item"]} 
      {...rest}
    >
      <CardHeader className={css["header"]}>
        <h3>{ item.name }</h3>
        <ActionsCard task={task} />
      </CardHeader>

      <CardContent>
        <p>{ item.description }</p>
      </CardContent>

      <CardFooter className={css["footer"]}>
        <p>{ item.date }</p>
      </CardFooter>
    </Card>
  )
}