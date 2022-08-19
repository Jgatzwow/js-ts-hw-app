
let sentence = "Hello my friends"


export const sum = (a: number, b: number) => {
    return a + b;

}


export const multiply = (a: number, b: number) => {
    return a * b;
}

export const splitIntoWords = (sentence: string) => {
    return sentence.toLowerCase().split(" ")
        .filter(w => w !== "" && w !== "-")
        .map(w => w.replace("!", "")
            .replace(".", ""));
}


export const value01_01 = "01_01";