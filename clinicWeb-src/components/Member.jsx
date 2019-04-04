import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class MemberPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="but-body">
          <Row>
            <Col>
              <nav class="navbar navbar-expand-sm skyblue navbar-dark sticky-top">
                <a class="navbar-brand">
                  <i class="fas fa-user" />
                </a>
              </nav>
            </Col>
          </Row>
        </div>

        <Row>
          <Col xs="3">
            <div class="container-fluid bg-gray" id="accordion-style-1">
              <div class="container">
                <section>
                  <div class="row">
                    <div class="col-20 mx-auto">
                      <div class="accordion" id="accordionExample">
                        <div class="card">
                          <div class="card-header" id="home">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link btn-block text-left"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseZero"
                                aria-expanded="true"
                                aria-controls="collapseZero"
                              >
                                <i class="fa fa-home main" />
                                Home
                              </button>
                            </h5>
                          </div>
                        </div>

                        <div class="card">
                          <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link btn-block text-left"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                <i class="fa fa-angle-double-right mr-3" />
                                Chapter 1 - Introduction to AKT/KFP
                              </button>
                            </h5>
                          </div>

                          <div
                            id="collapseOne"
                            class="panel-collapse collapse show fade"
                            aria-labelledby="headingOne"
                            data-parent="#accordionExample"
                          >
                            <ul class="list-group">
                              <li class="list-group-item">
                                Webinar of Chapter 1
                              </li>
                              <li class="list-group-item">
                                Slide show of webinar 1
                              </li>
                              <li class="list-group-item">Time management </li>
                              <li class="list-group-item">
                                KFP answering techniques
                              </li>
                              <li class="list-group-item">
                                Scoring technique for the 26 questions
                              </li>
                              <li class="list-group-item">Areas to Study </li>
                              <li class="list-group-item">Study Plan </li>
                              <li class="list-group-item">50 KFP questions </li>
                            </ul>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed btn-block text-left"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                <i class="fa fa-angle-double-right mr-3" />
                                Chapter 2
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapseTwo"
                            class="panel-collapse collapse fade"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionExample"
                          >
                            <ul class="list-group">
                              <li class="list-group-item">One</li>
                              <li class="list-group-item">Two</li>
                              <li class="list-group-item">Three</li>
                            </ul>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed btn-block text-left"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <i class="fa fa-angle-double-right mr-3" />
                                Chapter 3
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapseThree"
                            class="panel-collapse collapse fade"
                            aria-labelledby="headingThree"
                            data-parent="#accordionExample"
                          >
                            <ul class="list-group">
                              <li class="list-group-item">
                                Webinar of Chapter 2{" "}
                              </li>
                              <li class="list-group-item">
                                Slide show of webinar 2
                              </li>
                              <li class="list-group-item">Dermatology</li>
                            </ul>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header" id="headingFour">
                            <h5 class="mb-0">
                              <button
                                class="btn btn-link collapsed btn-block text-left"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                              >
                                <i class="fa fa-angle-double-right mr-3" />
                                Chapter 4
                              </button>
                            </h5>
                          </div>
                          <div
                            id="collapseFour"
                            class="panel-collapse collapse fade"
                            aria-labelledby="headingFour"
                            data-parent="#accordionExample"
                          >
                            <ul class="list-group">
                              <li class="list-group-item">One</li>
                              <li class="list-group-item">Two</li>
                              <li class="list-group-item">Three</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </Col>
        </Row>

        {/*  <div class="container">
    <div class="row profile">
		<div class="col-md-3">
			<div class="profile-sidebar">
				
				<div class="profile-userpic">
					<img src="https://gravatar.com/avatar/31b64e4876d603ce78e04102c67d6144?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" class="img-responsive" alt="">
				</div>
				
				<div class="profile-usertitle">
					<div class="profile-usertitle-name">
						Jason Davis
					</div>
					<div class="profile-usertitle-job">
						Developer
					</div>
				</div>
				
				<div class="profile-userbuttons">
					<button type="button" class="btn btn-success btn-sm">Follow</button>
					<button type="button" class="btn btn-danger btn-sm">Message</button>
				</div>
				
				<div class="profile-usermenu">
					<ul class="nav">
						<li class="active">
							<a href="#">
							<i class="glyphicon glyphicon-home"></i>
							Overview </a>
						</li>
						<li>
							<a href="https://codepen.io/jasondavis/pen/jVRwaG?editors=1000">
							<i class="glyphicon glyphicon-user"></i>
							Account Settings </a>
						</li>
						<li>
							<a href="#" target="_blank">
							<i class="glyphicon glyphicon-ok"></i>
							Tasks </a>
						</li>
						<li>
							<a href="#">
							<i class="glyphicon glyphicon-flag"></i>
							Help </a>
						</li>
					</ul>
				</div>
				
			   
           <div class="portlet light bordered">
                                                
                                                <div class="row list-separated profile-stat">
                                                    <div class="col-md-4 col-sm-4 col-xs-6">
                                                        <div class="uppercase profile-stat-title"> 37 </div>
                                                        <div class="uppercase profile-stat-text"> Projects </div>
                                                    </div>
                                                    <div class="col-md-4 col-sm-4 col-xs-6">
                                                        <div class="uppercase profile-stat-title"> 51 </div>
                                                        <div class="uppercase profile-stat-text"> Tasks </div>
                                                    </div>
                                                    <div class="col-md-4 col-sm-4 col-xs-6">
                                                        <div class="uppercase profile-stat-title"> 61 </div>
                                                        <div class="uppercase profile-stat-text"> Uploads </div>
                                                    </div>
                                                </div>
                                                
                                                 <div>
                                                    <h4 class="profile-desc-title">About Jason Davis</h4>
                                                    <span class="profile-desc-text"> Lorem ipsum dolor sit amet diam nonummy nibh dolore. </span>
                                                    <div class="margin-top-20 profile-desc-link">
                                                        <i class="fa fa-globe"></i>
                                                        <a href="https://www.apollowebstudio.com">apollowebstudio.com</a>
                                                    </div>
                                                    <div class="margin-top-20 profile-desc-link">
                                                        <i class="fa fa-twitter"></i>
                                                        <a href="https://www.twitter.com/jasondavisfl/">@jasondavisfl</a>
                                                    </div>
                                                    <div class="margin-top-20 profile-desc-link">
                                                        <i class="fa fa-facebook"></i>
                                                        <a href="https://www.facebook.com/">JasonDavisFL</a>
 </div></div></div>                   
                                           
        
        
			</div>
		</div>
		<div class="col-md-9">
            <div class="profile-content">
			   Some user related content goes here...
            </div>
		</div>
	</div>
    </div>
      </div>*/}
      </div>
    );
  }
}

export default MemberPage;
