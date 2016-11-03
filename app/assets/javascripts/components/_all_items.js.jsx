var AllItems = React.createClass({
  componentDidMount() {
    console.log("Component Did Mount");
    $.getJSON('/api/items.json', (response) => {
      this.setState({items: response})
    });

  },
  getInitialState() {
    return { items: []}
  },
  render() {
     var items = this.state.items.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>
                {item.description}
              </p>
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