var Body = React.createClass({
  componentDidMount() {
    console.log("Component Did Mount")
  },
  render() {
    return (
      <div>
        <NewItem/>
        <AllItems/>
      </div>
    )
  }
});