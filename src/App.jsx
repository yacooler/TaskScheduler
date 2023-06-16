import './App.css'
import IssueCard from './components/issueCard/IssueCard'

function App() {


  return (
    <div>     
      <IssueCard topic = 'Тест' maxValue={50} currentValue={40} issueMakeStep={()=>{}} issueDelete={()=>{}}/>      
    </div>
  )
}

export default App
