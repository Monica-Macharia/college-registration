

<script>
import useColleges from "../../composables/colleges"
import { onMounted, reactive, ref } from "vue";
import axios from "axios";

  export default{
    setup(){
      // const {colleges, getCourses } = useColleges()
      const colleges = ref([])
      const form = reactive({
       
            'name': '',
            'tutor_name': '',
            'hours_total': '',
            
    })
     
    const getCourses = () => {
            axios.get('http://127.0.0.1:8000/api/colleges')
              .then(response => {
                
                colleges.value = colleges.value.concat(response.data.data);
              });
          };

         
       

        //pushing data to form upon select button click
        const selectedCourse= (course) =>{
            form.id = course.id;
            form.name = course.name;
            form.tutor_name = course.tutor_name;
            form.hours_total = course.hours_total;
        };

        //cancel form
        const cancelCourse= () =>{
            form.name = "";
            form.tutor_name = "";
            form.hours_total = "";
        };

        //delete course
        // const deleteCourse = async (id) =>{
        //     await axios.delete(`http://127.0.0.1:8000/api/colleges/${id}`)
        // }
        // const destroyCourse = async (id)=>{
        //   await deleteCourse(id);
          
        // }

//     const deleteCourse = (id) => {
//     axios.delete(`http://localhost:8000/api/colleges/${id}`)
//     .then(response => {
//       const item = colleges.value.findIndex(course => course.id === id);
//       if (item !== -1) {
//         colleges.value.splice(item, 1);
//       }
//     });
// };


    const deleteCourse = async (id) => {
      axios.delete(`http://localhost:8000/api/colleges/${id}`)
    .then(response => {
      const index = colleges.value.findIndex(course => course.id === id);
      if (index !== -1) {
        colleges.value.splice(index, 1);
      }
    })
    .catch(error => {
      console.error(error);
    });
};

   
          
        onMounted(getCourses);
     
      return{
        colleges,
       
        form,
        selectedCourse,
        cancelCourse,
        deleteCourse,
        
      }
    }
  }



</script>


<template>

<form class="space-y-6" >
        <div class="space-y-4 rounded-md shadow-sm">
          
          <div>
                <label for="name" class="hidden text-sm font-medium text-gray-700">Id</label>
                <div class="mt-1">
                    <input type="text" name="id" id="id" placeholder="Enter Course Id"
                           class="hidden mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="form.id">
                </div>
            </div>

          <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Course Name</label>
                <div class="mt-1">
                    <input type="text" name="name" id="name" placeholder="Enter Course Name"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="form.name">
                </div>
            </div>

            <div>
                <label for="teacher_name" class="block text-sm font-medium text-gray-700">Teacher Name</label>
                <div class="mt-1">
                    <input type="text" name="teacher_name" id="teacher_name" placeholder="Enter Teacher Name"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          v-model="form.tutor_name">
                </div>
            </div>
            <div>
                <label for="hours_total" class="block text-sm font-medium text-gray-700">Total of Hours</label>
                <div class="mt-1">
                    <input type="number" name="hours_total" id="hours_total" placeholder="Enter Total Hours"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="form.hours_total">
                </div>
            </div>
            <div class="mr-2 inline-flex justify-around  px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
            <!-- <button type="submit"
                class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
            Edit
        </button> -->
    
        <button type="submit" @click="deleteCourse(form.id)"
                class="inline-flex items-center  px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
            Remove
        </button>
      
        <!-- <button type="submit" @click="cancelCourse"
                class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
            Cancel
        </button> -->
      </div>
        </div>
    </form>



  
  <div class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md">
      <div class="flex place-content-end mb-4">
        
      </div>
      
      <table class="min-w-full border divide-y divide-gray-200">
          <thead>
         
          <tr>
              <th class="px-6 py-3 bg-gray-50">
                  <span
                      class="text-xs font-large tracking-wider leading-4 text-left text-dark">Unique Code</span>
              </th>
              <th class="px-6 py-3 bg-gray-50">
                  <span
                      class="text-xs font-large  tracking-wider leading-4 text-left text-dark">Course Name</span>
              </th>
              <th class="px-6 py-3 bg-gray-50">
                  <span
                      class="text-xs font-large  tracking-wider leading-4 text-left text-bold text-dark ">Teacher Name</span>
              </th>
              <th class="px-6 py-3 bg-gray-50">
                  <span
                      class="text-xs font-large  tracking-wider leading-4 text-left text-dark">Total of Hours</span>
              </th>
              <th class="px-6 py-3 bg-gray-50">
                  <span
                      class="text-xs font-large  tracking-wider leading-4 text-left text-dark">Select</span>
              </th>
              <th class="px-6 py-3 bg-gray-50">
              </th>
          </tr>
          </thead>

          <tbody class="bg-white divide-y divide-gray-200 divide-solid">
            <template v-for="course in colleges" :key="course.id">
              <tr class="bg-white">
                  <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                  {{ course.id }}
                  </td>
                  <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                    {{ course.name }}
                  </td>
                  <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                     {{ course.tutor_name }}
                  </td>
                  <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                     {{ course.hours_total }}
                  </td>
                  <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                     <button @click="selectedCourse(course)" class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                        Select</button>
                  </td>
                                
              </tr>
            </template>  
          </tbody>
      </table>
  </div>
</template>


              