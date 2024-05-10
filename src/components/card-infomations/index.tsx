import "./styled.css"

const CardInformation = ({ title, total, color }: { title: string, total: number, color?: string }) => {
    return <div className="cont-centralize">
        <div className="conteiner-card">
            <h4>{title}</h4>
            <h3 style={{ color: color ? color : "#000" }}>{total} <span>Total</span></h3>
        </div>
    </div>
}

export default CardInformation;