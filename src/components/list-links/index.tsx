import { useHomeContext } from "../../contexts/home-provider-context";
import "./styled.css"

interface iLinks {
    route: string;
    text: string,
    Icon?: () => JSX.Element
}

const ListLinks = ({ listLinks, title }: {
    listLinks: iLinks[],
    title: string,
}) => {

    const { navigation } = useHomeContext()
    return <div className="box-list-links">
        <span className="title-list-navbar">{title}</span>
        <ul className="list-links">
            {
                listLinks.map(e => <li key={e.route}>
                    {e.Icon && e.Icon()}
                    <button onClick={() => navigation("/" + e.route)}>{e.text}</button>
                </li>
                )
            }
        </ul >
    </div>
}

export default ListLinks