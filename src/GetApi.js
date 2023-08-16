import  {React,useState} from 'react'
import axios from 'axios'

const Get = () => {
    const[resData,setResData]= useState([])
    function getNames(){
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            console.log(response);
            setResData(response.data);
        })
    }
    const[resUsernames,setResUnames]= useState([])
    function getUnames(){
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            console.log(response);
            setResUnames(response.data);
        })
    }
    const[resUseremail,setResUemail]= useState([])
    function getEmails(){
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            console.log(response);
            setResUemail(response.data);
        })
    }
  return (
    <>
    <div>
      <h1>React App</h1>
       
      <div>
      <button onClick={getNames}>Get Names</button>
      {resData.map((resData,id)=>{
        return(
            <div key={id}>{resData.name}</div>
        )
      })}
      </div>

      <div>
      <button onClick={getUnames}>Get UserNames</button>
        {resUsernames.map((resUsernames,id)=>{
          return(
              <div key={id}>{resUsernames.username}</div>
          )
        })}
      </div>

      <div>
      <button onClick={getEmails}>Get Emails</button>
        {resUseremail.map((resUseremail,id)=>{
          return(
              <div key={id}>{resUseremail.email}</div>
          )
        })}
      </div>
      

    </div>
    </>
  )
}

export default Get
