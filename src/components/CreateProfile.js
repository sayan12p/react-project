import React, { Component } from 'react'
import InputGroup from '../common/InputGroup';
import TextFieldGroup from "../common/TextAreaFieldGroup";
import TextAreaFieldGroup from "../common/TextFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import {apiUrl} from "../config";
import axios from "axios";
import isEmpty  from "../utils/is-empty";

export default class CreateProfile extends Component {

  constructor(props){
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      skills: "",
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    
this.onSubmit = this.onSubmit.bind(this);

    
  }
  componentDidMount() {
    debugger;
    let Token = localStorage.getItem("jwtToken");
    let profileUrl = `${apiUrl.baseUrl}${apiUrl.GetProfile}`;
    axios
      .get(profileUrl, { headers: { Authorization: Token } })
      .then(res => {
        debugger;
        const profile = res.data;
        if (this.props.isEdit) {
          // Bring skills array back to CSV
          const skillsCSV = profile.skills.join(",");

          // If profile field doesnt exist, make empty string
          profile.company = !isEmpty(profile.company) ? profile.company : "";
          profile.website = !isEmpty(profile.website) ? profile.website : "";
          profile.location = !isEmpty(profile.location) ? profile.location : "";
          profile.githubusername = !isEmpty(profile.githubusername)
            ? profile.githubusername
            : "";
          profile.bio = !isEmpty(profile.bio) ? profile.bio : "";
          profile.social = !isEmpty(profile.social) ? profile.social : {};
          profile.twitter = !isEmpty(profile.social.twitter)
            ? profile.social.twitter
            : "";
          profile.facebook = !isEmpty(profile.social.facebook)
            ? profile.social.facebook
            : "";
          profile.linkedin = !isEmpty(profile.social.linkedin)
            ? profile.social.linkedin
            : "";
          profile.youtube = !isEmpty(profile.social.youtube)
            ? profile.social.youtube
            : "";
          profile.instagram = !isEmpty(profile.social.instagram)
            ? profile.social.instagram
            : "";

          // Set component fields state
          this.setState({
            handle: profile.handle,
            company: profile.company,
            website: profile.website,
            location: profile.location,
            status: profile.status,
            skills: skillsCSV,
            githubusername: profile.githubusername,
            bio: profile.bio,
            twitter: profile.twitter,
            facebook: profile.facebook,
            linkedin: profile.linkedin,
            youtube: profile.youtube
          });
        }
      })
      .catch(err => console.log(err));
  }

