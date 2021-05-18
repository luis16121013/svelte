<script>
	export let urlImage=""
</script>
<div class="container-card">
	hola
	<div class="content-card">
		<div>
			<img src={urlImage} alt="img">
		</div>
		<div>
			description
		</div>
	</div>
</div>

<style>
.container-card {
min-width:320px;
min-height:200px;
border:1px solid peru;
margin:4px;
border-radius:5px;
}
.content-card {
	box-sizing:border-box;
	display:flex;
	width:100%;
	height:200px;
	border:1px solid cyan;
}

img {
width:130px;
}

@media (min-width: 640px) {
.container-card {
	max-width:340px;
}
.content-card {
}
</style>
