import React, {Component} from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap';

class Register extends Component{
	render (){
		return(
			<div className="register-wrapper">
				<Form horizontal>
					<FormGroup controlId="formHorizontalName">
						<Col componentClass={ControlLabel} sm={2}>
						Name
						</Col>
						<Col sm={10}>
							<FormControl type="text" placeholder="Full-Name" />
						</Col>
					</FormGroup>
						<FormGroup controlId="formHorizontalName">
							<Col componentClass={ControlLabel} sm={2}>
							Email
							</Col>
								<Col sm={10}>
									<FormControl type="text" placeholder="Email" />
								</Col>
						</FormGroup>
									<FormGroup controlId="formHorizontalName">
										<Col componentClass={ControlLabel} sm={2}>
											Account Type
										</Col>
										<Col sm={10}>
											<FormControl type="select" name="type" value="customer" disabled/>
										</Col>
									</FormGroup>
										<FormGroup controlId="formHorizontalName">
											<Col componentClass={ControlLabel} sm={2}>
											Password
											</Col>
												<Col sm={10}>
													<FormControl type="pasword" name="password" placeholder="password" />
												</Col>
											</FormGroup>
												<FormGroup controlId="formHorizontalName">
													<Col componentClass={ControlLabel} sm={2}>
														City
													</Col>
														<Col sm={10}>
															<FormControl type="text" name="city" placeholder="city" />
														</Col>
												</FormGroup>
													<FormGroup controlId="formHorizontalName">
														<Col componentClass={ControlLabel} sm={2}>
														State
														</Col>
														<Col sm={10}>
															<FormControl type="text" name="state" placeholder="state" />
														</Col>
												</FormGroup>
														<FormGroup controlId="formHorizontalName">
															<Col smOffset={2}sm={10}>
																<Button bsStyle="primary" bsSize="small" type="submit" >
																Register
																</Button>
															</Col>
														</FormGroup>
				<h1>RegisterPage</h1>
				</Form>
			</div>
		)
	}
}

export default Register;

