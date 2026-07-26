import React from 'react'
import Hero from './Hero'
import StatsSection from '../components/StatsSection'
import CategoryGrid from '../components/CategoryGrid'
import LatestDrops from '../components/LatestDrops'
import Stats from '../components/Stats'

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <StatsSection />
      <CategoryGrid />
      <LatestDrops />
    </div>
  )
}

export default Home
