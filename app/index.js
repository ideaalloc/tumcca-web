/**
 * Created by Bill on 5/31/15.
 */
var PhotoBox = React.createClass({
  loadFromServer: function () {
    $.ajax({
      url: 'http://120.26.202.114/api/photo-info/1',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        this.setState({data: data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(status);
      }.bind(this),
      complete: function (xhr) {
      }.bind(this)
    });
  },
  getInitialState: function () {
    return {data: {}};
  },
  componentDidMount: function () {
    this.loadFromServer();
  },
  render: function () {
    return (
      <div className="container">
        <PhotoGrid data={this.state.data}/>
      </div>
    );
  }
});

var PhotoGrid = React.createClass({
  getInitialState: function () {
    return {data: "http://120.26.202.114/api/photos/1"};
  },

  render: function () {
    var title = this.props.data.title;
    return (
      <div className="row">
        <div className="col-xs-6">
          <div className="thumbnail">
            <Photo data={this.state.data}/>

            <div className="caption">
              <h3>{title}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var Photo = React.createClass({
  render: function () {
    var uri = this.props.data;
    return (
      React.createElement("img", {src: uri, alt: "Sample Image"})
    );
  }
});

var getPhoto = function () {
  React.render(
    <PhotoBox />,
    document.getElementById('photo-box')
  );
};
