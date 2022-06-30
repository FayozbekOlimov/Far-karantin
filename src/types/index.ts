export type Tlangs = [
    { 1: string, 2: "uz" },
    { 1: string, 2: "ru" },
    { 1: string, 2: "en" }
]

export type LangType = "uz" | "ru" | "en";

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

export type BannerUrlResType = {
    status: string,
    message: string,
    data: BannerUrlInfoType
}

export type BannerUrlInfoType = {
    id: number,
    image: string
}[]

export type SocialLinkResType = {
    status: string,
    message: string,
    data: SocialLinkInfoType
}

export type SocialLinkInfoType = {
    id: number,
    url_name: string,
    icon_code: string
}[]

export type ContactDataResType = {
    status: string,
    message: string,
    data: ContactDataInfoType
}

export type ContactDataInfoType = {
    id: number,
    address: string,
    destination: string,
    work_time: string,
    email: string,
    phone_first: string,
    phone_second: string,
    lunch_time: string,
    download: string,
    bank_detail: string
}[]

export type UsefulLinkResType = {
    status: string,
    message: string,
    data: UsefulLinkInfoType
}

export type UsefulLinkInfoType = {
    id: number,
    name: string,
    url_name: string
}[]

export type VirtualAdmissionProps = {
    id: number,
    url_name: string,
    name: string
}