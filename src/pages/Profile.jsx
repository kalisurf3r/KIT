import { getUserProfileDetails } from '../utils/apiUtil';
import './Profile.css';

export default function Profile(props) {
    const token = props.token;
    const userData = props.user;
    const isLoggedIn = props.isLoggedIn;
    const userId = userData.id;
    console.log(`got back user id as: ${userId} and token as: ${token}`);

    console.log("Get user profile");
    const userDetResponse = getUserProfileDetails(userId, token);
    console.log("Get services where user is the service provider");
    //TODO: 
    console.log("Get services where user is the customer");
    //TODO: 



    return (
        <>
            <h1 id='profileHeader'>My Profile</h1>
            <div className="container-fluid profilePageContainer">
                <div className='row'>
                    <div className='col col-md-4 userDetailsSection'>
                        <div className='userPicAndPersonalDetails'>

                            <div className='userPic'>
                                <h6>User pic goes here</h6>

                            </div>
                            <div className='userPersonalDetails'>
                                <h6>User personal details goes here</h6>

                            </div>
                        </div>
                        <h4 className="aboutMe" id="aboutMeHeading">About me</h4>
                        <p className="aboutMe">Lorem ipsum dolor sit amet consectetur adipiscing, elit auctor nisl conubia sapien curabitur, cum montes maecenas senectus gravida. Suscipit molestie sagittis luctus ad ullamcorper ante commodo blandit vestibulum, senectus diam parturient metus interdum egestas mattis. Magna metus egestas ligula fusce parturient laoreet nulla vitae pulvinar, in id scelerisque lectus massa ut est diam inceptos litora, leo luctus sagittis ante aenean odio cum felis</p>
                        <div className='userCharities'>{/*TODO: Show chairty images*/}<h6>user charities</h6></div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" id='svcsOffered'>Services I Offered</li>
                            <li className="list-group-item" id='svcsBooked'>Services I've Booked</li>
                        </ul>
                    </div>





                    {/* Services display card */}
                    <div className='col col-md-8 userSvcsDetailsSection'>

                    </div>

                </div>

            </div>
        </>
    );
}