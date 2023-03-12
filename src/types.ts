export enum Type {
    Head = 'Head',
    Top = 'Top',
    Bottom = 'Bottom',
    Shoes = 'Shoes',
    Underwear = 'Underwear',
    Accessories = 'Accessories',
}

export enum Season {
    Summer = 'Summer',
    DemiSeason = 'Demi-season',
    Winter = 'Winter',
}

export interface Occasion {
    id: string
    title: string
    order: number
    items: Item[]
    isEveryday: boolean
}

export interface Item {
    id: string
    name: string
    type: Type
    season: Season[]
    order: number
    brand?: string
    price?: number
    startDate?: Date
    endDate?: Date
}

