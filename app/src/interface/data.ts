import { IOpenSourceProps, IPageOpenSource, IPageOpenSourceProps, IArticlesProps, IPageArticlesProps } from "./interfaces"

let imgTest = "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256"

export const OpenSourcePropsList : IOpenSourceProps[] = [
    { emoji: "💌", title: "OC Projet 1", new: true },
    { emoji: "🤣", title: "OC Projet 2" },
    { emoji: "😅", title: "OC Projet 3" },
]

export const PageOpenSourcePropsList : IPageOpenSourceProps[] = [
    { emoji: "💌", title: "OC Projet 1", new: true },
    { emoji: "🤣", title: "OC Projet 2" },
    { emoji: "😅", title: "OC Projet 3" },
]

export const PageOpenSourceProps : IPageOpenSource[] = [
   { title: 'Repo 1', img: imgTest, description: "Description du repo 1", new: true },
   { title: 'Repo 2', img: imgTest, description: "Description du repo 2", new: true },
   { title: 'Repo 3', img: imgTest, description: "Description du repo 3", new: true },
]

export const articlesPropsList : IArticlesProps[] = [
   { img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", title: "Projet 1", new: true },
   { img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", title: "Projet 2" },
   { img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", title: "Projet 3" },
]

export const pageArticlesPropsList : IPageArticlesProps[] = [
   { img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", title: "Projet 1", new: true },
   { img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", title: "Projet 2" },
   { img: "https://cdn.discordapp.com/avatars/643225867929124874/c09ae5e79244d21b4c40d504c500446c.webp?size=256", title: "Projet 3" },
]

