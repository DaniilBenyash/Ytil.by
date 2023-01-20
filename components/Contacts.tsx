import Title from "./Title"
import Button from "./Button"

type typeInfoLinks = {
    background: string,
    icon: string,
    name: string,
    link: string,
    className: string,
}

const infoLinks: typeInfoLinks[] = [
    {
        background: '#65FDBD',
        icon: './contacts-image/phone.png',
        name: '+375(29) 182-35-80',
        link: "tel:+375291823580",
        className: 'contacts__item1'
    },
    {
        background: '#65FDBD',
        icon: './contacts-image/phone.png',
        name: '+375(29) 803-93-52',
        link: "tel:+375298039352",
        className: 'contacts__item2'
    },
    {
        background: '#7E57C2',
        icon: './contacts-image/viber.png',
        name: 'Viber',
        link: "viber://chat?number=%2B375291823580",
        className: 'contacts__item3'
    },
    {
        background: '#29B6F6',
        icon: './contacts-image/telegram.png',
        name: 'Telegram',
        link: "https://t.me/Baidak_18",
        className: 'contacts__item4'
    },
    {
        background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
        icon: './contacts-image/instagram.png',
        name: 'Instagram',
        link: "https://www.instagram.com/ytil.by/",
        className: 'contacts__item5'
    },
]

const Contacts = () => {
    return (
        <section className="contacts">
            <Title greenText="Как" text="вывезти мусор"/>
            <div className="contacts__text">
                <p>Напишите нам или позвоните по телефону. Мы уточним, что вам нужно вывезти и</p>
                <p className="contacts__text-orange_text">назначим дату и время вывоза</p>
            </div>
            <div className="contacts__links">
                {infoLinks.map(link =>
                    <div className={link.className}>
                        <Button
                            background={link.background}
                            icon={link.icon}
                            name={link.name}
                            link={link.link}
                        />
                    </div> 
                    
                )}
            </div>
        </section>    
    )
}

export default Contacts