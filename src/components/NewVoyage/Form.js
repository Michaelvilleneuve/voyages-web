import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import { DatePicker, TextField, Toggle, FlatButton } from 'material-ui';
import FileUpload from 'material-ui/svg-icons/file/cloud-upload';
import Dropzone from 'react-dropzone';
import Place from 'material-ui-geosuggest';
import * as voyagesActions from '../../actions/voyages';
import './Form.css';

class Form extends Component {
  state = {}

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
    if (!this.state.file) return null;
    return (
      <img src={this.state.file.preview} alt="Couverture" style={{ width: 100 }} />
    );
  }

  render() {
    return (
      <div style={{ width: '90%', paddingTop: 30, maxWidth: 670 }}>
        <Card>
          <CardTitle
            title="Créer un voyage"
            subtitle="C'est le début de l'aventure"
          />
          <CardText>
            <TextField
              name="title"
              hintText="Titre"
              fullWidth
              errorText={this.props.errors.title}
              onChange={this.changed.bind(this)}
            />
            <DatePicker
              locale="fr"
              okLabel="OK"
              cancelLabel="Annuler"
              DateTimeFormat={global.Intl.DateTimeFormat}
              errorText={this.props.errors.starts_at}
              hintText="Début" fullWidth onChange={(e, d) => this.dateChanged('starts_at', d)}
            />
            <DatePicker
              locale="fr"
              okLabel="OK"
              DateTimeFormat={global.Intl.DateTimeFormat}
              cancelLabel="Annuler"
              errorText={this.props.errors.ends_at}
              hintText="Fin" fullWidth onChange={(e, d) => this.dateChanged('ends_at', d)}
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
            />
              <Dropzone
                className="dropzone"
                onDrop={this.onDrop.bind(this)}
                multiple={false}
              >
                <div style={{ textAlign: 'center' }}>
                  <FileUpload color="#999" width={40} />
                  <p style={{ color: '#999' }}>
                    {this.state.file ? 'Changer d\'image' : 'Image de couverture' }
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
            />
            <br />
          </CardText>
          <CardActions>
            <FlatButton
              label="Enregistrer"
              primary
              onClick={this.submit.bind(this)}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(voyagesActions, dispatch);
const mapStateToProps = ({ voyages }) => {
  return { errors: voyages.errors };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
