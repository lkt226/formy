"use client"

import css from '../style.module.scss'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name?: string 
  description?: string
  date?: string
  time?: string
}

export const Task = ({name, description, date, time,...rest}: Props) => {
  return (
    <div className={css["body"]} {...rest}>
      <Label>
        <span>Nome:</span>
        <Input defaultValue={name} name="name" type="text" placeholder="Escreva o nome da sua tarefa" required />
      </Label>
      <span className={css["date-hour"]}>
        <Label>
          <span>Data:</span>
          <Input defaultValue={date} name="date" type="date" placeholder="Data da tarefa" required />
        </Label>
        <Label>
          <span>Hora:</span>
          <Input defaultValue={time} name="time" type="time" placeholder="Hora da tarefa" required />
        </Label>
      </span>
      <Label>
        <span>Descrição:</span>
        <Textarea defaultValue={description} name="description" placeholder="Descreva sua tarefa..." required />
      </Label>
    </div>
  )
}