import React from 'react';
import {
  Col,
  Container,
  Row,
  Footer
} from 'mdbreact';

export default class FooterPage extends React.Component {
  render(){
    return(
      <Footer dark color="indigo" className="font-small pt-0">
        <Container>
          <Row>
              <Col md="12">
                  <div className="mb-5 flex-center">
                  <a className="fb-ic"><i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                  <a className="tw-ic"><i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                  <a className="gplus-ic"><i className="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                  <a className="li-ic"><i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                  <a className="ins-ic"><i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                  <a className="pin-ic"><i className="fa fa-pinterest fa-lg white-text fa-2x"> </i></a>
                  </div>
              </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.hacktiv8.com"> Hacktiv8 2018</a>
          </Container>
        </div>
      </Footer>
    );
  }
}