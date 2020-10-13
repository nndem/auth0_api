import React, {useEffect, useState} from 'react'
import {useAuth0} from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty"

const Profile = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);

    useEffect(()=> {
        const getUserMetadata = async () => {
            const domain = 'dev-75n8r-m9.us.auth0.com';

            try {
                const accessToken = await getAccessTokenSilently({
                    audience: `https://${domain}/api/v2`,
                    scope: "read:current_user"
                })

                const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

                //protected API: requires token
                const metadataResponse = await fetch(userDetailsByIdUrl, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                })

                const {user_metadata} = await metadataResponse.json();

                setUserMetadata(user_metadata);
                console.log("Metadata got")
            } catch (e) {
                console.log(e.message);
            }
        };

        getUserMetadata();
    }, )

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <h3>User Metadata</h3>
                {userMetadata ? (
                    <pre><JSONPretty data = {userMetadata}/></pre>
                ) : (
                    "No user metadata defined"
                )}
            </div>
        )
    );
};

export default Profile