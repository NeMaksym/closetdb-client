import { v4 as uuidv4 } from 'uuid';

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
        id: uuidv4(),
        title: "Everyday",
        items,
        order: 0,
        isEveryday: true,
    },
    {
        id: uuidv4(),
        title: "Birthday",
        items,
        order: 1,
        isEveryday: false,
    },
    {
        id: uuidv4(),
        title: "Wedding",
        items,
        order: 2,
        isEveryday: false,
    },
]
