import { BoxInfomatinsText, CardInformtionConteiner, StatusInformation } from "./styled";

const CardInformation = ({ title, total }: { title: string, total: number}) => {
    return <CardInformtionConteiner >
        <BoxInfomatinsText>
            <p>{title}</p>
            <span>{total}</span>
        </BoxInfomatinsText>
        <StatusInformation>
            <p>+55%</p>
            <span>than last week</span>
        </StatusInformation>
    </CardInformtionConteiner>
}

export default CardInformation;