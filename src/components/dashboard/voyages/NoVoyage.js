import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import Center from '../../shared/Center.js';

const NoVoyage = () => {
  return (
    <Center>
      <Card style={{ width: '90%', maxWidth: 600 }}>
        <CardTitle>Oh non ! :(</CardTitle>
        <CardText>Vous n'avez fait aucun voyage pour le moment.</CardText>
      </Card>
    </Center>
  );
};

export default NoVoyage;
