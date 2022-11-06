import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("naxt-course");
  
  switch (req.method) {
    case "GET":
      const response = await db.collection("test").find({}).toArray();
      res.json({ status: 200, data: response });
      break;
  }
}