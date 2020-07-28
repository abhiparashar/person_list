import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Person({ img, name, job,children}){
  const url = `https://randomuser.me/api/portraits/men/${img}.jpg`
  return (
    <div>
      <img src={url} alt="person"/>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </div>
  )
}

function Personlist(){
  return(
    <div className="person">
      <Person img="34" name="john" job="developer" />
      <Person img="22" name="bob" job="Designer" />
      <p>lorem ipsium dolor sit amet consectetur, adipisicing elit,Asperiores,tempora !</p>
      <Person img="56" name="david" job="the boss" />
    </div>
  )
}

ReactDOM.render(<Personlist/>,document.getElementById('root'))