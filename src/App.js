import { useEffect, useState } from 'react';
import './App.css';
import SingleCart from './SingleCart/SingleCart';


const cardImages =[
  { "src": "/assets/Cucumber.png",matched:false },
  { "src": "/assets/Lemon.png" ,matched:false },
  { "src": "/assets/Melon.png",matched:false  },
  { "src": "/assets/Pear.png" ,matched:false },
  { "src": "/assets/Watermelon.png" ,matched:false },
  { "src": "/assets/Cantaloupe.png",matched:false  },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiseOne, setChoiceOne] =useState(null)
  const [choiseTwo, setChoiseTwo] = useState(null)
  const [disabled , setDisabled] = useState(false)


  const handleCarts = () =>{
    const handleCarts =[...cardImages, ...cardImages]
    .sort(()=>Math.random() - 0.5)
    .map((card)=> ({...card, id: Math.random()}))

    setCards(handleCarts)
    setTurns(0)
    setChoiceOne(null)
    setChoiseTwo(null)
  }


  const handleChoise = (card) =>{
    choiseOne ? setChoiseTwo(card) : setChoiceOne(card)
  }

  useEffect(()=>{
    
    if(choiseOne && choiseTwo) {
      setDisabled(true)
      if( choiseOne.src === choiseTwo.src){
        setCards(prevCards =>{
            return prevCards.map(card => {
              if (card.src === choiseOne.src) {
                return {...card, matched: true}
              } else {
                 return card
              }
            })
        })
        resetTurn()
      } else {
          setTimeout(()=> resetTurn(), 1000)
      }
    }
  }, [choiseOne, choiseTwo])

  console.log(cards)

  const resetTurn = () =>{
    setDisabled(false)
    setChoiceOne(null)
    setChoiseTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

    useEffect(()=>{
      handleCarts()
    },[])

  return (
    <div className="mx-10 my-auto">
     <h1 className='text-rose-700 text-4xl font-bold mb-24'>Amirrroff Game</h1>
      <button className=' border-cyan-500 border-2 bg-cyan-500 rounded-lg px-12 py-2 shadow-2xl hover:bg-cyan-600 text-white text-3xl font-bold' onClick={handleCarts}>Play</button>
      
      <div className='grid mt-10 gap-5 grid-cols-4 p-24'>
        {cards.map(card => (
         <SingleCart
          card={card}
          key={card.id}
          handleChoise={handleChoise}
          flipped = {card === choiseOne || card === choiseTwo || card.matched}
          disabled={disabled}
           />
        ))}
      </div>
      <p className='border bg-rose-600 font-bold'> Turns: {turns}</p>
    </div>
  );
}

export default App;
