import { Slot } from '@radix-ui/react-slot';

import {clsx} from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react';

// Com esse extends InputHTMLAttributes<HTMLInputElement> será possível passar qualquer atributo html para a interface
// Uma Interface para cada elemento desse component
export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}
export interface TextInputRootProps extends InputHTMLAttributes<HTMLInputElement>{
  children?:ReactNode;
}
export interface TextInputIconProps extends InputHTMLAttributes<HTMLInputElement>{
  children?:ReactNode;
}

// Essa parte do component será a div que conterá todos os elementos, inclusive o input, mas também quaisquer outros
function TextInputRoot(props:TextInputRootProps){
  return(
    <div className='flex items-center gap-3 py-4 px-3 rounded w-full bg-gray-800 focus-within:ring-2 ring-cyan-300'>
      {props.children}
    </div>)  
}

//Esse 'props' receberá qualquer elemento HTML
function TextInputInput(props:TextInputInputProps){
  return (
    <input className='bg-trasnsparent outline-none flex-1  text-gray-100 text-xs placeholder:text-gray-400 '
    {...props}/>

  )
}

TextInputIcon.displayName='TextInputIcon'

function TextInputIcon(props:TextInputIconProps){
  return (
    <slot className='w-6 h-6 text-gray-400 '>
      {props.children}
    </slot>
  )
}

export const TextInput={
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}