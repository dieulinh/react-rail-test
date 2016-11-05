var NewItem = React.createClass({
  handleClick(){
    console.log("You click me");
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    console.log("Got: " + name + " "+ description);
    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      data: {item: {name: name, description: description}},
      success: (item) => {
        this.props.handleSubmit(item);
      }
    });
  },
  render() {
    return (
      <div>
        <h3>New Item</h3>
        <input ref='name' placeholder='Enter the name of the item'/>
        <input ref='description' placeholder='Enter a description' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});