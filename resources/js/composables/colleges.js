import { ref } from 'vue';
import axios from "axios";

export default function useColleges(){
    
    const colleges = ref([])
 
    
    // const getCourses = async () => {
    //     let response = await axios.get('http://127.0.0.1:8000/api/colleges')
    //     colleges.value = response.data.data
        
    //     //.data => object return but the get request
        
    // }
    const getCourses = () => {
        axios.get('http://127.0.0.1:8000/api/colleges')
          .then(response => {
            colleges.splice(0, colleges.length, ...response.data);
          });
      };

   
      

    



    
    return {
        
        colleges,
        getCourses,
        

    }
}