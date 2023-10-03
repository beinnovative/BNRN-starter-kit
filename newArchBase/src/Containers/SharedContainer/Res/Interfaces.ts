export interface IAddress{
    address : string,
    lat ?: number,
    lng ?: number,
    place_id ?: string,

}

export interface IPredection {
    description : string,
    id : string,
    place_id : string,
    reference : string,
    structured_formatting : {
        main_text : string,
        secondary_text : string,
    },
    terms : {
        offset : number,
        value : string,
    }[],
    types : string[],

}

export interface ISearchFilter {
    id : string | number,
    title : string,
    img ?: string,
    value ?: string,
}

