import {Meta,StoryObj} from '@storybook/react' //tipagens que permitem acessar a interface 'CheckboxProps' que criamos
import {Checkbox, CheckboxProps } from "./Checkbox";
import {Text} from './Text'

export default{
  title: 'Components/Checkbox', //Título do component, sendo que ao criar  essa / fará o component 'Checkbox' fique dentro da pasta 'Components' no storybook
  component: Checkbox,
  args:{},
  argTypes:{},
  decorators:[
    (story)=>{
      return(
        <div className='flex items-center gap-2'>
          {story()}
          <Text size='sm'>Lembrar-me de mim em 30 dias</Text>
        </div>)
    }

  ]

} as Meta<CheckboxProps>

//Variante que obrigatoriamente precisa existir no stories de qualquer component. 

//Nesse caso exportamos um objeto vazio, pois esse component não tem variantes. Mas aparecerá como uma variente chamada 'Default'.
export const Default: StoryObj<CheckboxProps>={}

