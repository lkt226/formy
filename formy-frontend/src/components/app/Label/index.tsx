import css from './style.module.scss'
import { Label as _Label } from "@/components/ui/label"

interface Props extends React.HTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
  label?: string
  caption?: string
}

export const Label = ({ children, label, caption, ...rest }: Props) => {
  return (
    <_Label {...rest} className={`${css["label"]} ${rest.className}`}>
      { label && <span className={css["text"]}>{label}</span> }
      { children }
      { caption && <p className={css["caption"]}>{caption}</p> }
    </_Label>
  )
}