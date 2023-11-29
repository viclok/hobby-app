<script>
    export let data


</script>

<form id="hobbyInput" method="post" action="?/create">
    <div>
        <label for="hobby">Hobby</label>
        <input type="text" id="hobby" name="hobby"/>
    </div>

    <div>
        <label for="desirability">Desirability</label>
        <input type="number" id="desirability" name="desirability"/>
    </div>

    <div>
        <label for="difficulty">Difficulty</label>
        <input type="number" id="difficulty" name="difficulty"/>
    </div>

    <div>
        <label for="time">Time</label>
        <input type="number" id="time" name="time"/>
    </div>
    
    <button type="submit" style="align-self: flex-start;">Submit</button>
</form>

<h1>Hobbies</h1>
<div>
    <ol>
        {#each data?.records as record}
        <li>{`Hobby: ${record.hobby}`}</li>
        {/each}
    </ol>
</div>

<style>
    #hobbyInput {
        display: flex;
        flex-direction: column;
    }
</style>



