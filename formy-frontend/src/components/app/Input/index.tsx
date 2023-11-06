import { Label } from '../Label'
import { Input as _Input, InputProps } from "@/components/ui/input"

interface Props extends InputProps {
  name: string
  value?: string
  label?: string
  caption?: string
}

export const Input = ({ name, value, label, caption, ...rest }: Props) => {
  return (
    <Label label={label} caption={caption} aria-required={rest.required}>
      <_Input defaultValue={value} name={name} {...rest} />
    </Label>
  )
}