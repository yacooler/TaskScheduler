import { useMemo, useState } from 'react'
import './App.css'
import IssueCard from './components/issueCard/IssueCard'
import IssueCardEditor from './components/issueCardEditor/IssueCardEditor';

function App() {


  let [cardDB, setCardDB] = useState([
    {id : 1, topic : 'Завтрак',           maxValue : 7, currentValue : 0},
    {id : 2, topic : 'Обед',              maxValue : 7, currentValue : 0},
    {id : 3, topic : 'Ужин',              maxValue : 7, currentValue : 3},
    {id : 4, topic : 'Работа',            maxValue : 5, currentValue : 5},
    {id : 5, topic : 'Учеба, английский', maxValue : 2, currentValue : 0},
    {id : 6, topic : 'Учеба, react',      maxValue : 2, currentValue : 0},
    {id : 7, topic : 'Учеба, SQL',        maxValue : 2, currentValue : 0},
  ]);

  //Текущее значение ID карты
  let [cardID, setCardID] = useState(7);


  //Шаг
  function issueMakeStepHandler(cardToMakeStep, newValue){
    //map возвращает новый объект
    setCardDB(cardDB.map(currentCard => 
      //если текущую карточку надо поменять - создаем новый объект, копируем в него данные из старой карты и меняем у него поле currentValue
      currentCard == cardToMakeStep ? {...cardToMakeStep, currentValue : newValue} : currentCard
    ))
  }


  //Удаление карты
  function issueDeleteHandler(cardToDelete){
    //filter возвращает новый объект
    setCardDB(cardDB.filter(c => c != cardToDelete))
  }

  //Создание разметки одной карточки и привязки к функциям
  function createIssueCard(card){
    return <IssueCard
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
  }

  //Добавление новой карты в начало списка
  function addNewIssueHandler(newTitle, newMaxValue){
    const newCardDb = [
        {id: cardID + 1,
        topic: newTitle,
        maxValue : newMaxValue,
        currentValue : 0
      }, ...cardDB];

    setCardDB(newCardDb);
    setCardID(cardID + 1);
  }
  
  //Запускается всегда при ретрайве
  const cards = cardDB.map(card => createIssueCard(card))

  return (
    <div>     
      <IssueCardEditor addNewIssue={(title, maxValue)=>addNewIssueHandler(title, maxValue)}/>
      {cards}
    </div>
  )
}

export default App
