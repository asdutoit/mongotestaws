import { connectToDatabase } from "../../utils/mongodb";
import { performance } from "perf_hooks";

export default async function handle(req, res) {
  try {
    const { client } = await connectToDatabase();
    const db = await client.db(process.env.DATABASE_DB);
    console.time("Query start");
    console.log("DB", process.env.DATABASE_DB);
    const t0 = performance.now();
    const data = await db.collection("strapi_role").find().toArray();
    const t1 = performance.now();
    console.timeEnd("Query start");
    console.log(`Query in db took ${t1 - t0} ms`);
    res.status(200).send({ users: data, time: t1 - t0 });
  } catch (error) {
    console.log("Error", error);
  }
}
