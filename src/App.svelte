<script>
	import Card from './components/Card.svelte'
	import {listProducts} from './storage/Storage.js'
	import ButtonReport from './components/ButtonReport.svelte'

	$: Products=listProducts.filter(p=>p.cant>0)
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

	const IncrementDays=(p)=>listProducts[p].DaysUse++;
	const IncrementTime=(p)=>listProducts[p].TimeUse++;
	const DecrementDays=(p)=>{ 
		let Day=listProducts[p].DaysUse
		listProducts[p].DaysUse=validateDecrement(Day) 
	}
	const DecrementTime=(p)=>{ 
		let time=listProducts[p].TimeUse
		listProducts[p].TimeUse=validateDecrement(time) 
	}
	//funcion que valida el decremento no menor a 0
	const validateDecrement=(number)=>number<=1?1:number-1

	const ChangeNumberTime=(e,p)=>{
		let number=e.target.value
		number=replaceNumber(number)
		if(number===0){
			listProducts[p].TimeUse=0
		}else{
			listProducts[p].TimeUse=number
		}
	}
	const ChangeNumberDay=(e,p)=>{
		let number=e.target.value
		listProducts[p].DaysUse=replaceNumber(number)*1
	}
	const replaceNumber=(number)=>{
		let data=number.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');
		return data
	}

</script>

<main>
	<h1>Unamad</h1>
	<ButtonReport listProducts={Products} />
<div>
	{#each listProducts as p ,id (id)}
		<Card 
			{...p}
			eventAdd={()=>add(id)}
			eventDel={()=>del(id)}

			IncrementTime={()=>IncrementTime(id)}
			DecrementTime={()=>DecrementTime(id)}
			IncrementDays={()=>IncrementDays(id)}
			DecrementDays={()=>DecrementDays(id)}
			ChangeNumberTime={(e)=>ChangeNumberTime(e,id)}
			ChangeNumberDay={(e)=>ChangeNumberDay(e,id)}
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
