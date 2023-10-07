import Post from '../models/postSchema.js';

//GET
// localhost:port/posts/

export const getPosts = async (req, res) => {
  console.log(req.query, '==>req query');

  // const myObj = {
  //     content: req.query.content,
  //     authorId: req.query.authorId,
  //     likeCount: req.query.likeCount
  // }

  const queryObj = { ...req.query };
  console.log(queryObj, '===>>before sideLine');

  const sideLine = ['page', 'limit', 'sort', 'fields'];
  //page
  //limit
  //sort
  sideLine.forEach((el) => delete queryObj[el]);

  console.log(queryObj, '===>>after sideLine');

  let queryStg = JSON.stringify(queryObj);

  queryStg = queryStg.replace(/\b(gte|gt|lt|lte)\b/g, (match) => '$' + match);
  // let query = queryStg.replace(/\b(gte|gt|lt|lte)\b/g, match => `$${match}`)

  let query = JSON.parse(queryStg);

  let findQuery = Post.find(query);

  let sortQuery = findQuery.sort(req.query.sort);

  if (req.query.fields) {
    const myFields = req.query.fields.split(',').join(' ');

    console.log(myFields, '==>>myFields');

    sortQuery = sortQuery.select(myFields);
  }

  const pageLimit = sortQuery
    .limit(req.query.limit)   
    .skip((req.query.page - 1) * req.query.limit);

  //   let selectedQuery = sortQuery.select('authorId content');

  //   console.log(query, '===>>> query');

  // authorId= 64e8328ed2d12db246fa23bf
  const posts = await pageLimit;

  //   console.log(posts, '===>> posts');

  res.status(200).send({
    status: 'Success',
    message: 'Get All Posts',
    data: posts, //pending
  });
};

//GET
// localhost:port/post/:id

export const getPost = async (req, res) => {
  console.log(req.params.id);
  const post = await Post.findById(req.params.id);

  res.status(200).send({
    status: 'Success',
    message: 'Data Get Successfully',
    data: post,
  });
};

//POST
// localhost:port/posts/

export const addPost = async (req, res) => {
  const newPost = await Post.create(req.body);
  res.status(200).send({
    status: 'Success',
    message: 'Post Added Successfully',
    data: newPost,
  });
};
