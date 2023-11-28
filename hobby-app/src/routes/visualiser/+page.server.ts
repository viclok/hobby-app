import PocketBase from 'pocketbase';
import {SECRET_EMAIL, SECRET_PASSWORD} from '$env/static/private'

export async function load({}) {
    const pb = new PocketBase("http://127.0.0.1:8090")
    await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD)

    const records = await pb.collection("hobby").getFullList(200, {sort: "-created"},)
    const results = records.map((record) => {
        return {
            hobby: record.hobby,
            desirability: record.desirability,
            difficulty: record.difficulty,
            time: record.time,
        }
    })
    return {
        records: results
    }
}

export const actions= {
    create: async ( {request}) => {
        const pb = new PocketBase("http://127.0.0.1:8090")
        await pb.admins.authWithPassword(SECRET_EMAIL, SECRET_PASSWORD)

        const form = await request.formData()

        const difficulty = form.get("difficulty")
        const desirability = form.get("desirability")
        const time = form.get("time")
        const hobby = form.get("hobby")

        const newRecord = {
            difficulty,
            desirability,
            time,
            hobby,
        }

        const record = await pb.collection("hobby").create(newRecord)
    },
}