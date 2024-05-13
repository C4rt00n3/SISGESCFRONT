import SchollIcone from "../scholl-icone"
import CloseIcon from "../close-icon"
import ListLinks from "../lists/list-links"
import { SiGoogleclassroom } from "react-icons/si";
import { IoMdSettings } from "react-icons/io";
import { useHomeContext } from "../../contexts/home-provider-context";
import { BoxNavIcon, BoxSettings, ConteinerNav, NavBarConteiner } from "./styled";
import { BiHomeAlt2 } from "react-icons/bi";
import { IoCarOutline, IoDocumentOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { PiUsersThreeLight } from "react-icons/pi";

const NavBar = () => {
    const listLinks = [
        {
            Icon: () => <BiHomeAlt2 color="#fff" />,
            route: "home",
            text: "Home"
        },
        {
            Icon: () => <IoDocumentOutline color="#fff" />,
            route: "matricula",
            text: "Matricula"
        },
        {
            route: "alunos",
            text: "Alunos",
            Icon: () => <FiUser color="#fff" />
        },
        {
            route: "filiacao",
            text: "Filiação",
            Icon: () => <PiUsersThreeLight color="#fff" />
        },
        {
            route: "turmas",
            text: "Turmas",
            Icon: () => <SiGoogleclassroom color="#fff" />
        },
        {
            route: "transporte",
            text: "Transporte",
            Icon: () => <IoCarOutline color="#fff" />
        }
    ];
    const { navigation } = useHomeContext()

    return <ConteinerNav>
        <NavBarConteiner>
            <BoxNavIcon>
                <button onClick={() => navigation("home", true)}>
                    <CloseIcon></CloseIcon>
                </button>
                <SchollIcone
                    text="Nome escola"
                    ref={undefined}
                    src="https://wallpapercave.com/wp/wp4876763.jpg"
                    alt="Image do tailwind" />
            </BoxNavIcon>
            <ListLinks
                title="main"
                listLinks={listLinks} />
            <ListLinks
                title="Estatistica"
                listLinks={listLinks} />
            <BoxSettings>
                <IoMdSettings />
                <NavLink to="/settings">Settings</NavLink>
            </BoxSettings>
        </NavBarConteiner>

    </ConteinerNav>
}

export default NavBar