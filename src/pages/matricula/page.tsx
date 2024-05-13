// MatriculaScreen.tsx
import Input from "../../components/inputs/Input-header";
import FormMatricula from "../../components/from-matricula";
import NavBar from "../../components/nav-bar";
import { useMatriculaContext } from "../../contexts/matricula-provider-context";
import "./styled.css";


/**
 * Component for the Matricula screen.
 * This component renders the main layout of the screen, including the navigation bar, input components, and the matricula form.
 */
const Matricula = () => {
    // Get the fields array from the context
    const { fields } = useMatriculaContext();
    return (
        <div className="main-container">
            <NavBar />
            <main>
                <Input />
                <div className="form-container">
                    {
                        (fields && fields.length > 0) && <FormMatricula method="post" fields={fields} />
                    }
                </div>
            </main>
        </div>
    );
};

export default Matricula;