import React, { Component } from 'react'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */
  handleChange = e => {this.setState({[e.target.name]: e.target.value})};

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };
  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <p>
        <label>
          Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message" value={message} onChange={this.handleChange} />
        </label>
      </p>
       <input type="hidden" name="form-name" value="contact" />
      <p>
        <button type="submit">Send</button>
      </p>
    </form>  
    )
      // <form onSubmit={this.handleSubmit} id="contact-form" >
      //   <input type="text" placeholder="name"
      //     value={this.state.name}
      //     name="name"
      //     onChange={this.handleChange}
      //   />
      //   <input type="email" placeholder="email"
      //     value={this.state.email}
      //     name="email"
      //     onChange={this.handleChange}
      //   />
      //   <textarea name="message" placeholder="write somebody"/>
      //   <button type="submit">submit</button>
      // </form>
  }
}
