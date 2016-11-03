var NewItem = React.createClass({
  render() {
    return (
      <div>
        <h3>New Item</h3>
        <input ref='name' placeholder='Enter the name of the item'/>
        <input ref='description' placeholder='Enter a description' />
      </div>
    )
  }
});