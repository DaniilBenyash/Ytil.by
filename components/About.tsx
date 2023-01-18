import CardAbout from "./CardAbout"
import Image from "next/image"
import Title from "./Title"

const About = () => {
    return (
        <div className="about">
            <Title
                greenText="Что мы"
                text="вывозим"
            />
            <div className="about__cards">
                <CardAbout 
                    icon={<Image src="/about-image/1.png" alt="1" width={50} height={50}/>}
                    text="Мусор со строй - площадок"
                />
                <CardAbout 
                    icon={<Image src="/about-image/2.png" alt="1" width={50} height={50}/>}
                    text="Твердые бытовые отходы (ТБО)"
                />
                <CardAbout 
                    icon={<Image src="/about-image/3.png" alt="1" width={50} height={50}/>}
                    text="Древесные остатки"
                />
                <CardAbout 
                    icon={<Image src="/about-image/4.png" alt="1" width={50} height={50}/>}
                    text="Крупно - габаритный мусор"
                />
                <CardAbout 
                    icon={<Image src="/about-image/5.png" alt="1" width={50} height={50}/>}
                    text="Отходы III и IV класса опасности"
                />
            </div>
        </div>
    )
}

export default About