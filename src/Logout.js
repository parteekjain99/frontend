// import axios from 'axios'
// import React, { useContext } from 'react'
// import { useNavigate } from 'react-router-dom'

// import {UserContext} from "./App"
// import { Button } from './styles/Button'
// const Logout = () => {
//   const {state,dispatch} = useContext(UserContext)
//   const navigate = useNavigate()

//   const handleSubmit = () => {
   
//     axios.post('http://localhost:5000/logout')
//         .then(res => {
//             console.log(res.data)

//             if (res.data.code === 500) {
//                 alert('User Not Found')
//             }
//             if (res.data.code === 404) {
//                 alert('Password is wrong')
//             }
//             if (res.data.code === 200) {
//                 // move to home
//                 dispatch({type:"USER",payload:false})
//                 navigate('/signin')
//                 localStorage.setItem('TOKEN', res.data.token)
//                 localStorage.setItem('EMAIL', res.data.email)
//             }
//         }).catch(err => {
//             console.log(err)
//         })
// }
 
//   return (
//     <>
//       <div>
//                 <span> {localStorage.getItem('EMAIL')} </span>
//                 <button
//                     onClick={() => {
//                         localStorage.clear()
//                         navigate('/signin')
//                     }}> logout</button> 
//                   <h1>logiut ka page</h1>  
//                   <Button onClick={handleSubmit}/>
//             </div> 




//             </>
//   )
// }

// export default Logout