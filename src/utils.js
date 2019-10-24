export const store = () => {};
export const session = () => {};
export const createUUID = () => {
    const stringArray = [];
    const hexDigits = "0123456789abcdef";
    for (let i = 0; i < 36; i++) {
        stringArray[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    stringArray[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    stringArray[19] = hexDigits.substr((stringArray[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    stringArray[8] = stringArray[13] = stringArray[18] = stringArray[23] = "-";

    return stringArray.join("");
};
