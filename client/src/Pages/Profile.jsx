import React from 'react';
<<<<<<< 885ae94c9894b0b1d7f60e483d24738a78633c71
<<<<<<< ee2d5a2340e26bd2ac68475b6558f6694b56dedc
=======
=======
<<<<<<< 296b74dfbfb680ea4c54f7d8aec1f132ae0a750b
>>>>>>> /*Merge Conflicts*/
<<<<<<< 611051f6ecbeb8332bde510fb085749bbf28edc8
<<<<<<< e619b692fceb5b46c242dd4ef7959bc00957f8a7
>>>>>>> /*Fixing mergin problems*/
<<<<<<< 1d3a09abbcbbb7149757c4b62079173ab38ad02c
<<<<<<< 84b6d1eadaa4520ebe85a517e1282c75b9773843
import ProfilePage from '../components/home/ProfileComp.jsx';

<<<<<<< ca997bc8a49fa8b05abc68697369324c882822e6
<<<<<<< 78b5499c5ef91a5ffe368165e798111d339ed8e0
export default class Profile extends Component {
=======
=======
=======
=======
>>>>>>> /*merge problems*/
import MyGoogleMap from '../components/Map/MapConfig.jsx';
import CardExampleWithAvatar from '../components/profile/AvatarVender.jsx';
>>>>>>> /*Fixing mergin problems*/
<<<<<<< ee2d5a2340e26bd2ac68475b6558f6694b56dedc
=======
=======
import ProfilePage from '../components/home/ProfileComp.jsx';
>>>>>>> trying to render avatar in profile page
=======
<<<<<<< de44d9351c0e984eee47cfd11d52479c46a0a393
import ProfilePage from '../components/home/ProfileComp.jsx';

=======
import MyGoogleMap from '../components/Map/MapConfig.jsx';
import CardExampleWithAvatar from '../components/profile/AvatarVender.jsx';
>>>>>>> /*Fixing mergin problems*/
>>>>>>> /*Fixing mergin problems*/
<<<<<<< 885ae94c9894b0b1d7f60e483d24738a78633c71
>>>>>>> /*Fixing mergin problems*/
=======
=======
import ProfilePage from '../components/home/ProfileComp.jsx';


>>>>>>> /*Merge Conflicts*/
>>>>>>> /*Merge Conflicts*/

 class Profile extends React.Component {
>>>>>>> profile page in process
  state = {
    person: []
  }

  componentDidMount() {
    axios.get(`/profile`,{
      params: {
        id: '${id}'
      }
    })
      .then(res => {
        const person = res.data;
        this.setState({ person });

      })
      .catch ((error) => {
        console.log(error)
      })
     }

  render() {
    const {picture, name} = this.state.person
    return (
<<<<<<< 2e602b1f99a2852441ac7119ab37bed3f45a86cb
<<<<<<< df7fee16d3f7d7c4701d144e839899d9485584c8
<<<<<<< ace5c5133462076b90bf6882580db64fa2081275
<<<<<<< 32c0952e5720f7dbf3d90626d54c5a98a0fc00cc
<<<<<<< 7861a6a22543abea8b4ce779d578986b2319f233
<<<<<<< 78b5499c5ef91a5ffe368165e798111d339ed8e0
      <div>
        <ul>
          <AvatarVender name={name} picture={picture} />
        </ul>
      </div>
=======
      <ProfilePage />
>>>>>>> profile page in process
=======
=======
=======
<<<<<<< c0efbd1a2a669b0b2a880f732b7aba8494e19dbe
>>>>>>> /*merge conflicts*/
<<<<<<< 59c5c71839f5999e5bd11da5620270d82e2030b8
>>>>>>> profile page in process
<<<<<<< c238647732a37bab123421f420669429889eded9
      <ProfilePage />
>>>>>>> /*merge conflicts*/
=======
=======
<<<<<<< 357737fb2932834b6ade47a9804a6ca65605ee62
<<<<<<< d885ffb06506d98a21bb556d9c647f0f587c204f
>>>>>>> fixed merge conflict
      <div>
      <ProfilePage />
      </div>
>>>>>>> /*merge conflicts*/
=======
      <ProfilePage />
>>>>>>> profile page in process
=======
<<<<<<< 2e602b1f99a2852441ac7119ab37bed3f45a86cb
      <div>
      <ProfilePage />
      </div>
>>>>>>> /*merge conflicts*/
=======
      <ProfilePage />
>>>>>>> fixed merge conflict
>>>>>>> fixed merge conflict
    )
  }
}

export default Profile;
