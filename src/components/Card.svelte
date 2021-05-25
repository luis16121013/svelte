<script>
	import ContentCard from './ContentCard.svelte'
	export let urlImage=""
	export let tittleCard=""
	export let cant=0
	export let TimeUse=0
	export let DaysUse=0

	export let eventAdd
	export let eventDel

	export let IncrementTime
	export let DecrementTime
	export let IncrementDays
	export let DecrementDays
	export let ChangeNumberTime
	export let ChangeNumberDay

	$: btnBlock = cant>0?'':'blocked';
	$: textDisable = cant>0?'':'offText';
	//$:if(cant==0){
	//	TimeUse=0
	//	TimeUse=0
	//}
</script>

<div class="container-card">
	<p>{tittleCard}</p>
	<div class="content-card">
		<div class="content-img">
			<img src={`./${urlImage}`} alt="img">
		</div>
		<div class="content-data">
			<h3 class={`${textDisable}`}>Cantidad:</h3>
			<h1 class={`${textDisable}`}>{cant}</h1>
		</div>
	</div>
	{#if cant !== 0}
		<ContentCard 
			TimeUse={TimeUse}
			DaysUse={DaysUse}
			IncrementTime={IncrementTime}
			DecrementTime={DecrementTime}
			IncrementDays={IncrementDays}
			DecrementDays={DecrementDays}
			ChangeNumberTime={ChangeNumberTime}
			ChangeNumberDay={ChangeNumberDay}
		/>
	{/if}
	<button 
		on:click={eventAdd}
		class="btn-add">+1</button>
	<button 
		on:click={eventDel}
		class={`btn-del ${btnBlock}`}
	>-1</button>
</div>

<style>
	.container-card {
		min-width:320px;
		border:2px solid peru;
		margin:4px;
		border-radius:5px;
		background: linear-gradient(to right,#fff,#ffe8bf);
	}
	.container-card:hover {
		background: linear-gradient(to right,#ffba61,#ffe8bf);
	}
	p {
		padding:0;
		margin:2px;
		height:2em;
		line-height:2em;
		display:block;
		background-color:#fc5f2b;
		color:#fff;
		font-size:bold;
		text-transform:uppercase;
		border-radius:5px;
	}
	.content-card {
		box-sizing:border-box;
		display:flex;
		width:100%;
		height:120px;
		margin:6px 0;
	}

	img {
		width:110px;
		height:110px;
		padding-left:8px;
		border-radius:50%;
		transition:0.5s;
	}
	img:hover {
		border-radius:20%;
	}
	.content-data {
		width:100%;
		color:#444;
	}
	h3 { margin:8px 0 0; }
	h1 { line-height:20px; }
	.offText {
		color:#b3abab;
	}

	button {
		margin:10px 0;
		padding:0;
		width:40%;
		height:2.5em;
		color:#fff;
		border-color:#fff;
		font-weight:bold;
		border-radius:25px;
		margin-bottom:10px;
		transition:.3s;
	}
	.btn-add{
		background-color:#67db40;
	}
	.btn-del{
		background-color:#ff7c3b;
	}
	.blocked {
		background-color:#ffac70;
		border-color:#fff;
	}
	.btn-add:hover{
		background-color:#63d67f;
		color:#333;
		border-color:#333;
	}
	.btn-del:hover{
		background-color:#ff7936;
		color:#333;
		border-color:#333;
	}
	.blocked:hover {
		background-color:#ffac70;
		color:#fff;
		border-color:#fff;
	}
	@media (min-width: 640px) {
		.container-card {
			max-width:340px;
		}
	}
</style>
