<script>
	import Card from './components/Card.svelte'
	import {listProducts} from './storage/Storage.js'

	//adding product cant
	const add=(position)=>{
		listProducts[position].cant +=1 
	}
	//deleting product cant
	const del=(position)=>{
		if(listProducts[position].cant <= 0){
			listProducts[position].cant = 0
			return
		}
		listProducts[position].cant -=1 
	}

</script>

<main>
	<h1>Unamad</h1>
<div>
	{#each listProducts as p ,id}
		<Card 
			eventAdd={()=>add(id)}
			eventDel={()=>del(id)}
			{...p}
		/>
	{/each}
</div>
<h3>luis angel pfuño canales</h3>
<p>My repository <a href="https://github.com/luis16121013">github</a> </p>

</main>

<style>
	main {
		text-align: center;
		max-width: 400px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 300;
	}
	h3 {
		color: #ff3e00;
	}
	div {
		display:flex;
		flex-direction:column;
		flex-wrap:wrap;
		align-items:center;
	}
	p{
		margin-bottom:20px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
		div {
			flex-direction:row;
			justify-content:center;
		}
	}
</style>
