export interface ICategory {
    id: number;
    name: string;
    img: string; // path to image
    count ?: number; // number of hospitals in this category
}

// export interface ICategoryList

export interface IHospital {
    id: number;
    name: string;
    img : string;
    address: string;
    distance : number;
    rating : number;
    status : 'open' | 'closed';
    facilities : string[];
    // categories : ICategory[]; //TODO: Add this later where we have to show categories of hospital
}