import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const AuthenticationCheck: React.FC<Props> = ({ children }) => {
    // useEffect(() => {
    //     const token = localStorage.getItem('token');

    //     if (!token && pathname !== '/login') {
    //         router.push('/login');
    //     }
        
    // }, [pathname]); // Dependência adicionada para reagir a alterações de rota

    return <>{children}</>;
};

export default AuthenticationCheck;
