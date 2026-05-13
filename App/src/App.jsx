import styled from 'styled-components'

function App() {

  return (
    <>
    <Container>
      <TopContainer>
        <div className='logo'>
          <img src="./Foody Zone.svg" alt="" />
        </div>

        <div className='search'>
          <input placeholder='Search Food' />
        </div>
      </TopContainer>

    <FilterContainer>
      <Button>All</Button>
      <Button>Breakfast</Button>
      <Button>Lunch</Button>
      <Button>Dinner</Button>
    </FilterContainer>

    

    </Container>
    <FoodCardContainer>
      <FoodCards></FoodCards>
    </FoodCardContainer>
    </>
  )
}

export default App

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const TopContainer = styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search{
    input{
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 20px;
`

const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;

  &:hover{
    background-color: black;
  }
`
const FoodCardContainer = styled.section`
  height: calc(100vh - 210px);
  background-image: url('/bg.png');
  background-size: cover;
  
`
const FoodCards = styled.div`
  
`