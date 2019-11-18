import React from 'react'
import './Components.css'

class SearchForm extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault();
      const output = document.createElement('div');
      const data = [...event.target.elements].reduce((data, element) => {
        if (element.name && element.value) {
          data[element.name] = element.value;
        }
        return data;
      }, {});
      output.textContent = JSON.stringify(data);
      document.body.appendChild(output);
    };
    render() {
      return (
        <form action="/search" onSubmit={this.handleSubmit}>
          <input type="text" name="q" />
          <select className="searchbox" name="category">
            <option value="" selected>Category</option>
            <option value="kids">Kids</option>
            <option value="wife">Wife</option>
            <option value="co-worker">Co-Worker</option>
            <option value="bar">Bar</option>
            <option value="work">Work</option>

          </select>
          <button>Find</button>
        </form>
      );
    }
  }
  

  export default SearchForm