import {Meta,StoryObj} from '@storybook/react' //tipagens que permitem acessar a interface 'TextProps' que criamos
import { Text, TextProps } from "./Text";

export default{
  title: 'Components/Text', //Título do component, sendo que ao criar  essa / fará o component 'Text' fique dentro da pasta 'Components' no storybook
  component: Text,
  args:{
    children: 'Loren Ipsum',
    //size: 'lg' // Esse elemento assim como qualquer outro da interface pode ser trazido para cá e mostrado como o padrão no storybook.
    size: 'md'
    
  },
  argTypes:{
    size:{
      options:['sm','md','lg'],
      control:{
        type:'inline-radio'}
      }
    }
} as Meta<TextProps>

//Variante que obrigatoriamente precisa existir no stories de qualquer component. 

//Nesse caso exportamos um objeto vazio, pois esse component não tem variantes. Mas aparecerá como uma variente chamada 'Default'.
export const Default: StoryObj<TextProps>={}

export const small: StoryObj<TextProps>={
  args:{
    size:'sm'
  }
}

export const medium: StoryObj<TextProps>={
  args:{
    size:'md'
  }
}


export const large: StoryObj<TextProps>={
  args:{
    size:'lg'
  }
}

export const CustomComponent: StoryObj<TextProps>={
  args:{
    asChild:true,
    children:(<div>Componenet customizado</div>)
  },
  //Para desabilitar a impressão do children e aschild nas opção do storybook
  argTypes:{
    children:{
      table:{
        disable: true
      }
    },
    asChild:{
      table:{
        disable: true
      }
    }
  }
}