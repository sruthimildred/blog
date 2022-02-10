import React  from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/Signup';



import "./App.css"
import NavBar from './NavBar'


function App() {
  

return (
<>
<Router>
  <div className='App'>
    <NavBar/>
    <div id='page-body'>
<Routes>
  



<Route exact path="/"  element={<HomePage/>} />
<Route path="/about" element={<AboutPage/>} />
<Route path="/articles-list" element={<ArticleListPage/>} />
<Route path="/article/:name" element={<ArticlePage/>} />

<Route path="/login" element={<LoginPage/>} />
<Route path="/signup" element={<SignupPage/>} />


<Route path="*" element={<NotFoundPage/>} />

</Routes>
</div>
  </div>

</Router>


  </>
  
  );
  
}


export default App;


// import './App.css';
// import Homepage from "./components/homepage/Homepage"
// import Login from "./components/login/Login"
// import Register from "./components/register/Register"
// import {
//   BrowserRouter as Router, 
//   Switch, 
//   Route

// } from "react-router-dom";
// import {useState} from 'react';
// function App() {
//   const [user,setLoginUser] = useState({})
//   return (
//     <div className="App">
//       <Router>
// <Switch>
//   <Route exact path="/">
//     {
//       user && user._id ? <Homepage/>:<Login/>
//     }<Homepage/></Route>
//   <Route path="/Login"><Login setLoginUser={setLoginUser}/></Route>
//   <Route path="/Register"><Register/></Route>
// </Switch>

//       </Router>

//     </div>
//   );
// }

// export default App;

