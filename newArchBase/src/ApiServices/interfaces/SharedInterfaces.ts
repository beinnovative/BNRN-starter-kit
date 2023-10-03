export interface IBaseProfile {
    name: string,
    profileImg: string,
    userId: string,
}

export interface IReview {
    profile: IBaseProfile,
    ratingId: string,
    rating: number,
    review: string,
    date: Date | string,
    likes: number,
    dislikes: number,
}

export interface ICategory {
    id: number;
    name: string;
    img: string; // path to image
    count?: number; //TODO: Added at the time of return, number of hospitals in this category
}

// export interface ICategoryList

export interface IHospital { //Note these are the return data types , not Database data types
    id: number;
    name: string;
    img: string;
    address: string;
    distance: number; //calculated at the time of return based on location of both user and hospitals
    rating: number;
    status: 'open' | 'closed';
    facilities: string[];
    // categories : ICategory[]; //TODO: Add this later where we have to show categories of hospital
}