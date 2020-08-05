import axios from 'axios';


export const getApplications = async () => {
    const result = await axios.get('http://localhost:3000/applications');
    if(result.status === 200) {
        return result.data;
    } else {
        throw result;
    }
}

export const getLatestRuns = async () => {
    const result = await axios.get('http://localhost:3000/runs/latest');
    if(result.status === 200) {
        return result.data;
    } else {
        throw result;
    }
}