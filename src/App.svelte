<script>
	import Card from './components/Card.svelte'
</script>

<main>
	<h1>Unamad</h1>
<div>
	<Card urlImage="/licuadora-1.png"/>
	<Card urlImage="/lavadora-1.png"/>
	<Card urlImage="/plancha-1.jpg"/>
	<Card urlImage="/licuadora-1.png"/>
	<Card urlImage="/lavadora-1.png"/>
</div>
<h3>luis angel pfuño canales</h3>
<p>My repository <a href="https://github.com/luis16121013">github</a> </p>

</main>

<style>
main {
text-align: center;
padding: .2em;
max-width: 400px;
margin: 0 auto;
border:1px solid orange;
}

h1 {
color: #ff3e00;
text-transform: uppercase;
font-size: 4em;
font-weight: 100;
}
h3 {
color: #ff3e00;
}
div {
display:flex;
border:1px solid red;
flex-direction:column;
flex-wrap:wrap;
align-items:center;
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
