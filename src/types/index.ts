export type Tlangs = [
    { 1: string, 2: "uz" },
    { 1: string, 2: "ru" },
    { 1: string, 2: "en" }
]

export type SymbolUrlResType = {
    status: string,
    message: string,
    data: SymbolUrlInfoType
}

export type SymbolUrlInfoType = {
    id: number,
    title: string,
    music: string,
    image: string,
    content: string
}[]