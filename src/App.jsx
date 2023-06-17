import { useState } from 'react'
import './App.css'
import IssueCard from './components/issueCard/IssueCard'

function App() {


  const [cardDB, setCardDB] = useState([
    {id : 1, topic : 'Завтрак',           maxValue : 7, currentValue : 0},
    {id : 2, topic : 'Обед',              maxValue : 7, currentValue : 0},
    {id : 3, topic : 'Ужин',              maxValue : 7, currentValue : 3},
    {id : 4, topic : 'Работа',            maxValue : 5, currentValue : 5},
    {id : 5, topic : 'Учеба, английский', maxValue : 2, currentValue : 0},
    {id : 6, topic : 'Учеба, react',      maxValue : 2, currentValue : 0},
    {id : 7, topic : 'Учеба, SQL',        maxValue : 2, currentValue : 0},
  ]);

  let [cardID, setCardId] = useState(7);

  function getNextCardId(){
    setCardId(cardID + 1);
    return cardID;
  }

  function issueMakeStepHandler(cardToMakeStep, newValue){
    //map возвращает новый объект
    setCardDB(cardDB.map(currentCard => 
      //если текущую карточку надо поменять - создаем новый объект, копируем в него данные из старой карты и меняем у него поле currentValue
      currentCard == cardToMakeStep ? {...cardToMakeStep, currentValue : newValue} : currentCard
    ))
  }


  function issueDeleteHandler(cardToDelete){
    //filter возвращает новый объект
    setCardDB(cardDB.filter(c => c != cardToDelete))
  }

  const cards = cardDB.map(card => 
    <IssueCard
      key = {card.id}
      topic = {card.topic}
      maxValue = {card.maxValue}
      currentValue = {card.currentValue}

      //Для каждой анонимной функции, созданной в cardDB.map создается свой контекст, включая функции приращения шагов и удаления
      //Видим каждый объект card по замыканию, т.к. по сути находимся в анонимной функции cardDB.map(card => {ТУТ})
      issueMakeStep = {newValue=>issueMakeStepHandler(card, newValue)}

      //Видим каждый объект card по замыканию, т.к. по сути находимся в анонимной функции cardDB.map(card => {ТУТ})
      issueDelete={()=>issueDeleteHandler(card)}
    />
  )

  return (
    <div>     
      {cards}
    </div>
  )
}

export default App
