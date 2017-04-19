import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import { DatePicker, TextField, Toggle, FlatButton } from 'material-ui';
import FileUpload from 'material-ui/svg-icons/file/cloud-upload';
import Dropzone from 'react-dropzone';
import Place from 'material-ui-geosuggest';
import * as voyagesActions from '../../actions/voyages';
import config from '../../config';
import API from '../../api/api';
import './Form.css';

class Form extends Component {
  state = {}

  componentDidMount() {
    if (this.props.id) {
      API.get(`/journeys/${this.props.id}`)
        .then(res => res.json())
        .then(voyage => {
          this.setState({ ...voyage });
        });
    }
  }

  onDrop(files) {
    this.setState({ file: files[0] });
  }

  changed(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  dateChanged(name, date) {
    this.setState({ [name]: date });
  }

  placeChanged(place) {
    if (!place.geometry) return this.setState({ place: '' });
    const location = place.geometry.location;
    this.setState({ place: place.formatted_address, lat: location.lat(), lng: location.lng() });
  }

  submit() {
    this.props.createVoyage(this.state);
  }

  renderImage() {
    if (!this.state.file && !this.state.image) return null;
    const src = this.state.file ? this.state.file.preview : config.api.assets(this.state.image);
    return (
      <img
        src={src}
        alt="Couverture"
        style={{ width: 100 }}
      />
    );
  }

  renderActions() {
    if (this.props.creating) {
      return (
          <div style={{ textAlign: 'center' }}>
            <CircularProgress size={30} thickness={3} />
          </div>
      );
    }
    return (
      <FlatButton
        label="Enregistrer"
        primary
        onClick={this.submit.bind(this)}
      />
    );
  }

  render() {
    const date = this.state.starts_at ? new Date(this.state.starts_at) : undefined;
    console.log(date);
    return (
      <div style={{ width: '90%', maxWidth: 670, margin: '30px auto' }}>
        <Card>
          <CardTitle
            title={this.state._id ? 'Modifier votre voyage' : 'Créer un voyage'}
            subtitle="C'est le début de l'aventure"
          />
          <CardText>
            <TextField
              name="title"
              hintText="Titre"
              fullWidth
              errorText={this.props.errors.title}
              onChange={this.changed.bind(this)}
              value={this.state.title}
            />
            <DatePicker
              locale="fr"
              okLabel="OK"
              cancelLabel="Annuler"
              DateTimeFormat={global.Intl.DateTimeFormat}
              errorText={this.props.errors.starts_at}
              hintText="Début" fullWidth onChange={(e, d) => this.dateChanged('starts_at', d)}
              value={date}
            />
            <DatePicker
              locale="fr"
              okLabel="OK"
              DateTimeFormat={global.Intl.DateTimeFormat}
              cancelLabel="Annuler"
              errorText={this.props.errors.ends_at}
              hintText="Fin" fullWidth onChange={(e, d) => this.dateChanged('ends_at', d)}
              value={this.state.starts_at ? new Date(this.state.starts_at) : undefined}
            />
            <Place
              fullWidth
              name="place"
              value={this.state.place}
              errorText={this.props.errors.place}
              onChange={this.changed.bind(this)}
              onPlaceChange={this.placeChanged.bind(this)}
            />
            <TextField
              hintText="Description"
              name="description"
              multiLine
              fullWidth
              rows={4}
              errorText={this.props.errors.description}
              onChange={this.changed.bind(this)}
              value={this.state.description}
            />
              <Dropzone
                className="dropzone"
                onDrop={this.onDrop.bind(this)}
                multiple={false}
              >
                <div style={{ textAlign: 'center' }}>
                  <FileUpload color="#999" width={40} />
                  <p style={{ color: '#999' }}>
                    {this.state.file || this.state.image ?
                      'Changer d\'image' : 'Image de couverture' }
                  </p>
                  <p style={{ color: 'red' }}>
                    {this.props.errors.image}
                  </p>
                </div>
              </Dropzone>
              {this.renderImage()}
          </CardText>
          <CardText>
            <Toggle
              onToggle={this.changed.bind(this)}
              name="public"
              labelPosition="right"
              errorText={this.props.errors.public}
              label="Rendre mon voyage public"
              value={this.state.public}
            />
            <br />
          </CardText>
          <CardActions>
            {this.renderActions()}
          </CardActions>
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(voyagesActions, dispatch);
const mapStateToProps = ({ voyages }) => {
  return { errors: voyages.errors, creating: voyages.creating };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
