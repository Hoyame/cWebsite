export interface ArticlesProps {
    img: any,
    title: string,
    new?: boolean
}

export interface PageArticlesProps {
    img: any,
    title: string,
    new?: boolean,
    description?: string,
    link?: string
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

export const articlesPropsList : ArticlesProps[] = [
    { img: "https://cdn.discordapp.com/avatars/643225867929124874/7b03c008c7de478d7acd707ab28ccfef.png?size=256", title: "Projet 1", new: true },
    { img: "https://cdn.discordapp.com/avatars/643225867929124874/7b03c008c7de478d7acd707ab28ccfef.png?size=256", title: "Projet 2" },
    { img: "https://cdn.discordapp.com/avatars/643225867929124874/7b03c008c7de478d7acd707ab28ccfef.png?size=256", title: "Projet 3" },
]

export const pageArticlesPropsList : PageArticlesProps[] = [
    { img: "https://cdn.discordapp.com/avatars/643225867929124874/7b03c008c7de478d7acd707ab28ccfef.png?size=256", title: "Projet 1", new: true },
    { img: "https://cdn.discordapp.com/avatars/643225867929124874/7b03c008c7de478d7acd707ab28ccfef.png?size=256", title: "Projet 2" },
    { img: "https://cdn.discordapp.com/avatars/643225867929124874/7b03c008c7de478d7acd707ab28ccfef.png?size=256", title: "Projet 3" },
]


