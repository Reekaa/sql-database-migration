import axios from 'axios';
import connectionProfile from '../connection_profile.json'

export default async function usePost () {
    const [errorMessage, setErrorMessage] = useState('');
    
    try {
        const res = await axios.post(
            'https://datamigration.googleapis.com/v1/projects/db-migration-project-s2042203/locations/europe-west2-c/connectionProfiles?connectionProfileId=on-prem-sql-profile',
            connectionProfile,
            {
                method: 'POST',
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        if (res.status === 201) {
            console.log('success');
        }
    } catch (err) {
        setErrorMessage(err.response.data.message);
    }
}