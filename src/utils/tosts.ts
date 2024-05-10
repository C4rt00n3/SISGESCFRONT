import { Bounce, toast } from "react-toastify";

const callToast = (status: "success" | "error", message?: string) => {
    switch (status) {
        case "success":
            toast.success(message || 'Craido com sucesso', {
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
        case "error":
            toast.error(
                message || "Ocorreu um error",
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
    }
};

export default callToast;