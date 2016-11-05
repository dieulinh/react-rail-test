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
  render() {
     var items = this.props.items.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>
                {item.description}
              </p>
              <button onClick={this.handleDelete.bind(this, item.id)}>Delete</button>
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