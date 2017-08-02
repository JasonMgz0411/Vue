import Vue from 'vue'
import {
	row,
	col,
	Table,
	TableColumn
} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import table from './Table.vue'


Vue.component(row.name, row)
Vue.component(col.name, col)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)

new Vue({
	el: '#app',
	render: h => h(App)
})

new Vue({
	el:"#Table",
	render:h=>h(table)
});