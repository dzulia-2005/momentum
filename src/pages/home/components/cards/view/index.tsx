import FinishedCards from '../components/cards/finishedCards'
import ProgresCards from '../components/cards/progresCards'
import ReadyForTestCard from '../components/cards/readyForTestCard'
import StartCards from '../components/cards/startCard'
import CardHeader from '../components/cardTitle'

const Cards = () => {
  return (
    <div className='py-5'>
        <CardHeader/>
        <div className='flex items-center justify-between py-5'>
          <StartCards/>
          <ProgresCards/>
          <ReadyForTestCard/>
          <FinishedCards/>
        </div>
    </div>
  )
}

export default Cards