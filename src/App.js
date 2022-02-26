import {Jumbotron,Carousel,Dropdown,Form,InputGroup,Figure,ListGroup,Modal,Row,Col,Breadcrumb,Alert,Container,Button,Image    } from 'react-bootstrap';
import React,{Component} from 'react';
import { BsFillPersonPlusFill } from "react-icons/bs";



class App extends Component{
  constructor() {
    super();
    this.state = {
      show: false

    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render(){
    return(
      <div>
        <Row style ={{backgroundColor : 'black',marginTop :'10px'}}>
          <Col sm={2}>
          <Dropdown>
            <Dropdown.Toggle variant='primary'>
              Pilih Bahasa
            </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href='#'>Bahasa Indonesia</Dropdown.Item>
                <Dropdown.Item href='#'>English</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </Col>
            <Col sm={8}></Col>
            <Col sm={2}>
              <Figure>
                <Figure.Image alt='user' width='50' src='https://png.pngtree.com/svg/20161113/ef1b24279e.png' />
                <Figure.Caption style={{color:'white'}}>Alan Saputra</Figure.Caption>
              </Figure>
            </Col>
            </Row>
            <Row>
              <Col md={3}></Col>
              <Col md={3}></Col>
              <Col md={3}></Col>
              <Col md={3}>
                    <Alert variant ='secondary' style={{height : '60%'}}>
                    <Breadcrumb>
                      <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
                      <Breadcrumb.Item href='#'>Berita</Breadcrumb.Item>
                      <Breadcrumb.Item href='#' active >Bola</Breadcrumb.Item>
                    </Breadcrumb>
                    </Alert>
              </Col>
            </Row>
              <Container>
                  <Carousel>
                    <Carousel.Item>
                    <img className ='d-block w-100'  height="500" src='https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600' />
                    <Carousel.Caption>
                    <h3>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</h3>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className ='d-block w-100' height="500" src='https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600' />
                    <Carousel.Caption>
                    <h3>Inggris Mau Jadi Tim Terbaik Dunia</h3>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className ='d-block w-100'  height="500" src='https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600' />
                    <Carousel.Caption>
                    <h3>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</h3>
                    </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
              </Container><br/><br/>
            <Row>
              <Col md={3}>
                <ListGroup>
                  <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
                  <ListGroup.Item>Liga Premier Inggris</ListGroup.Item>
                  <ListGroup.Item>Divisi Primera</ListGroup.Item>
                  <ListGroup.Item>Serie A</ListGroup.Item>
                  <ListGroup.Item>Ligue 1</ListGroup.Item>
                  <ListGroup.Item>Bundes Liga</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={5 }>
                  <div  style ={{backgroundColor :'#E3E3E3',padding : '55px'}}>
                    <h1 style={{color :"black"}}>Divisi Primera</h1>
                    <p style={{color :"black"}}>Main Untuk Catalunya Gerard Pique Minta Dihormati</p>
                    <Button variant ="primary">Read More</Button>
                    </div>
                    {/*Jumbotron telah hilang jadi  saya pakai fitur Utility */}
              </Col>
              <Col >
              <Container>
              <Image src='https://cdn.icon-icons.com/icons2/602/PNG/512/Edit_User_icon-icons.com_55920.png' style ={{width : '50px', display :'flex',marginLeft :'auto',marginRight :'auto' }}/>
                  {/*Tidak bisa menemukan link icon*/}
              <h4 style ={{textAlign :'center'}}>Silahkan login</h4>
              <Form>
                <Form.Control  type='email' placeholder ='Masukan E-mail' /><br />
                <Form.Control  type='Password' placeholder ='Password' />
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="term & Condition" />
              </Form.Group>
                 <Button type="button" onClick={this.showModal}>
                   Login
                 </Button>
              </Form>
              </Container>
              </Col>
            </Row>
            <Modal show={this.state.show} handleClose={this.hideModal}>
                    <Modal.Header closeButton onClick={this.hideModal}>
                      <Modal.Title>Login</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <p>Anda berhasil Login.</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={this.hideModal} >Close</Button>
                      <Button variant="primary">Save Username & Password</Button>
                    </Modal.Footer>
            </Modal>
        </div>

    );
  }
}



export default App;
