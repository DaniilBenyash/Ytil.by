import Image from "next/image"

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <Image src="/header-image/logo.png" alt="logo" height={50} width={50} priority={true}/>
                <h2 className="header__title">Ytil.<span className="header__title_green">b</span>y</h2>
            </div>
            <div className="header__contacts">
                <a href="tel:+375291823580" className="header__phone-number">
                    <Image src="/header-image/phone.png" alt="phone" height={30} width={30}/>
                    <p className="header__text">+375(29) 182-35-80</p>
                </a>
                <a href="viber://chat?number=%2B375291823580" className="header__viber">
                    <Image src="/header-image/viber_logo.png" alt="viber_logo" height={40} width={40}/>
                    <p className="header__text">Viber</p>
                </a>
            </div>
        </header>
    )
}

export default Header