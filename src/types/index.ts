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

export type VirtualAdmissionPropsType = {
    id: number,
    url_name: string,
    name: string
}

export type MenuItemInfoType = {
    menuName: string,
    to: string,
    subMenus: {
        subName: string,
        type: string,
        to: string
    }[]
}[]

export type MenuUrlResType = {
    status: string,
    message: string,
    data: MenuItemInfoType
}[]

export type PageUrlResType = {
    status: string,
    message: string,
    data: PageUrlInfoType
}

export type PageUrlInfoType = {
    slug: string,
    title: string,
    content: string
}

export type LeaderUrlResType = {
    status: string,
    message: string,
    data: LeaderUrlInfoType
}

export type LeaderUrlInfoType = {
    id: number,
    image: string,
    name: string,
    phone: string,
    position: string,
    work_day: string,
    biography: string,
    leader_category_id: string
}[]

export type FileUrlResType = {
    status: string,
    message: string,
    data: FileUrlInfoType
}

export type FileUrlInfoType = {
    id: number,
    file_icon: string,
    file_download: string,
    file_name: string,
    subcategory_id: string,
}[]

export type NewsUrlResType = {
    status: string,
    message: string,
    data: NewsUrlInfoType
}

export type NewsUrlInfoType = {
    id: number,
    title: string,
    image: string,
    slug: string,
    created_at: string,
    content: string,
    post_category_id: string
}[]

export type VideoUrlResType = {
    status: string,
    message: string,
    data: VideoUrlInfoType
}

export type VideoUrlInfoType = {
    id: number,
    video_url: string,
    name: string,
    created_at: string,
}[]

export type GalleryUrlResType = {
    status: string,
    message: string,
    data: GalleryUrlInfoType
}

export type GalleryUrlInfoType = {
    id: number,
    title: string,
    image: string,
    slug: string,
    created_at: string,
}[]

export type GalleryViewUrlResType = {
    status: string,
    message: string,
    data: GalleryViewUrlInfoType
}

export type GalleryViewUrlInfoType = {
    title: string,
    images: string[]
}

export type NewsDetailInfoType = {
    id: number,
    title: string,
    image: string,
    slug: string,
    created_at: string,
    content: string,
    post_category_id: string
}

export type NewsDetailResType = {
    status: string,
    message: string,
    data: NewsDetailInfoType
}

export type LatestVideoUrlResType = {
    status: string,
    message: string,
    data: LatestVideoUrlInfoType
}

export type LatestVideoUrlInfoType = {
    id: number,
    video_url: string,
    created_at: string,
    name: string
}

export type PhotoGalleryCardResType = {
    status: string,
    message: string,
    data: PhotoGalleryCardInfoType
}

export type PhotoGalleryCardInfoType = {
    id: string,
    title: string,
    image: string,
    slug: string,
    created_at: string
}

export type ManagementUrlResType = {
    status: string,
    message: string,
    data: ManagementUrlInfoType[]
}

export type ManagementUrlInfoType = {
    id: string,
    image: string,
    title: string,
    name: string,
    phone: string,
    fax: string,
    work_day: string,
    email: string,
    region_id: string
}

export type LeaderUrlPropsType = {
    id: number,
    image: string,
    name: string,
    phone: string,
    position: string,
    work_day: string,
    email?: string,
    biography: string
}

export type CardLinksResType = {
    status: string,
    message: string,
    data: CardLinksInfoType
}

export type CardLinksInfoType = {
    id: number,
    image: string,
    name: string,
    url_name: string
}[]

export type AdsImgUrlResType = {
    status: string,
    message: string,
    data: AdsImgUrlInfoType
}

export type AdsImgUrlInfoType = {
    id: number,
    image: string,
    ad_image: string
}[]