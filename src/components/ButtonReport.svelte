<script>
	export let listProducts=[]
	let totalPagar=0
	let viewReport=false //enable view report
	let buttonReport=true //enable button report
	$:{
		if (listProducts.length > 0 ){
			Pay()
		}
	}
	const costoEnergia=0.6739


	const enableReport=()=>{ 
		viewReport=true 
		buttonReport=false
	}
	const disableReport=()=>{ 
		viewReport=false 
		buttonReport=true
	}
	const CalculePower=(power,cant)=>{
		return (power/1000)*cant
	}
	const CalculeCost=(time,days,power,cant)=>{
		let result=(time*days*CalculePower(power,cant))*costoEnergia
		result=Math.round(result*100)/100
		return result
	}
	const Pay=()=>{
		totalPagar=0
		let aux=0
		listProducts.forEach(p=>{
			aux=totalPagar+CalculeCost(p.TimeUse,p.DaysUse,p.potencia,p.cant)
			totalPagar=Math.round(aux*100)/100
		})
	}

</script>

<div>
	{#if buttonReport }
		<button on:click={enableReport}>Ver reporte</button>
	{:else}
		<button on:click={disableReport}>ocultar reporte</button>
	{/if}

	{#if viewReport}
		{#if listProducts.length == 0 }
			<h1 class="text-danger">no hay consumo</h1>
		{:else}
			<table>
			<tr>
				<th>artefacto</th>
				<th>cantidad</th>
				<th>potencia KW.h</th>
				<th>costo mensual S/</th>
			</tr>
			{#each listProducts as {tittleCard,potencia,TimeUse,DaysUse,cant},id (id)}
				<tr>
					<td>{tittleCard}</td>
					<td>{cant}</td>
					<td>{CalculePower(potencia,cant)}</td>
					<td>{CalculeCost(TimeUse,DaysUse,potencia,cant)}</td>
				</tr>
			{/each}
			<tr>
				<td colspan="3">Total a pagar:</td>
				<td>{totalPagar}</td>
			</tr>
			</table>
		{/if}
	{/if}
</div>

<style>
	div {
		margin-bottom:8px;
	}
	table{
		margin:0 auto;
		overflow-x:auto;
	}
	table,th,td {
		border:1px solid #fc5f2b;
		border-collapse:collapse;
	}
	th,td {
		padding: 4px 10px;
	}
	th {
		background-color:#fc5f2b;
		color:#fff;
	}
	.text-danger{
		color:#fff;
		background-color:#f24e49;
		width:320px;
		border-radius:20px 0;
		height:50px;
		margin:0 auto;

	}

	button {
		width:320px;
		height:50px;
		font-size:20px;
		font-weight:bold;
		background-color:#f08d46;
		color:#fff;
		border:2px solid #fff;
		border-radius:20px;
		transition:.7s;
	}
	button:hover{
		background-color:#ffa769;
		color:#333;
		border:2px solid #333;
	}
</style>

