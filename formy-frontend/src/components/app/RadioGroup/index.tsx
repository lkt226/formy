import css from './style.module.scss'

import { RadioGroupProps } from "@radix-ui/react-radio-group"
import { RadioGroup as _RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "../Label";

interface Props extends RadioGroupProps {
  name: string
  label?: string
  items: {
    value: string
    label: string
  }[],
}

export const RadioGroup = ({ name, label, items, ...rest }: Props) => {
  return (
    <div className={css["radio"]}>
      <span className={css["text"]} aria-required={rest.required}>
        { label }
      </span>
      <_RadioGroup {...rest} name={name} className={`${css["group"]} ${rest.className}`}>
        {items.map((item, index) => (
          <Label className={css["item"]} label={item.label} key={item.value}>
            <RadioGroupItem value={item.value}  />
          </Label>
        ))}
      </_RadioGroup>
    </div>
  )
}