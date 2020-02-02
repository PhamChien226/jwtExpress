const User = require('../model/User');


const debug = console.log.bind(console);

let postUser = async (req, res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password
    })

    try {
        const savedUser = await user.save();
        res.json(savedUser)
    } catch (error) {
        res.json({message: error})
        
    }

    //   const post = new Post({
    //     title: req.body.title,
    //     description: req.body.description
    // });

    // try {
    //     console.log("savePost")
    //     const savedPost = await post.save();
    //     console.log("savedPost", savedPost)
    //     res.json(savedPost)
    // } catch (error) {
    //     res.json({ message: error })
    // }

}

module.exports = {
    postUser: postUser,
};