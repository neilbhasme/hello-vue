
Vue.component('employee-list', {  
    props: ['emps'], 
    template:
        `<u1>
        <li v-for="emp in emps">{{emp.name}}</li>
        </u1>`
})

//import employeelist from './nrbvue'
var app = new Vue({
    el: '#root',

    component: [
    'employee-list'
    ],
	data: {
        emps: [
            { name: 'Teija'},
            { name: 'Petteri'},
            { name: 'neil'}
        ],
        newEmployee: ''
    },
    methods: {
        addEmployee: function() {
            this.emps.push({name: this.capUpperEmp(this.newEmployee)})
            this.newEmployee = ''
        },
        capUpperEmp: function(string){   //we capitalize before we store it
            return string.charAt(0).toUpperCase() + string.slice(1)
        }
    },
    filters: {
        firstCapitalize: function(value){    //filter, so value does not change whatever is stored, only display is changed as its called in DOM
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
})