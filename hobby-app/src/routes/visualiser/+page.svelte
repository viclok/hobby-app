<script>
    // import PocketBase, { AdminService } from 'pocketbase'
    // import { PUBLIC_POCKETBASEEMAIL, PUBLIC_POCKETBASEPASSWORD } from "$env/static/public"

    // const pb = new PocketBase("http://127.0.0.1:8090")
    // pb.admins.authWithPassword(PUBLIC_POCKETBASEEMAIL, PUBLIC_POCKETBASEPASSWORD)


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



