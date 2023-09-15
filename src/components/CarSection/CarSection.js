import React from 'react'
import { CarsAPI } from '../../Data'
import { Carsfold } from './CarSection-Styles'
import CarCard from './CarCard'
import Rental from './Rental'
import LastSection from '../LastSection/LastSection/LastSection'
import Footer from '../Footer/Footer'

const CarSection = () => {
  return (
    <Carsfold>
        <h4>Collections</h4>
        <h2>Available for Sale</h2>
        <div className='item-grid' class='text'>
            {CarsAPI.map((item) =>{
                return <CarCard item={item} key={item.id} />
            })}
        </div>
        <Rental/>
        <LastSection/>
        <Footer />
    </Carsfold>
  )
}

export default CarSection