import { ICategory, IHospital } from ".";


export const CategoriesList : ICategory[] = [
    {
        id: 1,
        name: 'Cardiology',
        count : 10 ,
        img:  "https://images.unsplash.com/photo-1618939304347-e91b1f33d2ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
   {
        id : 2,
        name : 'Dermatology',
       count : 8 ,
       img: "https://images.unsplash.com/photo-1668062284652-f98903857aa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
   },
    {
        id : 3,
        name : 'Endocrinology',
        count : 5 ,
        img: "https://images.unsplash.com/photo-1581594693690-517d9a71e1f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
    },
    {
        id : 4,
        name : 'Gastroenterology',
        count : 12 ,
        img: "https://images.unsplash.com/photo-1555708982-8645ec9ce3cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
    },
    {
        id: 5,
        name: 'NeuroLogy',
        count : 10 ,
        img:  "https://images.unsplash.com/photo-1618939304347-e91b1f33d2ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
   {
        id : 6,
        name : 'Diabetese',
       count : 8 ,
       img: "https://images.unsplash.com/photo-1668062284652-f98903857aa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
   },
    {
        id : 7,
        name : 'Endocrinology',
        count : 5 ,
        img: "https://images.unsplash.com/photo-1581594693690-517d9a71e1f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
    },
    {
        id : 8,
        name : 'Child Care',
        count : 12 ,
        img: "https://images.unsplash.com/photo-1555708982-8645ec9ce3cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
    }
]


export const HospitalsList : IHospital[] = [
    {
        id : 1,
        name : 'Apollo Hospital',
        img: "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        address : 'Gate No. 2, Garden Ln ,Jasola, New Delhi',
        distance : 2.3,
        rating : 4.5,
        status : 'open',
        facilities : ['OPD' , 'ICU' , 'Emergency']
    },
    {
        id : 2,
        name : 'Fortis Hospital',
        img: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80",
        address : 'Sector 62, Phase - VIII, Noida',
        distance : 1.5,
        rating : 4.3,
        status : 'open',
        facilities : ['MRI' , 'Liver' , 'Emergency']
    },
    {
        id: 3,
        name: 'Max Super Speciality Hospital',
        img: "https://content.jdmagicbox.com/comp/delhi/m9/011pxx11.xx11.100331170609.g5m9/catalogue/max-super-speciality-hospital-saket-delhi-hospitals-sovivcg59z.jpg?clr=#336600",
        address: 'Max Super Speciality Hospital, Saket, New Delhi',
        distance: 12.5,
        rating: 4.3,
        status: 'closed',
        facilities: ['OPD', 'ICU', 'Neurology','Emergency']
    },
]