import React from 'react'

const App = () => {
  const val = prompt('What is your age ?')
  if (val < 18) {
    alert('Teenager')
  } else if (val >= 18 && val < 50) {
    alert('Adult')
  } else if (val >= 50) {
    alert('Old')
  }
  return (
    <div>

    </div>
  )
}

export default App
