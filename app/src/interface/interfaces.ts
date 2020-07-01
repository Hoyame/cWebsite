export interface IArticlesProps {
   img: any,
   title: string,
   new?: boolean
}

export interface IPageArticlesProps {
   img: any,
   title: string,
   new?: boolean,
   description?: string,
   link?: string
}

export interface IOpenSourceProps {
   emoji: any,
   title: string,
   new?: boolean
}

export interface IPageOpenSourceProps {
   emoji: any,
   title: string,
   new?: boolean,
   description?: string,
   link?: string,
   language?: string
}

export interface IPageOpenSource {
   title?: string,
   img?: any,
   description?: any,
   new?: boolean,
   language?: string
}