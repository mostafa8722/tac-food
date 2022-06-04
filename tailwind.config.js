/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        sm: '8px',
        md: '15px',
        lg: '20px',
        xl: '20px',
      }
    },
  },
  variants: {
    //sample:['responsive', 'hover', 'focus', 'active' , 'first' , 'last','odd','even','visited','disabled','group-hover','focus-within'] ,
    borderRadius: ['important', 'responsive']
  },
  plugins: [
    function ({addComponents}) {
      addComponents({
        '.container': {
          width: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
        }
      })
    },
    function ({addVariant}) {
      addVariant('important', ({container}) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    },
  ],
}
