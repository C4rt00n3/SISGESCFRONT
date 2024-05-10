import { Link } from "react-router-dom";
import "./styled.css"

interface iCraeteAlunoButton {
    text: string;
    type: "submit" | "reset" | "button"
}

const ButtonGeneric = ({text, type}: iCraeteAlunoButton) => {
    return <Link to="/matricula" className="button-comp" type={type}>{text}</Link>
}

export default ButtonGeneric