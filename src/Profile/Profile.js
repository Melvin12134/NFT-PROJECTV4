import './Profile.css';


export const Profile = () => {

return (

<div className="profileflexcontainer">

    <div className="profilepagecontainer">
        <div className="profilecontainer">
            <div className="profilepicturecontainer">
                <img src="/Images/profilepicture.jpg"></img>
            </div>
            <div className="usernameprofilecontainer"><h1 className="profileusername">Username</h1></div>

        </div>
        <div className="inventorycontainer"></div>
    
    </div>

</div>

)

}