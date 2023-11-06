"use client"

import css from './style.module.scss'

import { App } from '@/components/app'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name?: string 
  category?: string
  description?: string
  date?: string
  time?: string
  priority?: string
}

export const Task = ({...props}: Props) => {
  return (
    <div className={css["body"]} {...props}>
      <span className={css["name-category"]}>
        <App.Input 
          label="Nome:"
          value={props.name} name="name" type="text" placeholder="Escreva o nome da sua tarefa" required 
        />
        <App.Input 
          label="Categoria:"
          value={props.category} name="category" type="text" placeholder="Digite a categoria" required 
        />
      </span>
      <span className={css["date-hour"]}>
        <App.Input
          label="Data:"
          value={props.date} name="date" type="date" placeholder="Data da tarefa" required
        />
        <App.Input
          label="Hora:"
          value={props.time} name="time" type="time" placeholder="Hora da tarefa" required
        />
      </span>
      <App.Textarea
        label="Descrição:"
        value={props.description} name="description" placeholder="Descreva sua tarefa..."
        caption="Essa informação vai ser enviada para você durante a notificação"
      />
      <App.RadioGroup
        name="priority"
        className={css["priority"]}
        label="Prioridade:"
        items={[
          { value: "high", label: "Urgente" },
          { value: "medium", label: "Importante" },
          { value: "low", label: "Comum" }
        ]}
        value={props.priority}
        required
      />
    </div>
  )
}