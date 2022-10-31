import {Meta,StoryObj} from '@storybook/react' //tipagens que permitem acessar a interface 'HeadingProps' que criamos
import { Heading, HeadingProps } from "./Heading";

export default{
  title: 'Components/Heading', //Título do component, sendo que ao criar  essa / fará o component 'heading' fique dentro da pasta 'Components' no storybook
  component: Heading,
  args:{
    children: 'Loren Ipsum',
    //size: 'lg' // Esse elemento assim como qualquer outro da interface pode ser trazido para cá e mostrado como o padrão no storybook.
    size:'md'
    
  },
  argTypes:{
    size:{
      options:['sm','md','lg'],
      control:{
        type:'inline-radio'
      }
    }
  }

} as Meta<HeadingProps>

//Variante que obrigatoriamente precisa existir no stories de qualquer component. 

//Nesse caso exportamos um objeto vazio, pois esse component não tem variantes. Mas aparecerá como uma variente chamada 'Default'.
export const Default: StoryObj<HeadingProps>={}

export const small: StoryObj<HeadingProps>={
  args:{
    size:'sm'
  }
}

export const medium: StoryObj<HeadingProps>={
  args:{
    size:'md'
  }
}


export const large: StoryObj<HeadingProps>={
  args:{
    size:'lg'
  }
}

export const CustomComponent: StoryObj<HeadingProps>={
  args:{
    asChild:true,
    children:(<h1>Text With H1 tag</h1>)
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