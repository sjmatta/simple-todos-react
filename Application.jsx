/* globals Task */

Application = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      tasks: Tasks.find({}, {sort: {createdAt: -1}}).fetch(),
    };
  },

  handleSubmit(event) {
    event.preventDefault();
    const textInput = React.findDOMNode(this.refs.textInput);
    const text = textInput.value.trim();
    textInput.value = '';
    Tasks.insert({
      text: text,
      createdAt: new Date(),
    });
  },

  renderTasks() {
    return this.data.tasks.map(task => {
      return <Task key={task._id} task={task} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <form className="new-task" onSubmit={this.handleSubmit}>
          <input type="text" ref="textInput" placeholder="Type to add new tasks" />
        </form>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  },
});
