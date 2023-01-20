import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const ButtonScroll = () => {
        const [activeButton, setActiveButton] = useState(false)
    function scrollHander(ev: any) {
        const scrollTop = ev.target.documentElement.scrollTop

        if(scrollTop > 70){
            setActiveButton(true)
        }else if (scrollTop < 70){
            setActiveButton(false)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHander)

        return function() {
            document.removeEventListener('scroll', scrollHander)
        }
    }, [])

    return (
        <>
            {activeButton
            ?
            <Link
                activeClass="button_scroll"
                to="header"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}>
                    <button className="button_scroll"></button>
            </Link>
            :
            null
            }
        </>
        
        
    )
}

export default ButtonScroll