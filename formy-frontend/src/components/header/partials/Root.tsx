"use client"

import css from '../style.module.scss'

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export const Root = ({children, ...rest}: Props) => {
  return (
    <header className={css["root"]} {...rest}>
      { children }
    </header>
  )
}