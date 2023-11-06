import { Label } from '../Label'
import { Textarea as _Textarea, TextareaProps } from "@/components/ui/textarea"

interface Props extends TextareaProps {
  name: string
  value?: string
  label?: string
  caption?: string
}

export const Textarea = ({ name, value, label, caption, ...rest }: Props) => {
  return (
    <Label label={label} caption={caption} aria-required={rest.required}>
      <_Textarea defaultValue={value} name={name} {...rest} />
    </Label>
  )
}