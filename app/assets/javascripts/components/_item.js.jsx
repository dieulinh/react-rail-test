var Item = React.createClass({
  getInitialState() {
    return ({editable: false});
  },
  handleEdit() {
    if(this.state.editable) {
      var name = this.refs.name.value;
      var description = this.refs.description.value;
      var id = this.props.item.id;

      this.props.handleUpdate({id: id,name: name, description: description});
    }
    this.setState({editable: !this.state.editable});
  },

  render() {
    return (
      <div>
        {
          this.state.editable
          ?
          <input ref='name'/>

          :
          <h3>{this.props.item.name}</h3>
        }
        {
          this.state.editable
          ?
            <input ref='description'/>
          :
          <p>
            {this.props.item.description}
          </p>
        }

        <button onClick={this.props.handleDelete}>Delete</button>

        <button onClick={this.handleEdit}>{this.state.editable ? "Save" : "Edit"}</button>


      </div>
    )
  }
});
