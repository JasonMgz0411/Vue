import Vue from 'vue'
import {
	row,
	col,
	Table,
	TableColumn,
	Pagination
} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import table from './Table.vue'
import page from './Page.vue'


Vue.component(row.name, row)
Vue.component(col.name, col)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Pagination.name, Pagination)

new Vue({
	el: '#app',
	render: h => h(App)
})

new Vue({
	el:"#Table",
	render:h=>h(table)
});

new Vue({
	el:"#page",
	render:h=>h(page)
});