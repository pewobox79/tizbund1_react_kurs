import './App.css'
import Button from './components/Button'
import ABCExercise from './features/ABCExercise/ABCExercise'
import FetchFeature from './features/FetchFeature/FetchFeature'

function App() {
  return <div>
    <h1>TypeScript Übung</h1>
    <Button
      customCSS={{ backgroundColor: "yellow" }}
    >
      <span>Click me</span>
    </Button>
   <ABCExercise/>
  </div>
}

export default App
