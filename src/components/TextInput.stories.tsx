import {Meta,StoryObj} from '@storybook/react' //tipagens que permitem acessar a interface 'TextInputProps' que criamos
import { TextInput, TextInputRootProps,  } from "./TextInput";
import { Envelope } from 'phosphor-react';

export default{
  title: 'Components/TextInput', //Título do component, sendo que ao criar  essa / fará o component 'TextInput' fique dentro da pasta 'Components' no storybook
  component: TextInput.Root,
  args:{
    children:(
      <>
        <TextInput.Icon>
          <Envelope/>
        </TextInput.Icon>
        <TextInput.Input placeholder="Digite seu e-mail"/>
      </>
    )  },
  argTypes:{}

} as Meta<TextInputRootProps>

//Variante que obrigatoriamente precisa existir no stories de qualquer component. 
//Nesse caso exportamos um objeto vazio, pois esse component não tem variantes. Mas aparecerá como uma variente chamada 'Default'.
export const Default: StoryObj<TextInputRootProps>={}
export const WithoutIcon: StoryObj<TextInputRootProps>={
  args:{
    children:<TextInput.Input placeholder="Digite seu e-mail"/>
  }
}


