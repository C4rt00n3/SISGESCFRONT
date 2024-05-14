import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { useHomeContext } from "../../contexts/home-provider-context"
import { ConteinerLoading } from "./styled"

const Loading = () => {
    const { loading } = useHomeContext()
    return loading ? <ConteinerLoading>
        <AiOutlineLoading3Quarters color="#fff" />
    </ConteinerLoading>
        : <></>
}

export default Loading;