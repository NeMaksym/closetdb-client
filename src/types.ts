export enum Type {
    Head = 'head',
    Top = 'top',
    Bottom = 'bottom',
    Shoes = 'shoes',
    Underwear = 'underwear',
}

export enum Season {
    Summer = 'summer',
    DemiSeason = 'demi-season',
    Winter = 'winter',
}

export interface Occasion {
    id: string
    title: string
    order: number
    items: Item[]
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

const items: Item[] = [
    {
      id: '1',
      name: "T-Shirt",
      type: Type.Top,
      season: [Season.Summer],
      order: 1,
    },
    {
      id: '1',
      name: "Pants",
      type: Type.Bottom,
      season: [Season.Summer, Season.DemiSeason, Season.Winter],
      order: 2,
    },
    {
        id: '1',
        name: "Shoes",
        type: Type.Shoes,
        season: [Season.Summer, Season.DemiSeason],
        order: 3,
    },
    {
        id: '1',
        name: "Underwear",
        type: Type.Underwear,
        season: [Season.Summer, Season.DemiSeason, Season.Winter],
        order: 4,
    },
  ]
  
export const occasions: Occasion[] = [
    {
      id: '1',
      title: "Birthday",
      items,
      order: 1,
    },
    {
        id: '2',
        title: "Wedding",
        items,
        order: 2,
    },
]

export const everydayOccasion: Occasion = {
    id: '3',
    title: "Everyday",
    items,
    order: 0,
}