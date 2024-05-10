const removeDuplicatesFromString = (inputString: string) => {
    const parts = inputString.split('.');
    const uniqueParts = Array.from(new Set(parts));
    return uniqueParts.join('.');
};

export default removeDuplicatesFromString;
