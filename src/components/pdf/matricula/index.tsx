import { useParams } from 'react-router-dom';
import { useHomeContext } from '../../../contexts/home-provider-context';
import { PDFViewer } from "@react-pdf/renderer";
import { useEffect, useState, useCallback } from 'react';
import iMatricula from '../../../interfaces/netwok-interface/matricula-interface';
import DocumentoPDF from './doc';

const MatriculaPDF = () => {
    const { id } = useParams<{ id: string }>();

    if (id && isNaN(Number(id))) {
        return <></>;
    }

    const { user, fetchMatricula, setLoading, loading } = useHomeContext();
    const [matricula, setMatricula] = useState<iMatricula | undefined>(undefined);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const pick = await fetchMatricula(Number(id));
            setMatricula(pick);
        } catch (err) {
            setError('Failed to fetch matricula data');
        } finally {
            setLoading(false);
        }
    }, [id, fetchMatricula]);

    useEffect(() => {
        if (id && !matricula) {
            fetchData();
        }
    }, [id, matricula, fetchData]);

    if (loading) {
        setLoading(loading)
        return <></>
    }
    
    setLoading(loading)

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div style={{ width: '100%', height: '100%', padding: 0 }}>
            {(matricula && user) && (
                <PDFViewer style={{ width: '100%', height: '100%' }}>
                    <DocumentoPDF matricula={matricula} user={user} />
                </PDFViewer>
            )}
        </div>
    );
};

export default MatriculaPDF;
