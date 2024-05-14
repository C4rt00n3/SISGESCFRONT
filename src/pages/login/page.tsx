import { useForm } from "react-hook-form";
import { useHomeContext } from "../../contexts/home-provider-context";
import schemaLogin from "../../schemas/login-schema";
import NetWork from "../../utils/network";
import callToast from "../../utils/tosts";
import inputFields from "../fields-inputs-login";
import { zodResolver } from "@hookform/resolvers/zod";
import InputForm from "../../components/inputs/input-form";
import { ConteinerLogin, BoxCetralize, FormLogin, ButtonLogin } from "./styled";

const Login = (): JSX.Element => {
    const { navigation } = useHomeContext()
    const useFormRegister = useForm({
        resolver: zodResolver(schemaLogin)
    });
    const { handleSubmit } = useFormRegister;

    const onSubmit = (data: any) => {
        const api = new NetWork("auth/login", 5000, {});
        api.post(data, {}).then(response => {
            localStorage.setItem("token", response.data.access_token);
            navigation('/home');
            callToast('success', "Login feito com sucesso")
        }).catch(error => {
            if (error.response) {
                callToast("error", error.response.data.message)
            } else if (error.request) {
                console.error('Erro de requisição:', error.request);
            } else {
                console.error('Erro:', error.message);
            }
        });
    };

    return (
        <ConteinerLogin>
            <BoxCetralize>
                <FormLogin onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="title-login">Login</h3>
                    {
                        inputFields.inputs.map((input, index) => (
                            <InputForm
                                key={index}
                                useFormRegister={useFormRegister}
                                params={{ ...input, inputWidth: '100%' }}
                            />
                        ))
                    }
                    <ButtonLogin type='submit'>Entrar</ButtonLogin>
                </FormLogin>
            </BoxCetralize>
        </ConteinerLogin>
    );
};

export default Login;
