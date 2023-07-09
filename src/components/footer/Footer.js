import "./style.css"

import vk from "./../../img/icons/vk.svg"
import instagram from "./../../img/icons/instagram.svg"
import twitter from "./../../img/icons/twitter.svg"
import linkedIn from "./../../img/icons/linkedIn.svg"
import gitHub from "./../../img/icons/gitHub.svg"


const Footer = () => {
  return (
    <div>
         <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <ul class="social">
                    <li class="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
                    <li class="social__item"><a href="#!"><img src={instagram} alt="Link"/></a></li>
                    <li class="social__item"><a href="#!"><img src={twitter} alt="Link"/></a></li>
                    <li class="social__item"><a href="#!"><img src={gitHub} alt="Link"/></a></li>
                    <li class="social__item"><a href="#!"><img src={linkedIn} alt="Link"/></a></li>
                </ul>
            </div>
        </div>
    </footer>
    
    </div>
  )
}

export default Footer