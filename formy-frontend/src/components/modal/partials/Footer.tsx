"use client"

import css from '../style.module.scss'
import { Button } from "@/components/ui/button"
import { DialogFooter } from "@/components/ui/dialog"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
}

export const Footer = ({...rest}: Props) => {
  return (
    <DialogFooter className={css["footer"]} {...rest}>
      <Button type="submit" >Salvar</Button>
    </DialogFooter>
  )
}