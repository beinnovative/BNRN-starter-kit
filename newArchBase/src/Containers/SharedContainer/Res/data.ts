import { IAddress, ISearchFilter } from ".";


export const recommendedAddress : IAddress[] = [
    {
        address : "Block L, Laxmi Nagar , Nw Delhi , Delhi , India",
        lat : 28.6305,
        lng : 77.2778
    },
    {
        address : "Alistonia Apartments, Sector 49, Gurugram, Haryana, India",
        lat : 28.4024,
        lng : 77.0405
    },
    {
        address: "Amex Apartment Noida, sector 70 Gautam Buddha Nagar. Uttar Pradesh, India",
        lat : 28.6315,
        lng : 77.2167
    },
]

export const recentAddress : IAddress[] = [
    {  
        address : "Block L, Laxmi Nagar , Nw Delhi , Delhi , India",
        lat : 28.6305,
        lng : 77.2778
    },
    {
        address : 'Loni Road, Shahdara, New Delhi, Delhi, India',
        lat : 28.6833,
        lng : 77.3167
    },
    
]



export const SearchFilters : ISearchFilter[] = [
    {
        id : 1,
        title : "ENT Care",
        value : "entCare",
    },
    {
        id : 2,
        title : "Dental Care",
        value : "dentalCare",
    },
    {
        id : 3,
        title : "Top Rated",
        value : "topRated",
    },
    {
        id : 4,
        title : "24x7",
        value : "24x7",
    },
    {
        id : 5,
        title : "Cashless",
        value : "cashless",
    },
    {
        id : 6,
        title : "Online Booking",
        value : "onlineBooking",
    },
        
]