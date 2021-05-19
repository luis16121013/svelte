<script>
	export let urlImage=""
	export let tittleCard=""
</script>
<div class="container-card">
	<p>{tittleCard}</p>
	<div class="content-card">
		<div class="content-img">
			<img src={`./${urlImage}`} alt="img">
		</div>
		<div class="content-data">
			<h3>Cantidad:</h3>
			<h1>0</h1>
		</div>
	</div>
	<button class="btn-add">Agregar</button>
	<button class="btn-del">Quitar</button>
</div>

<style>
.container-card {
min-width:320px;
min-height:230px;
border:1px solid peru;
margin:4px;
border-radius:5px;
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
	height:140px;
	border:1px solid cyan;
	margin:6px 0;
}

img {
width:130px;
border-radius:20%;
}
.content-data {
width:100%;
color:#444;
}

button {
margin:0;
padding:0;
width:40%;
height:2em;
color:#fff;
font-weight:bold;
border-radius:8px;
}
.btn-add{
background-color:green;
}
.btn-del{
background-color:red;
}
@media (min-width: 640px) {
.container-card {
	max-width:340px;
}
.content-card {
}
</style>
