import { Bounce, toast } from "react-toastify";

const callToast = (status: "success" | "error", message?: string) => {
    switch (status) {
        case "success":
            toast.success(message || 'Criado com sucesso', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            break; // Adiciona break para sair do switch após exibir a notificação de sucesso
        case "error":
            toast.error(
                message || "Ocorreu um erro",
                {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            break; // Adiciona break para sair do switch após exibir a notificação de erro
    }
};

export default callToast;
