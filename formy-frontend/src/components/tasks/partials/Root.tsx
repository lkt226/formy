"use client"

import css from '../style.module.scss'

interface Props {
  children: React.ReactNode
}

export const Root = ({children, ...rest}: Props) => {
  return (
    <div className={css["root"]} {...rest}>
      { children }
    </div>
  )
}