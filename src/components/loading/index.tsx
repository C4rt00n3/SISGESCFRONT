import { AiOutlineLoading3Quarters } from "react-icons/ai"
import "./styled.css"
import { useHomeContext } from "../../contexts/home-provider-context"

const Loading = () => {
    const { loading } = useHomeContext()
    return loading ? <div className="conteiner-loading">
        <AiOutlineLoading3Quarters color="#fff" />
    </div>
        : <></>
}

export default Loading;