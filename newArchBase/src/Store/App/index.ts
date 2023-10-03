import { ICategory, IHospital } from "@/ApiServices/interfaces";
import { IAddress, IPredection } from "@/Containers/SharedContainer/Res"; //TODO: Make it more generic
import { createSlice } from "@reduxjs/toolkit";

export interface IAppReducer{
    location : IAddress | IPredection | null,
    recentLocations : Array<IAddress | IPredection>  ,
    category ?: ICategory,
    hospital ?: IHospital,
}

const initialObj: IAppReducer = {
    location  : null,
    recentLocations : [],
}

const slice = createSlice({
    name: 'app',
    initialState: initialObj,
    reducers: {
        setLocation : (state, { payload }) => {
            state.location = payload;
            //TODO: following code is repeated in updateRecentLocations reducer, make it more generic
            state.recentLocations?.unshift(payload);
            //remove duplicate locations
            state.recentLocations = state.recentLocations?.filter((location, index, self) =>
                index === self.findIndex((t) => (
                    t.place_id === location.place_id
                ))
            )
            if (state?.recentLocations?.length > 5) {
                state.recentLocations?.pop();
            }
        },
        clearLocation : (state) => {
            state.location = null;
        },
        updateRecentLocations : (state, { payload }) => {
            //push at the top and remove the last one if the length is more than 5
            state.recentLocations?.unshift(payload);
            if(state?.recentLocations?.length > 5){
                state.recentLocations?.pop();
            }
        },
        clearRecentLocations : (state) => {
            state.recentLocations = [];
        },
        setCategory : (state, { payload }) => {
            state.category = payload;
        },
        clearCategory : (state) => {
            state.category = undefined;
        },
        setHospital : (state, { payload }) => {
            state.hospital = payload;
        },
        clearHospital : (state) => {
            state.hospital = undefined;
        },

    }


})

export const { 
    setLocation, 
    clearLocation, 
    updateRecentLocations, 
    clearRecentLocations, 
    setCategory, 
    clearCategory,
    setHospital,
    clearHospital
} = slice.actions

    
export default slice.reducer