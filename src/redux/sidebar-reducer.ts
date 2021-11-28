import {ActionsType, DialogsType, SidebarType} from "./store";

let initialState: SidebarType = {
    friends: [
        {id: 1, name: 'Irina', avatar: 'https://img.joinfo.com/i/2018/04/5ad83d406a33d.jpg'},
        {id: 2, name: 'Diana', avatar: 'https://kor.ill.in.ua/m/610x385/2254601.jpg'},
        {
            id: 3,
            name: 'Max',
            avatar: 'https://i.pinimg.com/originals/0e/41/52/0e4152973ef78326aca365659e8d97a8.png'
        }
    ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionsType) => {
    return state
}