import React, { Component } from "react";
import { Games } from "../database.js";
import List from "./List.js";
import "./Search.scss";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  componentDidMount() {
    this.inputSearch.focus();
  }

  render() {
    const input = this.state.input;
    let result = false;

    if (input !== "" && input.length > 1) {
      result = [];
      Object.values(Games).map((item, i) => {
        if (item) {
          let label = item.label;
          let keywords = item.keywords;
          if (label && label.toLowerCase().includes(input)) {
            result.push(item);
          } else if (keywords && keywords.toLowerCase().includes(input)) {
            result.push(item);
          }
        }
      });
    }
    return (
      <div className="ps5-search">
        <h2>Search</h2>

        <input
          ref={(input) => {
            this.inputSearch = input;
          }}
          className="ps5-btn focus"
          type="search"
          placeholder="Start typing"
          onChange={(e) =>
            this.setState({ input: e.target.value.toLowerCase() })
          }
        />
        <div>
          {result && (
            <List
              list={[{ items: result }]}
              onClickMenu={(e) => this.props.onClickMenu(e)}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Search;
