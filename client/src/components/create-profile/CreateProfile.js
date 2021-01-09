import React, {Component} from 'react';


class CreateProfile extends Component{
    render(){
        return(
            <div className="create-profile">
                <div className="container">
                  <div className="row">
                     <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Create Your Profile</h1>
                        <p className="lead text-center">
                            Let's get some information to make your profile stand out
                        </p>
                        <small className="d-block pb-3">* = required fields</small>

                    </div>

                  </div>

                </div>

            </div>
            
        )
    }
}

export default CreateProfile;