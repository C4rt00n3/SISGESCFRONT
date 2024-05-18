export default function removeEmptyKeys(obj: any): any {
    if (Array.isArray(obj)) {
        return obj.map(removeEmptyKeys);
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.fromEntries(
            Object.entries(obj)
                .filter(([_, value]) => value != null && value !== '' && value !== undefined)
                .map(([key, value]) => [key, removeEmptyKeys(value)])
        );
    } else {
        return obj;
    }
};