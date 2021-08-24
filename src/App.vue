<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretiva text'"></p>
		<p v-html="'usando diretiva <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque>Usando diretiva personalizada</p>
		<p v-segundo="'red'">Usando diretiva com binding</p>
		<p v-segundo="cor">Usando diretiva com binding e variavel em data</p>
		<hr>
		<p v-terceiro="cor">diretiva sem arguemento</p>
		<p v-terceiro:tipo1.atrasar="cor2">diretiva com arguemento</p>
		<p v-terceiro:tipo1.atrasar.alternar="cor2">diretiva com arguemento</p>
		<hr>
		<p v-destaque-local.atrasar="{ cor1: 'blue', cor2:'red',atraso:1000, intervalo:500}">diretiva local</p>
		<p v-destaque-local.atrasar.alternar="{ cor1: 'blue', cor2:'red',atraso:1000, intervalo:500}">diretiva local</p>
	</div>
</template>

<script>
export default {
	componentes:{},
	directives:{
		'destaque-local':{
			bind(el,binding,vnode){
			const aplicarCor=cor=>
			{
					if(binding.arg==='tipo1')
				{
					el.style.backgroundColor=cor
					el.style.color='#bbb'
					el.style.borderRadius='15px'
				}
					else
				{
					el.style.backgroundColor=cor
					el.style.color='#bbb'
					el.style.borderRadius='20px'
				}
				
			}
			
		let atraso=0
		if(binding.modifiers['atrasar']) atraso=binding.value.atraso
		

const cor1=binding.value.cor1
const cor2=binding.value.cor2
let corAtual=cor1
		
		setTimeout(()=>{
			if(binding.modifiers['alternar']) {
					setInterval(() => {
						corAtual=corAtual ===cor1?cor2:cor1
							aplicarCor(corAtual)
						}, binding.value.intervalo);
				}else
				{
					aplicarCor(binding.value.cor1)
				}
			
			},atraso)
		}

	}
},

	data(){
		return{
			cor:'blue',
			cor2:'green'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
