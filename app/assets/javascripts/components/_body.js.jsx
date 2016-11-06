var Body = React.createClass({
  getInitialState(){
    return ({items: []})
  },
  componentDidMount() {
    console.log("Component Did Mount")
    $.getJSON('/api/v1/items.json', (response) => {
      this.setState({items: response})
    })
  },
  handleSubmit(item) {
    this.setState({items: this.state.items.concat(item)});
  },
  handleDelete(id) {
    console.log("You call handleDelete in body", id);
    $.ajax({
      url: `/api/v1/items/${id}`,
      type: 'DELETE',
      success:() => {
        this.removeItemClient(id)
      }

    });
  },
  handleUpdate(item){
    console.log("You handle update in body");
    $.ajax({
      url: `/api/v1/items/${item.id}`,
      type: 'PUT',
      data: {item: item},
      success: () => {
        console.log(item);
        this.updateItemList(item);
      }

    });
  },
  updateItemList(newItem) {
    newItems = this.state.items.filter((item) => {return item.id!= newItem.id});
    newItems.push(newItem);
    this.setState({items: newItems});
  },
  removeItemClient(id) {
    this.setState({items: this.state.items.filter((item) => {return item.id!=id} )});
  },
  render() {
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit}/>
        <AllItems items={this.state.items} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
      </div>
    )
  }
});