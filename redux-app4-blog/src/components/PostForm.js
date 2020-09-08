import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                <h1>Post form</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title</label>
                        <input onChange={this.onChange} type="text" name="title" value={this.state.title} />
                    </div>
                    <div>
                        <label>Body</label>
                        <textarea onChange={this.onChange} name="body">{this.state.body}</textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm;