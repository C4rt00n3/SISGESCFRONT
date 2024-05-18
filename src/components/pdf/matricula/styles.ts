import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4'
    },
    section: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: "column",
        gap: "6px"
    },
    prefeitura: {
        width: '100%',
        fontSize: '14px',
        textAlign: "center",
        fontWeight: "extrabold"
    },
    addrres: {
        width: '100%',
        fontSize: '11px',
        textAlign: "center",
    },
    box: {
        border: '1px solid black',
        width: '95%',
        paddingHorizontal: '2.5%',
        paddingVertical: '8px',
        marginLeft: '2.5%',
        gap: '4px'
    },
    lineText: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    assnatura: {
        marginVertical: '16px',
        fontSize: "16px",
        textAlign: "center",
        width: "100%"
    }
});

export default styles