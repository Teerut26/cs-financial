import styled from '@emotion/styled'
import type { NextPage } from 'next'
import MainChart from '../components/MainChart'

const Container = styled.div``

const Home: NextPage = () => {
  return (
    <Container>
      <MainChart />
    </Container>
  )
}

export default Home
