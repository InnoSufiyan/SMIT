import Post from '../models/postSchema.js'

//GET
// localhost:port/posts/

export const getPosts = async (req, res) => {



    console.log(req.query, "==>req query")

    const queryObj = { ...req.query }
    console.log(queryObj, "===>>before sideLine")

    const sideLine = ["page", "limit", "sort"]

    sideLine.forEach(el => delete queryObj[el])

    console.log(queryObj, "===>>after sideLine")

    // let queryStg = JSON.stringify(queryObj)

    // // queryStg = queryStg.replace(/\b(gte|gt|lt|lte)\b/g, match => "$" + match)
    // let query = queryStg.replace(/\b(gte|gt|lt|lte)\b/g, match => `$${match}`)

    // query = JSON.parse(query)

    let query = Post.find(queryObj)

    query = query.sort(req.query.sort)

    console.log(query, "===>>> query")
    
                // authorId= 64e8328ed2d12db246fa23bf
    const posts = await query

    console.log(posts, "===>> posts")

    res.status(200).send({
        status: "Success",
        message: "Get All Posts",
        data: posts  //pending
    })
}

//GET
// localhost:port/post/:id

export const getPost = (req, res) => {
    console.log(req.params.id)
}


//POST
// localhost:port/posts/

export const addPost = async (req, res) => {

    const newPost = await Post.create(req.body)
    res.status(200).send({
        status: "Success",
        message: "Post Added Successfully",
        data: newPost
    })
}


