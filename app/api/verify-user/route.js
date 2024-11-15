import { NextResponse } from "next/server"
import {db} from '@/db/index'
import { Users } from '@/db/schema'
import { eq } from "drizzle-orm"
export async function POST(req) {
    const { user } = await req.json()
    // console.log("inside post",user)
    try{
        //if user exist
    const userInfo = await db.select().from(Users).where(eq(Users.email, user?.primaryEmailAddress?.emailAddress))
    console.log("userinfo ", userInfo)
    //if user does not exist
    if (userInfo?.length == 0) {
        
        const saveResult = await db.insert(Users).values({
            name: user?.fullName,
            email: user?.primaryEmailAddress?.emailAddress,
            imageUrl: user?.imageUrl
        }).returning({ Users })
        console.log("inside if user not exist", saveResult)
        return NextResponse.json({ result: saveResult[0].Users })
    }
    return NextResponse.json({ result: userInfo[0] })
} catch (e) {
        return NextResponse.json({error:"user error"})
    }
    
}