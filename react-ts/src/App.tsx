import './App.css'
import Button from './components/Button'
import ABCExercise from './features/ABCExercise/ABCExercise'

function App() {
  return <div>
    <h1>TypeScript Übung</h1>
    <Button>
      <span>Click me</span>
    </Button>
    <ABCExercise />
  </div>
}

export default App
