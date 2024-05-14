import { NavLink } from "react-router-dom";
import { BoxListLinks, ItenListLinks, ListLinkStyled } from "./styled";

interface iLinks {
    route: string;
    text: string,
    Icon?: () => JSX.Element
}

const ListLinks = ({ listLinks, title }: {
    listLinks: iLinks[],
    title: string,
}) => {
    return <BoxListLinks>
        <span className="title-list-navbar">{title}</span>
        <ListLinkStyled>
            {
                listLinks.map(e => <ItenListLinks key={e.route}>
                    {e.Icon && e.Icon()}
                    <NavLink to={`/${e.route}`}>{e.text}</NavLink>
                </ItenListLinks>
                )
            }
        </ListLinkStyled >
    </BoxListLinks>
}

export default ListLinks