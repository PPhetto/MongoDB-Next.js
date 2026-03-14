import { connectDB } from "@/lib/mongodb"
import Post from "@/models/Post"

export async function GET() {
  await connectDB()

  const rank = await Post.aggregate([

    //  รวมโพสต์ตาม user แล้วนับจำนวนโพสต์
    {
      $group: {
        _id: "$user",            // ใช้ field user ใน Post มาเป็นตัวจัดกลุ่ม (userId)
        postCount: { $sum: 1 }   // นับจำนวน post ของ user นั้น
      }
    },

    //  join ข้อมูลจาก collection "users"
    {
      $lookup: {
        from: "users",           // collection ที่จะ join (users)
        localField: "_id",       // field จากผลลัพธ์ก่อนหน้า (_id = userId)
        foreignField: "_id",     // field ใน users ที่ต้องเอามา match
        as: "user"               // ชื่อ field ใหม่ที่จะเก็บข้อมูล user
      }
    },

    //  แปลง array ของ user ให้เป็น object ธรรมดาเพราะ $lookup จะคืนค่าเป็น array เสมอ
    { $unwind: "$user" },

    //  เลือกเฉพาะข้อมูลที่ต้องการส่งกลับ
    {
      $project: {
        username: "$user.username", // เอา username จาก user
        postCount: 1                // ส่ง postCount ออกไปด้วย
      }
    },

    //  เรียงลำดับจากจำนวนโพสต์มาก → น้อย
    {
      $sort: { postCount: -1 }
    }

  ])

  return Response.json(rank)
}