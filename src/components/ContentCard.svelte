<script>
	export let TimeUse=0
	export let DaysUse=0
	export let IncrementTime
	export let DecrementTime
	export let IncrementDays
	export let DecrementDays
	export let ChangeNumberTime
	export let ChangeNumberDay
</script>
<div class='content'>
	<div>
		<h3>Horas de uso diaria</h3>
		<button on:click={IncrementTime}>+</button>
		<input id="timeId"
			bind:value={TimeUse} 
			on:input={ChangeNumberTime} 
			type="text"/>
		<button on:click={DecrementTime}>-</button>
	</div>
	<div>
		<h3>Dias al mes</h3>
		<button on:click={IncrementDays}>+</button>
		<input id="dayId"
			bind:value={DaysUse}
			on:input={ChangeNumberDay} 
			type="text"/>
		<button on:click={DecrementDays}>-</button>
	</div>
</div>

<style>
	.content {
		margin:0 auto;
		width:95%;
		border:1px solid #fc7649;
		border-radius:0 25px;
	}
	div div {
		margin:2px auto;
	}
	h3 {
		margin: 0 0 10px;
		padding: 0;
		color:#fc7649;
	}
	button {
		width:40px;
		height:40px;
		color:#fff;
		background-color:#65e678;
		font-weight:bold;
		border-radius:50%;
		border-color:#fff;
	}
	button:hover {
		background-color:#fcf458;
		color:#333;
		border-color:#333;
	}
	input[type="text"]{
		width:55%;
		border:1px solid #fc5f2b;
		text-align:center;
		font-weight:bold;
		color:#fc5f2b;
		border-radius:20px;
		outline:none;
	}
</style>
