import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque',{
	bind(el,binding,vnode){
		el.style.backgroundColor='#444'
		el.style.color='#bbb'
		el.style.borderRadius='15px'
	}
}),
Vue.directive('segundo',{
	bind(el,binding,vnode){
		el.style.backgroundColor=binding.value
		el.style.color='#bbb'
		el.style.borderRadius='15px'
	}
}),
Vue.directive('terceiro',{
	bind(el,binding,vnode){
		

		let atraso=0
		if(binding.modifiers['atrasar']) atraso=3000
		setTimeout(()=>{
			if(binding.arg==='tipo1')
		{
		el.style.backgroundColor=binding.value
		el.style.color='#bbb'
		el.style.borderRadius='15px'
		}
		else
		{
			el.style.backgroundColor=binding.value
		el.style.color='#bbb'
		el.style.borderRadius='20px'
		}
		},atraso)
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
