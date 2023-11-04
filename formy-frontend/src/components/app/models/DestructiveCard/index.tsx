"use client"

import css from './style.module.scss'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Button } from '@/components/ui/button'
import { MouseEvent } from "react"
import { Check, X } from 'lucide-react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode,
  onClick: (e:MouseEvent) => void
}

export const DestructiveCard = ({children, onClick, ...rest}: Props) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
      { children }
      </HoverCardTrigger>
      <HoverCardContent align='start' className={css["destructive-card"]}>
        <Button onClick={onClick} variant={'destructive'} className={css["item"]}>
          <Check className='w-4 h-4' />
          <span>Sim</span>
        </Button>
        
        <Button className={css["item"]}>
          <X className='w-4 h-4' />
          <span>Não</span>
        </Button>
      </HoverCardContent>
    </HoverCard>
  )
}