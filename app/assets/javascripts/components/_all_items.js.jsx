var AllItems = React.createClass({
  componentDidMount() {
    console.log("Component Did Mount");
    $.getJSON('/api/v1/items.json', (response) => {
      this.setState({items: response})
    });

  },
  getInitialState() {
    return { items: []}
  },
  handleDelete(id) {
    this.props.handleDelete(id);
  },
  handleEdit(id) {
    console.log("Edit: ", id);
  },
  handleUpdate(item) {
  console.log("you wanna update: "+item);
    this.props.handleUpdate(item);

  },
  render() {
     var items = this.props.items.map((item) => {
          return (
          <div key={item.id}>
             <Item item={item} handleDelete={this.handleDelete.bind(this, item.id)} handleEdit={this.handleEdit.bind(this, item.id)} handleUpdate={this.handleUpdate}/>
          </div>

          )
        })
    return (
      <div>
        <h1>All items</h1>
        {items}
      </div>
    )
  }
});