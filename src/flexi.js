import React, { Component } from "react";

export default class Flexi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      ddVal: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  changeHandler(e, type) {
    this.setState({ [type]: e.target.value });
  }

  formSubmitHandler(e) {
    const { onSubmitFn } = this.props;
    const { inputVal, ddVal } = this.state;
    e.preventDefault();
    onSubmitFn({ name: inputVal, dd: ddVal });
  }
  render() {
    const { config } = this.props;
    const { inputVal, ddVal } = this.state;
    return (
      <>
        <h1>Flexi React Component from a JSON object </h1>
        <form>
          {config.length > 0 ? (
            config.map((val, index) => {
              if (val.type === "TextField") {
                return (
                  <div>
                    <label htmlFor={val.label}>{val.label}:</label>
                    <input
                      type="text"
                      id={val.label}
                      onChange={e => this.changeHandler(e, "inputVal")}
                    />
                  </div>
                );
              }
              if (val.type === "DropDown") {
                return (
                  <div>
                    <label htmlFor={val.label}>{val.label}:</label>
                    <select
                      type="text"
                      id={val.label}
                      onChange={e => this.changeHandler(e, "ddVal")}
                    >
                      <option value="" />
                      {val.values.map(ddOption => {
                        return <option value={ddOption}>{ddOption}</option>;
                      })}
                    </select>
                  </div>
                );
              }
            })
          ) : (
            <p>No data received</p>
          )}
          <button type="submit" onClick={this.formSubmitHandler}>
            Submit
          </button>
        </form>
      </>
    );
  }
}
