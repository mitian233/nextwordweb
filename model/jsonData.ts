export interface JsonData {
    code: number;
    result: {
        tts: string;
        content: string;
        note: string;
        dateline: string;
        img: string;
    };
    msg: string;
}

export interface RequestData {
    address: string;
}

export interface WordJsonData {
    en: {
        word: string;
        pronunciation: string;
        sentence: string;
        paragraphs: string;
    };
    zh: {
        word: string;
        pronunciation: string;
        sentence: string;
        paragraphs: string;
    };
    gifUrl: string;
}
