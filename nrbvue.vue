Vue.component('employee-list', {  
    props: ['emps'], 
    template:
        `<u1>
        <li v-for="emp in emps">{{emp.name}}</li>
        </u1>`
})
