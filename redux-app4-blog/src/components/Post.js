import React, { Component } from 'react'

class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => this.setState({
                posts: json
            }))
    }

    render() {
        const posts = this.state.posts.map(post => {
            return (<div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>)
        });

        return (
            <div>
                <h1>Posts</h1>
                {posts}
            </div>
        )
    }
}

export default Posts