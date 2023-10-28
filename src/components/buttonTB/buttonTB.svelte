<script>
    export let value
</script>

<span class="buttonTB material-symbols-outlined">{value}</span>

<style>
    .buttonTB {
	height: 24px;
	min-width: 24px;
	padding: 3px;
	text-align: center;
	position: relative;
	display: inline-block;
	color: rgba(0, 0, 0, 0.7);
	user-select: none;

	& i {
		font-size: 18px;
	}

	&:active,
	&.active {
		color: #50C878;
	}

	&:hover {
		background: #eee;
		cursor: pointer;
	}
}
</style>