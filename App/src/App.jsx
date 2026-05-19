import { useEffect, useState } from 'react'
import styled from 'styled-components'
import SearchResult from './Components/SearchResults/SearchResult'

export const BASE_URL = 'https://foody-server-joft.onrender.com'

function App() {

  const [data, setData] = useState(null)
  const [filteredData, setFilteredData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedBtn, setSelectedBtn] = useState("all")

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();

        setData(json)
        setFilteredData(json)
        setLoading(false)
      } catch (error) {
        setError("Unable to fetch data")
      }
    }
    fetchFoodData();
  }, [])

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(null)
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredData(filter)

  }

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all")
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter)
    setSelectedBtn(type)
  }

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ]

  if (error) return <div>{error}</div>
  if (loading) return <div>Loading.....</div>

  return (
    <>
      <Container>
        <TopContainer>
          <div className='logo'>
            <img src="./Foody Zone.svg" alt="" />
          </div>

          <div className='search'>
            <input onChange={searchFood} placeholder='Search Food' />
          </div>
        </TopContainer>

        <FilterContainer>
          {filterBtns.map((value) => (
            <Button key={value.name} onClick={() => filterFood(value.type)}>
              {value.name}
            </Button>
          ))}
        </FilterContainer>

      </Container>
      <SearchResult data={filteredData} />
    </>
  )
}

export default App

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 16px;
`
const TopContainer = styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px 0;

  .logo {
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
  }

  .search{
    input{
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      width: min(100%, 285px);
    }
  }

  @media (max-width: 768px) {
    min-height: auto;
    flex-direction: column;
    justify-content: center;

    .logo {
      display: flex;
      justify-content: center;
    }

    .search {
      width: 100%;

      input {
        width: 100%;
      }
    }
  }
`
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 10px;
    padding-bottom: 16px;
  }
`

export const Button = styled.button`
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
