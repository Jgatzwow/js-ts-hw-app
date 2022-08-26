import {myFlat, MyFlatType} from './04';


let myFlat1: MyFlatType;


beforeEach(() => {
    myFlat1 = {
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
                    cupboard: 2,
                }
            },
            {
                name: 'Brothers room',
                furniture: {
                    bed: false,
                    couch: true,
                    cupboard: 2,
                }
            }
        ]
    }

})


test('My flat should have 2 rooms', () => {

    expect(myFlat.rooms.length).toBe(2)

})