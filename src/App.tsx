import { Envelope } from 'phosphor-react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Lock } from 'phosphor-react'

import './styles/global.css'
import { Logo } from './styles/logo'
import { Checkbox } from './components/Checkbox'
import { Button } from './components/Button'

export function App() {

  return ( <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
    <header className='flex flex-col items-center'>
    <Logo/>
    <Heading size='lg' className='mt-4'>Ignite Lab</Heading>
    <Text size='lg' className='text-gray-400 mt-4'>Faça login e comece a usar</Text>
    </header>

    <form className='flex flex-col items-stretch mt-10 gap-4'>
      <label htmlFor='email' className='flex flex-col gap-3 w-full max-w-sm' >
        <Text className='font-semibold'>Endereço de E-mail</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope/>
          </TextInput.Icon>
          <TextInput.Input type='email' id='email' placeholder='Digite seu E-mail'></TextInput.Input>
        </TextInput.Root>
      </label>

      <label htmlFor='password' className='flex flex-col gap-3 w-full max-w-sm' >
        <Text className='font-semibold'>Sua senha</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Lock/>
          </TextInput.Icon>
          <TextInput.Input type='password' id='password' placeholder='*********'></TextInput.Input>
        </TextInput.Root>
      </label>
      <label htmlFor='remember' className='flex items-center gap-2'>
        <Checkbox id='remember'/>
        <Text size='sm' className='text-gray-200'>Lembrar-me por 30 dias</Text>
      </label>
      <Button typeof='button' className='mt-4'>
        Entrar na plataforma
      </Button>
    </form>

    <footer className='flex flex-col items-center gap-4 mt-8'>
      <Text size='sm'>
      <a href='' className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a> 
      </Text>
      <Text size='sm'>
      <a href='' className='text-gray-400 underline hover:text-gray-200'>Não possue conta? Crie uma agora!</a> 
      </Text>
    </footer>


  </div>)
    
}

