import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
  static propTypes = {
    fishes: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
      image: PropTypes.string,
      desc: PropTypes.string
    }),
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func
  };
  handleChange = event => {
    //1. Take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  };
  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fishes.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fishes.price}
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.fishes.status}
        >
          <option onChange={this.handleChange} value="available">
            Fresh!
          </option>
          <option onChange={this.handleChange} value="unavailable">
            Sold Out!
          </option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fishes.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fishes.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
