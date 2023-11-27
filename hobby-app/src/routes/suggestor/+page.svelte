<script>
	// @ts-nocheck

	let numPeople = '';
	let apiResult = '';

	const fetchData = async () => {
		try {
			let numPeopleQuery = parseInt(numPeople);
			let apiEndpoint = 'https://www.boredapi.com/api/activity';
			let response;
			let data;
			if (!isNaN(numPeopleQuery)) {
				if (numPeopleQuery >= 1 && numPeopleQuery <= 4) {
					response = await fetch(apiEndpoint + '?participants=' + numPeople);
					data = await response.json();
					apiResult = data;
					// numPeople = ""
					return;
				} else {
					alert('Please enter a number from 1-4');
					numPeople = '';
					return;
				}
			} else {
				if (numPeople == '') {
					response = await fetch(apiEndpoint);
					data = await response.json();
					apiResult = data;
					return;
				}
				alert('Please enter a number from 1-4');
				numPeople = '';
				return;
			}
		} catch (error) {
			console.error('Error fetching data', error);
		}
	};
</script>

<main>
	<h1>Activity Finder</h1>

	<p>Leave blank for suggestions for any number of people</p>
	<label for="numPeopleInput">Enter number of people:</label>
	<input type="text" id="numPeopleInput" bind:value={numPeople} />
    <br>
	<button on:click={fetchData}>Submit</button>

	{#if apiResult}
		<div>
			<p>You should try to {apiResult.activity.toLowerCase()}!</p>

			{#if apiResult.participants == 1}
				<p>It can be done alone.</p>
			{:else}
				<p>It requires {apiResult.participants} participants.</p>
			{/if}
		</div>
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

</style>
