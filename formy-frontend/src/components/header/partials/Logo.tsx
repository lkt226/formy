"use client"

import css from '../style.module.scss'

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export const Logo = ({children, ...rest}: Props) => {
  return (
    <a href="/" className={css["logo"]} {...rest}>
      <span></span>
      <span>inicio</span>
    </a>
  )
}