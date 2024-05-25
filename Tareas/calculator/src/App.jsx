import {useState} from 'react'
import './App.css'

const numericButtonClasses = 'btn btn-outline-info w-100'
const operatorButtonClasses = 'btn btn-outline-warning w-100'
const specialButtonClasses = 'btn btn-outline-danger w-100'

const buttons=[
  [
    {
      claas: 'special',
      function: clearDisplay,
      label:'C'
    },
    {
      claas: 'special',
      function: deleteLastCharacter,
      label:'<'
    },
    {
      claas: 'operator',
      function: () => setOperator('/100*'),
      label:'%'
    },
    {
      claas: 'operator',
      function: () => setOperator('/'),
      label:'/'
    },
  ],
  [
    
  ]
]

function App() {
  const [display, setDisplay] = useState({
      value:'0',
      hasPoint: false,
      operator: '',
      previousValue:'0'
  })

  const updateDisplay = (value) => {
    if(value === '.'){  
      if(display.hasPoint){
      return
    }
    
      setDisplay({
        ...display,
        value : limit(display.value + value),
        hasPoint : true 
      })
      return
    }

    if (display.value === '0') {
      setDisplay({
        ...display,
        value: limit(value)
      })
      return
      
    }
    setDisplay({
      ...display,
      value: limit(display.value + value)
    })
  }

  const clearDisplay = () => {
    setDisplay({
      ...display,
    value:'0',
    hasPoint: false
    })
  }

  const deleteLastCharacter = () => {
    if(display.value.length === 1) {
      setDisplay({
        ...display,
        value: "0"
      })
      return
    }
    setDisplay({
      ...display,
      value: display.value.slice(0, -1)
    })
  }
  const setOperator = (operator) => {
    setDisplay({
      ...display,
      operator: operator,
      previousValue: display.value,
      value:'0',
      hasPoint: false
    })
  }
  
   const calculate=() => {
    if (display.operator=== '') {
      return
    }

    let result = eval(display.previousValue + display.operator + display.value)
    result=result+""
    setDisplay({
      ...display,
      value:limit(result),
      operator: '',
      hasPoint: result.includes('.'),
      previousValue: '0'
    })
   }

   const limit = (string = '', length = 11) => {
    return string.slice(0, length)
   }
  return (
    <div>
        <h1>calculator</h1>
        <hr />
        <table className='center'>
          <tbody>
            <tr>
              <td className='text-end'colSpan={4}>
                <h2>{display.value}</h2>
              </td>
            </tr>
             <tr>
              <td>
              <button
                type='button'
                className={specialButtonClasses}
                onClick={clearDisplay}
                >
                  c
                  </button>
              </td>
              <td>
              <button
                type='button'
                className={specialButtonClasses}
                onClick={deleteLastCharacter}
                >
                  {'<'}
                  </button>
              </td>
              <td>
              <button
                type='button'
                className={operatorButtonClasses}
                onClick={() => setOperator('/100*')}
                >
                  %
                  </button>
              </td>
              <td>
              <button
                type='button'
                className={operatorButtonClasses}
                onClick={() => setOperator('/')}
                >
                  /
                  </button>
              </td>
            </tr> <tr>
              <td>
              <button
                type='button'
                className={numericButtonClasses}
                onClick={()=> updateDisplay('7')}
                >
                  7</button>
              </td>
              <td>
              <button
                type='button'
                className={numericButtonClasses}
                onClick={()=> updateDisplay('8')}
                >
                  8</button>
              </td>
              <td>
              <button
                type='button'
                className={numericButtonClasses}
                onClick={()=> updateDisplay('9')}
                >
                  9</button>
              </td>
              <td>
              <button
                type='button'
                className={operatorButtonClasses}
                onClick={() => setOperator('*')}
                >
                  x
                  </button>
              </td>
            </tr> <tr>
              <td>
              <button
                type='button'
                className={numericButtonClasses}
                onClick={()=> updateDisplay('4')}
                >
                  4</button>
              </td>
              <td>
              <button
                type='button'
                className={numericButtonClasses}
                onClick={()=> updateDisplay('5')}
                >
                  5</button>
              </td>
              <td>
              <button
                type='button'
                className={numericButtonClasses}
                onClick={()=> updateDisplay('6')}
                >
                  6</button>
              </td>
              <td>
              <button
                type='button'
                className={operatorButtonClasses}
                onClick={() => setOperator('-')}
                >
                  -
                  </button>
              </td>
            </tr> <tr>
              <td>
              <button
                type='button'
                className={numericButtonClasses}
                onClick={()=> updateDisplay('1')}
                >
                  1</button>
              </td>
              <td>
              <button
                type='button'
                className={numericButtonClasses}
                onClick={()=> updateDisplay('2')}
                >
                  2</button>
              </td>
              <td>
              <button
                type='button'
                className={numericButtonClasses}
                onClick={()=> updateDisplay('3')}
                >
                  3</button>
              </td>
              <td>
              <button
                type='button'
                className={operatorButtonClasses}
                onClick={() => setOperator('+')}
                >
                  +
                  </button>
              </td>
            </tr> <tr>
              <td colSpan={2}>
                <button
                type='button'
                className={numericButtonClasses}
                onClick={()=> updateDisplay('0')}
                >
                  0</button>
              </td>
              <td>
              <button
                type='button'
                className={numericButtonClasses}
                onClick={()=> updateDisplay('.')}
                >
                  .
                  </button>
              </td>
              <td>
              <button
                type='button'
                className={specialButtonClasses}
                onClick={calculate}
                >
                  =
                  </button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
     )
}

export default App