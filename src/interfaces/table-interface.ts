export default interface iTable {
    thead: Array<string>;
    values: (string | number | JSX.Element | undefined)[][]
}
