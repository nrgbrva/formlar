import React, { Component } from "react";
class myForm extends Component {
  state = {
    ad: "",
    soyad: "",
    email: "",
    telefon: "",
    qeyd: "",
    gonder: false
  };
  addeyis = (event) => {
    this.setState({ ad: event.target.value });
  };

  soyaddeyis = (event) => {
    this.setState({ soyad: event.target.value });
  };
  emaildeyis = (event) => {
    this.setState({ email: event.target.value });
  };
  telefondeyis = (event) => {
    this.setState({ telefon: event.target.value });
  };
  qeyddeyis = (event) => {
    this.setState({ qeyd: event.target.value });
  };
  render() {
    return (
      <form>
        <label htmlFor="">
          ad
          <input
            type="text"
            value={this.state.ad}
            onChange={this.addeyis}
            minLength={3}
            maxLength={5}
            required={true}
          />
        </label>
        <label htmlFor="">
          soyad
          <input
            type="text"
            value={this.state.soyad}
            onChange={this.soyaddeyis}
            maxLength={10}
          />
        </label>
        <label htmlFor="number">
          <p>Telefon</p>
          <input
            value={this.state.telefon}
            type="text"
            onChange={this.telefondeyis}
          />
        </label>
        <label htmlFor="">
          email
          <input
            type="email"
            value={this.state.email}
            onChange={this.emaildeyis}
          />
        </label>

        <label htmlFor="">
          Serh
          <textarea
            value={this.state.qeyd}
            id="note"
            onChange={this.qeyddeyis}
          ></textarea>
        </label>
        <button type="submit" onClick={this.gonder}>
          Gonder
        </button>
      </form>
    );
  }
}
export default myForm;
