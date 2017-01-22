/* @flow */

import React, { Component } from 'react';
import { Container, Header, Grid, Divider } from 'semantic-ui-react';
import { FormattedMessage, FormattedDate, FormattedRelative } from 'react-intl';
// import Logo from './Logo';
// import Menu from './Menu';
import LocaleSwitcher from '../LocaleSwitcher';

export class CustomHeader extends Component {
  render() {
    return (
      <div className="ui inverted vertical masthead center aligned segment">
        <LocaleSwitcher />
        <Container>
          <Header inverted={true}>
            ChinaCompare
            <Header inverted={true} sub={true}>Price comparator</Header>
          </Header>
          <p>Today is <FormattedDate weekday="long" value={new Date()}/></p>
          <p>New year was <FormattedRelative value={new Date(new Date().getFullYear(), 0, 1)}/></p>
          <h4>
            <FormattedMessage id="app.header.test" defaultMessage="Testing locales, default"/>
          </h4>
        </Container>
      </div>
    );
  }
}

export default CustomHeader;
