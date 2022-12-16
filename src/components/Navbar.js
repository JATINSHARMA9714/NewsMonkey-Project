import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div style={{backgroundColor:'#252525'}}>
          <div style={{ width: '98.9vw' }}><h1 style={{ textAlign: 'center', backgroundColor: '#252525', height: '60px' }}> 🐒 <u style={{ color: 'white' }}>NewsMonkey</u></h1></div><div>
            {/* <ul className="nav nav-tabs bg-dark">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
            </ul> */} 
          </div>
        </div>
      </>
    )
  }
}
