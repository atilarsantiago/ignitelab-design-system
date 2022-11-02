import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {Check} from 'phosphor-react'



export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps{}

export function Checkbox(props:CheckboxProps){
  return (
    <CheckboxPrimitive.Root className='h-6 w-6 px-[2px] bg-gray-800 rounded' {...props} 
    >
      <CheckboxPrimitive.CheckboxIndicator asChild>
        <Check weight='bold' className='h-5 w-5 text-cyan-500'/>
      </CheckboxPrimitive.CheckboxIndicator>
    </CheckboxPrimitive.Root> 
  )
}