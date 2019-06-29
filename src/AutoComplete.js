import React, { Component } from "react";
import "./AutoComplete.css";

export default class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: ""
    };
    this.enterText = this.enterText.bind(this);
    this.renderSuggestions = this.renderSuggestions.bind(this);
    this.completeEntry = this.completeEntry.bind(this);
  }

  enterText(e) {
    let items = this.props.countries;
    let value = e.target.value;
    if (value.length > 0) {
      let regex = new RegExp(`^${value}`, "i");
      let suggestions = items.sort().filter(v => regex.test(v));
      this.setState({
        suggestions,
        text: value
      });
    } else {
      this.setState({
        text: "",
        suggestions: []
      });
    }
  }

  renderSuggestions() {
    let { suggestions } = this.state;
    if (suggestions.length > 0) {
      return (
        <ul>
          {this.state.suggestions.map((item, index) => (
            <li key={index} onClick={() => this.completeEntry(item)}>
              {item}
            </li>
          ))}
        </ul>
      );
    }
  }

  completeEntry(value) {
    this.setState({
      text: value,
      suggestions: []
    });
  }

  render() {
    let { text } = this.state;
    return (
      <div className="auto-complete">
        <input
          value={text}
          onChange={this.enterText}
          type="text"
          placeholder="enter your search"
          label="Country Name"
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}
