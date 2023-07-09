import React from 'react'
import "./style.css"



const Header = () => {
  return (
    <div>
        <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong> Привет , меня зовут <em>Леонид</em></strong><br/>
                и я Frontend-разработчик
            </h1>
           
             <a href="https://drive.google.com/file/d/1DPCiN0DDdAOaZu_HLL5132nGtvhvGr6j/view?usp=share_link" className="btn" download>Download CV</a>
        </div>
    </header>
    </div>
  )
}

export default Header