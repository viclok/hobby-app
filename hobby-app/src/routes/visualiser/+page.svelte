<script>
    export let data


</script>

<form method="post" action="?/create">
    <label for="hobby">Hobby</label>
    <input type="text" id="hobby" name="hobby"/>
    
    <label for="desirability">Desirability</label>
    <input type="number" id="desirability" name="desirability"/>
    
    <label for="difficulty">Difficulty</label>
    <input type="number" id="difficulty" name="difficulty"/>
    
    
    <label for="time">Time</label>
    <input type="number" id="time" name="time"/>
    
    <button type="submit">Submit</button>
</form>

<h1>Hobbies</h1>
<div>
    <ol>
        {#each data?.records as record}
        <li>{`Hobby: ${record.hobby}`}</li>
        {/each}
    </ol>
</div>



