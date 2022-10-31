/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'], //Adicionar aqui onde estão os componentes que usaremos, nesse caso está qualquer pasta com arquivo *.tsx

  // O que adicionamos em 'theme' irá substituir os tokens padrão do tailwind para apenas esses informados, isso fz com que somente os nossos tokens sejam usados no design system.
  theme: {
    fontSize: {
      //Em geral usamos texto para referenciar cada tamanho de font, exemplo: xs = extra-small
      xs: 14, //extra-small
      sm: 16, //Small
      md: 18, //medium
      lg: 20, //large
      xl: 24, //extra-large
      '2xl': 32 //two extra-large
    },

    colors: {
      trasnsparent: 'transparent',
      black: '#000',
      white: '#FFF',
      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-400': '#7C7C8A',
      'gray-200': '#C4C4CC',
      'gray-100': '#E1E1E6',

      'cyan-500': '#81D8F7',
      'cyan-300': '#98E1FB'
    },

    extend: {
      //O que adicionamos em 'extend' irá ser agregado aos tokens já existentes do tailwind
      fontFamily: {
        sans: 'Inter, sans-serif' //Fonte padrão "Inter", caso não carregue será fonte 'sans-serif' qualquer.
      }
    }
  },
  plugins: []
}
