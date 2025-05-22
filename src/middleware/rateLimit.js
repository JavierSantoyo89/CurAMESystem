import rateLimit from 'express-rate-limit'

const MINUTES = 15* 60 * 1000 // 15 minutes [replase with your value the first numbers]
const MAXCALLS = 100 // limit each IP to 100 requests per windowMs 
const MESSAGE = 'Too many requests, please try again later.'

const limiter = rateLimit({
    windowMs: MINUTES ,
    max: MAXCALLS,
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: MESSAGE
  })

export default (req, res, next) => limiter(req, res, () => {
    next()
})