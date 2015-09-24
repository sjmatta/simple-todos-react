/* globals Application */

Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  Meteor.startup(() => {
    React.render(<Application />, document.getElementById('render-target'));
  });
}
