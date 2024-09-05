import connectionDB from "@/database/db"
import { NextResponse } from "next/server"

const newBlog  = Joi.object({
    
})





export async function POST(req) {
    try {
        await connectionDB()

        const extractBlogData = await req.json()
        const {authorname,title,description} = extractBlogData
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success : false,
            msg : 'Sometime want wrong ! Please try again'
        })
        
    }
    
}