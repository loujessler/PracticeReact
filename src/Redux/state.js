let state = {
    people: [
        {id: 1, name: "Sasha"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Felix"}
    ],
    posts: [
        {id: 1, post: "Hi, how are you?", like: 50},
        {id: 2, post: "its my post", like: 5}
    ]
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        post: postMessage,
        like:0
    };
    state.posts.push(newPost);
}

export default state