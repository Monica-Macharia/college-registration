import { ref } from 'vue';
import axios from "axios";

export default function useColleges(){
    
    const colleges = ref([])
 
    
    const getCourses = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/colleges')
        colleges.value = response.data.data
        
        //.data => object return but the get request
        
    }

   
      

    



    
    return {
        
        colleges,
        getCourses,
        

    }
}