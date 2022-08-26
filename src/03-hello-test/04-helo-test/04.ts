export type MyFlatType = {
    livingRoom: boolean
    rooms: Array<RoomsType>
}

export type RoomsType = {
    name: string
    furniture: FurnitureType
    needsRepair?: boolean
}

export type FurnitureType = {
    bed?: boolean
    couch?: boolean
    drawers?: number
    cupboard?: number
    pc?: PcType
    gymStation?: boolean
    windows?: Array<WindowsType>
}
export type PcType = {
    present: boolean
    monitor: number
    audioSystem: boolean
}
export type WindowsType = {
    window1: boolean
    window2: boolean
}


export const myFlat = {
    livingRoom: true,
    rooms: [
        {
            name: 'my Room',
            furniture: {
                bed: true,
                drawers: 3,
                pc: {
                    present: true,
                    monitor: 2,
                    audioSystem: false,
                },
                gymStation: true,
                windows: [
                    {
                        window1: true,
                        window2: true,
                    },
                    {
                        window1: false,
                        window2: false,
                    }
                ],
            },
            needsRepair: false
        },
        {
            name: 'Brothers room',
            furniture: {
                bed: false,
                couch: true,
                cupboard: 2
            }
        }
    ]
}