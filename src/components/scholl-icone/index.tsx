import { iSchollIcone } from "../../interfaces/scholl-icone"
import "./stytled.scholl.css"

const SchollIcone = ({ src, alt, text }: iSchollIcone) => {
    return <div className="div-scholl-icon">
        <img
            className="rounded-full"
            src={src}
            alt={alt}
            width={30}
            height={30}
        ></img>
        <span>{text}</span>
    </div>
}

export default SchollIcone