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
                        <form onSubmit={this.onSubmit}>
                            <TextFieldGroup
                            placeholder="* Profile Handle"
                            name="handle"
                            info="A unique handle for your profile URL. Your full name, company name, nickname"
                            />
                            <SelectListGroup
                            placeholder="Status"
                            name="status"
                            info="Give us an idea of where you are at in your career"
                            />
                            <TextFieldGroup
                            placeholder="Company"
                            name="company"
                            info="Could be your own company or one you work for"
                            />
                            <TextFieldGroup
                            placeholder="Website"
                            name="website"
                            info="Could be your own website or a company one"
                            />
                            <TextFieldGroup
                            placeholder="Location"
                            name="location"
                            info="City or city & state suggested (eg. Boston, MA)"
                            />
                            <TextFieldGroup
                            placeholder="* Skills"
                            name="skills"
                            info="Please use comma separated values (eg.
                                HTML,CSS,JavaScript,PHP"
                            />
                            <TextFieldGroup
                            placeholder="Github Username"
                            name="githubusername"
                            info="If you want your latest repos and a Github link, include your username"
                            />
                            <TextAreaFieldGroup
                            placeholder="Short Bio"
                            name="bio"
                            info="Tell us a little about yourself"
                            />

                            <div className="mb-3">
                            <button
                                type="button"
                                className="btn btn-light"
                            >
                                Add Social Network Links
                            </button>
                            <span className="text-muted">Optional</span>
                            </div>
                        
                            <input
                            type="submit"
                            value="Submit"
                            className="btn btn-info btn-block mt-4"
                            />
              </form>

                    </div>

                  </div>

                </div>

            </div>
            
        )
    }
}

export default CreateProfile;