

<script>
import useColleges from "../../composables/colleges"
import { onMounted } from "vue";

  export default{
    setup(){
      const {colleges, getCourses} = useColleges()

      onMounted(getCourses)

      return{
        colleges
      }
    }
  }

</script>


<template>
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
                     <button class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                        Select</button>
                  </td>
                                
              </tr>
            </template>  
          </tbody>
      </table>
  </div>
</template>


              