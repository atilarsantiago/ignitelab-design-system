import {Meta,StoryObj} from '@storybook/react' //tipagens que permitem acessar a interface 'ButtonProps' que criamos
import { Button, ButtonProps } from "./Button";

export default{
  title: 'Components/Button', //Título do component, sendo que ao criar  essa / fará o component 'Button' fique dentro da pasta 'Components' no storybook
  component: Button,
  args:{
    children: 'Create Account',
    
  },
  argTypes:{}

} as Meta<ButtonProps>

//Variante que obrigatoriamente precisa existir no stories de qualquer component. 

//Nesse caso exportamos um objeto vazio, pois esse component não tem variantes. Mas aparecerá como uma variente chamada 'Default'.
export const Default: StoryObj<ButtonProps>={}

