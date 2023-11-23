<script>
    // @ts-nocheck
    
        let numPeople = ""
        let apiResult = ""
        
        const fetchData = async () => {
            try {
    
                let numPeopleQuery = parseInt(numPeople)
                if(!isNaN(numPeopleQuery)) {
                    let apiEndpoint = "https://www.boredapi.com/api/activity"
                    let response
                    let data
                    if (numPeopleQuery == 0) {
                        response = await fetch(apiEndpoint)
                        data = await response.json()
                        apiResult = data
                        numPeople = ""
                        return
                    } else if (numPeopleQuery > 0) {
                        response = await fetch(apiEndpoint + "?participants=" + numPeople)
                        data = await response.json()
                        apiResult = data
                        numPeople = ""
                        return
                    } else {
                        alert("Please enter a number greater than 0")
                        numPeople = ""
                        return
                    }
                    
    
                } else {
                    alert("Please enter a valid number")
                    numPeople = ""
                    return
                }
                
            } catch (error) {
                console.error("Error fetching data", error)
            }
        }
    </script>
    
    <main>
        <h1>Activity Finder</h1>
    
        <p>Enter 0 for any number of participants</p>
        <label for="numPeopleInput">Enter number of people:</label>
        <input type="text" id="numPeopleInput" bind:value={numPeople}/>
    
        <button on:click={fetchData}>Submit</button>
    
        {#if apiResult}
            <div>
                <p>You should try to {apiResult.activity.toLowerCase()}!</p>
    
                {#if apiResult.participants == 1}
                    <p>It can be done  alone.</p>
                {:else}
                    <p>It requires {apiResult.participants} participants.</p>
                {/if}
            </div>
        {/if}
    </main>

    <style>
        main {
            display:flex;
            flex-direction: column;
            justify-content:center;
            align-items:center;
            height:100vh;
        }    
    </style>
    