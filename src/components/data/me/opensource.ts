export interface OpenSourceProps {
    emoji: any,
    title: string,
    new?: boolean
}

export interface PageOpenSourceProps {
    emoji: any,
    title: string,
    new?: boolean,
    description?: string,
    link?: string
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

export const OpenSourcePropsList : OpenSourceProps[] = [
    { emoji: "💌", title: "OC Projet 1", new: true },
    { emoji: "🤣", title: "OC Projet 2" },
    { emoji: "😅", title: "OC Projet 3" },
]

export const PageOpenSourcePropsList : PageOpenSourceProps[] = [
    { emoji: "💌", title: "OC Projet 1", new: true },
    { emoji: "🤣", title: "OC Projet 2" },
    { emoji: "😅", title: "OC Projet 3" },
]
