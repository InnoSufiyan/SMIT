import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import SelectionApp from './SelectionApp'
import EatNSplit from './EatNSplit'
import KeyComponent from './KeyComponent'
import StateCheck from './StateCheck'
import CleanUp from './CleanUp'
import UserProfile from './UserProfile.js'

function App() {

  const navigate = useNavigate()

  // const [data, setData] = useState([
  //   {
  //     name: "biryani",
  //     description: "chawal hotey hain is main",
  //     price: 200
  //   },
  //   {
  //     name: "korma",
  //     description: "chicken ka qorma",
  //     price: 250
  //   },
  //   {
  //     name: "daal chawal",
  //     description: "chawal with daal and kubaab",
  //     price: 150
  //   },
  //   {
  //     name: "chinese",
  //     description: "chinese food",
  //     price: 350
  //   }
  // ])

  // const navigate = useNavigate()

  // function routingHandler() {
  //   navigate('/')
  // }

  function loginHandler() {
    //username
    //useremail
    //userpassword
    if(true) {
      navigate('/about')
    } else {
      //login error
    }
  }


  return (
    // <div className="App">
    //   <Header />
    //   <SubHeader />
    //   <Menu menuItems={data} />
    //   <Footer />
    // </div>

    <>

      <div>
        {/* <h1 onClick={routingHandler}>Home</h1> */}
        <Link to="/">
          Home
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/contact">
          Contact
        </Link>
        <Link to="/statecheck">
          statecheck
        </Link>
        <Link to="/cleanup">
          cleanup
        </Link>

        <button onClick={loginHandler}>
          Login
        </button>

      </div>

 {/* <SelectionApp /> */}
    {/* <EatNSplit /> */}
    {/* <KeyComponent /> */}
    {/* <StateCheck /> */}
    {/* <CleanUp /> */}



      <Routes>
        <Route path="/" element={<SelectionApp />} />
        <Route path="/about" element={<EatNSplit />} />
        <Route path="/contact" element={<KeyComponent />} />
        <Route path="/statecheck" element={<StateCheck />} />
        <Route path="/cleanup" element={<CleanUp />} />
        <Route path="/userProfile/:userid" element={<UserProfile />} />

      </Routes>
    </>

  );
}


// function Header() {

//   return (
//     <h1>Fast React Pizza Co</h1>
//   )
// }


// function SubHeader() {

//   return (
//     <>
//       <h3>Our Menu</h3>
//       <p>Authentic Italian, baap qisam ka food</p>
//     </>
//   )
// }

// function Menu({ menuItems }) {


//   return (
//     <div>
//       {
//         menuItems.map((menuItem) => <SingleMenu menuItem={menuItem}  />)
//       }
//     </div>
//   )
// }
// function SingleMenu({menuItem}) {

//   const {name, description, price} = menuItem

//   return (
//     <div style={{ backgroundColor: "grey", margin: "10px 0px", border: "2px solid black" }}>
//       <h5>{name}</h5>
//       <h5>{description}</h5>
//       <h5>{price}</h5>
//     </div>
//   )
// }
// function Footer() {

//   return (
//     <>
//       <h5>We are open 24 / 7</h5>
//       <button>We are open 24 / 7</button>

//     </>
//   )
// }




export default App;
