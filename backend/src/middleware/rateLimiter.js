import ratelimit from "../config/upstash.js";

const ratelimiter=async (req, res,next) => {
    try {
        const {success}= await ratelimit.limit("my-rate-limit");
        if(!success){
            return res.status(429).json({
                message:"to many requests try agin later",
            });
        }
        next();
    } catch (error) {
        console.log("rateLimiter error",error);
        next(error);
    }
    
};
export default ratelimiter;