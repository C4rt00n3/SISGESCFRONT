import SchollIcone from "../scholl-icone"
import CloseIcon from "../close-icon"
import ListLinks from "../list-links"
import { SiGoogleforms } from "react-icons/si";
import { PiStudentFill } from "react-icons/pi";
import { MdFamilyRestroom } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { FaBus } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import "./styled.css"
import { Link } from "react-router-dom";
import { useHomeContext } from "../../contexts/home-provider-context";

const NavBar = () => {
    const listLinks = [
        {
            Icon: () => <SiGoogleforms color="#fff" />,
            route: "matricula",
            text: "Matricula"
        },
        {
            route: "alunos",
            text: "Alunos",
            Icon: () => <PiStudentFill color="#fff" />
        },
        {
            route: "filiacao",
            text: "Filiação",
            Icon: () => <MdFamilyRestroom color="#fff" />
        },
        {
            route: "turmas",
            text: "Turmas",
            Icon: () => <SiGoogleclassroom color="#fff" />
        },
        {
            route: "transporte",
            text: "Transporte",
            Icon: () => <FaBus color="#fff" />
        }
    ];
    const { navigation } = useHomeContext()

    return <div className="container">
        <nav>
            <div className="conteiner-nav">
                <div className="box-nav-icones">
                    <button onClick={()=> navigation("home", true)}>
                        <CloseIcon></CloseIcon>
                    </button>
                    <SchollIcone
                        text="Nome escola"
                        ref={undefined}
                        src="https://wallpapercave.com/wp/wp4876763.jpg"
                        alt="Image do tailwind" />
                </div>
                <ListLinks
                    title="main"
                    listLinks={listLinks} />
                <ListLinks
                    title="Estatistica"
                    listLinks={listLinks} />
            </div>
            <div className="box-link-settings">
                <Link className="link-settings" to="/settings"><IoMdSettings />Settings</Link>
            </div>
        </nav >
    </div>
}

export default NavBar