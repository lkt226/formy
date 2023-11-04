"use client"

import css from '../style.module.scss'
import { DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  title: string
}

export const Header = ({children, title, ...rest}: Props) => {
  return (
    <DialogHeader {...rest}>
      <div className={css["header"]} >
        { children }
        <DialogTitle>{ title }</DialogTitle>
      </div>
    </DialogHeader>
  )
}