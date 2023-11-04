"use client"

import css from '../style.module.scss'
import { DialogContent } from "@/components/ui/dialog"
import { FormEvent } from "react"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode,
  onSubmit: (e:FormEvent) => void
}

export const Root = ({children, onSubmit, ...rest}: Props) => {
  return (
    <DialogContent {...rest}>
      <form className={css["root"]} onSubmit={onSubmit}>
        { children }
      </form>
    </DialogContent>
  )
}