import { Share } from "react-native";

const useShare =  () => {
   const socialShare = async(url: string) => {
       try{
        let result = await Share.share({
            message: url,
        });
       }catch (error) {
           console.log(error);
       }
   }

   return {
         socialShare
   }
}

export default useShare;