import Vue from 'Vue';
import test from '../components/test.vue';
Vue.config.debug = true;
window.onload = function() {
	new Vue({
		el: '#test',
		components: {
			'my-component': test
		}
	});
};