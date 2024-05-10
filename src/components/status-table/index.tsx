import { RiProgress5Line } from "react-icons/ri"
import { MdBlock } from "react-icons/md"
import { GrStatusGoodSmall } from "react-icons/gr"
import iMatricula from "@/interfaces/netwok-interface/matricula-interface"

const Status = ({ matricula }: { matricula: iMatricula }) => {
    if (matricula.status?.toString() == "EM_ANDAMENTO") {
        return <RiProgress5Line color="blue" />
    }
    else if (matricula.status?.toString() == "DESATIVADO") {
        return <MdBlock color="red" />
    } else {
        return <GrStatusGoodSmall color="green" />
    }
}

export default Status