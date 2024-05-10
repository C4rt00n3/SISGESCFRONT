function generateRandomCode(): string {
    const min = 100000; // 6 dígitos
    const max = 999999; // 6 dígitos
    return (Math.floor(Math.random() * (max - min + 1)) + min) + "";
}

export default generateRandomCode