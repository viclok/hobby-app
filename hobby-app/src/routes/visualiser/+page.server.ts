import PocketBase from 'pocketbase';
import {SECRET_EMAIL, SECRET_PASSWORD} from '$env/static/private'

export const actions= {
    create: async ( {request}) => {
        try {
            const pb = new PocketBase("http://127.0.0.1:8090")
        await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD)

        const form = await request.formData()

        const difficulty = form.get('difficulty')
        const desirability = form.get('desirability')
        const time = form.get('time')
        const hobby = form.get('hobby')

        const newRecord = {
            difficulty,
            desirability,
            time,
            hobby,
        }

        const record = await pb.collection('hobby').create(newRecord)
        } catch (error) {
            console.log("error:", error)
            console.log("error message", error.data)
        }
    },
    // view: async () => {
    //     const pb = new PocketBase("http://127.0.0.1:8090")
    //     await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD)

    //     const record = await pb.collection('hobby')
    // }
}