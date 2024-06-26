import Image from "next/image"
import Glow from "./Glow"
import Flag from "./Flag"
import { Link} from "react-scroll";

const Main = () => {
    return (
        <div className="main">
            <div className="main__left">
                <h1 className="main__h1">Вывоз <br/>строительного <br/><span className="main__h1_last_word">мусора</span></h1>
                <h3 className="main__h3">Вывоз и вынос строительного мусора, хлама,<br/>мебели и т.д. <span className="main__h3_last_word">в Минске и Минской обл.</span></h3>
                <div className="main__button">
                    <Link
                        activeClass="main__button_price"
                        to="price"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                            <button className="main__button_price">Узнать цены</button>
                    </Link>
                    <Link
                        activeClass="main__button_contacts"
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={800}>
                            <button className="main__button_contacts">Контакты</button>
                    </Link>
                </div>
            </div>
            <div className="main__right">
                    <Image src="/main-image/car.jpg" alt="car" width={300} height={400} className="main__image_car" priority={true}/>
                    <Glow color="green" className="main__glow_green"/>
                    <Glow color="orange" className="main__glow_orange"/>
                    <Flag 
                        className="main__flag_one" 
                        text="Цены от 80 р." 
                        icon={<Image src="/main-image/money.png" alt="icon_money" width={40} height={40}/>}
                    />
                    <Flag 
                        className="main__flag_two" 
                        text="Опытные грузчики" 
                        icon={<Image src="/main-image/person.png" alt="icon_person" width={40} height={40}/>}
                    />
                    <Flag 
                        className="main__flag_three" 
                        text="Работаем в Минске и области" 
                        icon={<Image src="/main-image/city.png" alt="icon_city" width={40} height={40}/>}
                    />
                    <Flag 
                        className="main__flag_four" 
                        text="Гарантия качества" 
                        icon={<Image src="/main-image/like.png" alt="icon_ok" width={40} height={40}/>}
                    />
            </div>
        </div>
    )
}

export default Main