  checkValidations(control){
    

    switch(control.name){
      case "handle":
        if(control.value==null || control.value==""){
          this.setState({
            errors:{[control.name]:"handle is a required field"}
          });

        }
        else{
          this.setState({
            errors: { [control.name]: undefined }
          });

        }
        break;
        case "skills":
          if (control.value == null || control.value == "") {
            this.setState({
              errors: { [control.name]: "Skill is a required field" }
            });
          } else {
            this.setState({
              errors: { [control.name]: undefined }
            });
          }
          break;
        case "status":
          if (control.value == 0 || control.value == "") {
            this.setState({
              errors: { [control.name]: "Status is a required field" }
            });
          } else {
            this.setState({
              errors: { [control.name]: undefined }
            });
          }
          break;

          default:
            break;
      
    }
  }
  onChange(e) {
    this.checkValidations(e.target);
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    const createProfiledata ={
      handle:this.state.handle,
      company:this.state.company,
      website:this.state.website,
      location:this.state.location,
      status:this.state.status,
      skills:this.state.skills,
      githubusername:this.state.githubusername,
      bio:this.state.bio,
      twitter:this.state.twitter,
      facebook:this.state.facebook,
      linkedin:this.state.linkedin,
      youtube:this.state.youtube
    }
    let createprofileurl=`${apiUrl.baseUrl}${apiUrl. createUrl}`
    let Token=localStorage.getItem('jwtToken');
    console.log(Token);
    axios
    .post(createprofileurl,createProfiledata,{
      headers:{
        'Authorization':Token
      }
    } )
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      console.log("success");
    })
    .catch(err => {
      console.log(err);
    });
  }

    render() {
      let socialInputs = (
        <div>
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            
          />
  
          <InputGroup
            placeholder="Facebook Page URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
           
          />
  
          <InputGroup
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            
          />
  
          <InputGroup
            placeholder="YouTube Channel URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            
          />
  
          <InputGroup
            placeholder="Instagram Page URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            
          />
        </div>
      );
      const options = [
        { label: "* Select Professional Status", value: 0 },
        { label: "Developer", value: "Developer" },
        { label: "Junior Developer", value: "Junior Developer" },
        { label: "Senior Developer", value: "Senior Developer" },
        { label: "Manager", value: "Manager" },
        { label: "Student or Learning", value: "Student or Learning" },
        { label: "Instructor or Teacher", value: "Instructor or Teacher" },
        { label: "Intern", value: "Intern" },
        { label: "Other", value: "Other" }
      ];
    
        return (
            <div class="create-profile">
            <div class="container">
              <div class="row">
                <div class="col-md-8 m-auto">
                  <a href="dashboard.html" class="btn btn-light">
                    Go Back
                  </a>
                  <h1 class="display-4 text-center">Create Your Profile</h1>
                  <p class="lead text-center">Let's get some information to make your profile stand out</p>
                  <small class="d-block pb-3">* = required field</small>
                  <form action="add-experience.html" onSubmit={this.onSubmit} >
                  <TextFieldGroup
                    placeholder="* Profile Handle"
                    name="handle"
                    value={this.state.handle}
                    onChange={this.onChange}
                    info="A unique handle for your profile URL. Your full name, company name, nickname"
                  />

                <SelectListGroup
                  placeholder="Status"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  options={options}
                  info="Give us an idea of where you are at in your career"
                />
                <TextFieldGroup
                  placeholder="Company"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  info="Could be your own company or one you work for"
                />
                <TextFieldGroup
                  placeholder="Website"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  info="Could be your own website or a company one"
                />
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  
                  info="City or city & state suggested (eg. Boston, MA)"
                />
                <TextFieldGroup
                  placeholder="* Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  info="Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP"
                />
                <TextFieldGroup
                  placeholder="Github Username"
                  name="githubusername"
                  value={this.state.githubusername}
                  onChange={this.onChange}
                  info="If you want your latest repos and a Github link, include your username"
                />
                <TextAreaFieldGroup
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  info="Tell us a little about yourself"
                />

                  
                    
                    <div class="form-group">
                      <input type="text" class="form-control form-control-lg" placeholder="Github Username" name="githubusername" />
                      <small class="form-text text-muted">If you want your latest repos and a Github link, include your username</small>
                    </div>
                    <div class="form-group">
                      <textarea class="form-control form-control-lg" placeholder="A short bio of yourself" name="bio"></textarea>
                      <small class="form-text text-muted">Tell us a little about yourself</small>
                    </div>
        
                    <div class="mb-3">
                      <button type="button" class="btn btn-light">Add Social Network Links</button>
                      <span class="text-muted">Optional</span>
                    </div>

                   {socialInputs};
        
  
                    {/* <InputGroup
                      placeholder="Twitter Profile URL"
                      name="twitter"
                      icon="fab fa-twitter"
                      value=" https://twitter.com/"
                      onChange={this.onChange}
                      error={errors.twitter}
                    />

                    <InputGroup
                      placeholder="Facebook Profile URL"
                      name="facebook"
                      icon="fab fa-facebook"
                      value=" https://facebook.com/"
                      onChange={this.onChange}
                    />
        
                    
        
                    <InputGroup
                      placeholder="Linkedin Profile URL"
                      name="linkedin"
                      icon="fab fa-linkedin"
                      value=" https://linkedin.com/"
                      onChange={this.onChange}
                    />
        
                    <InputGroup
                      placeholder="Youtube Channel URL"
                      name="youtube"
                      icon="fab fa-youtube"
                      value=" https://youtube.com/"
                      onChange={this.onChange}
                    />
                    <InputGroup
                      placeholder="Instagram URL"
                      name="Instagram"
                      icon="fab fa-instagram"
                      value=" https://instagram.com/"
                      onChange={this.onChange}
                    /> */}
                    <input type="submit" class="btn btn-info btn-block mt-4" />

                  </form>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
