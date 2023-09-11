import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([
    {
      name: "biryani",
      description: "chawal hotey hain is main",
      price: 200
    },
    {
      name: "korma",
      description: "chicken ka qorma",
      price: 250
    },
    {
      name: "daal chawal",
      description: "chawal with daal and kubaab",
      price: 150
    },
    {
      name: "chinese",
      description: "chinese food",
      price: 350
    }
  ])


  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Menu menuItems={data} />
      <Footer />
    </div>
  );
}


function Header() {

  return (
    <h1>Fast React Pizza Co</h1>
  )
}


function SubHeader() {

  return (
    <>
      <h3>Our Menu</h3>
      <p>Authentic Italian, baap qisam ka food</p>
    </>
  )
}

function Menu({ menuItems }) {


  return (
    <div>
      {
        menuItems.map((menuItem) => <SingleMenu menuItem={menuItem}  />)
      }
    </div>
  )
}
function SingleMenu({menuItem}) {

  const {name, description, price} = menuItem

  return (
    <div style={{ backgroundColor: "grey", margin: "10px 0px", border: "2px solid black" }}>
      <h5>{name}</h5>
      <h5>{description}</h5>
      <h5>{price}</h5>
    </div>
  )
}
function Footer() {

  return (
    <>
      <h5>We are open 24 / 7</h5>
      <button>We are open 24 / 7</button>

    </>
  )
}




export default App;
