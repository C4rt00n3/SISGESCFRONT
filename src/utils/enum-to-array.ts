function enumToArray<T extends Record<string, string | number>>(enumObj: T): string[] {
    return Object.values(enumObj).filter(value => typeof value === 'string') as string[];
}

export default enumToArray