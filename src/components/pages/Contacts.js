import React from 'react'

const Contacts = () => {
  return (
    <div>
        <main className="section">
        <div className="container">
                <h1 className="title-1">Контакты</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Местоположение</h2>
                        <p>Bishkek, Kyrgyzstan</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+79051234567">+996 224 450 245</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:webdev@protonmail.com">lastintadam@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
    </div>
  )
}

export default Contacts