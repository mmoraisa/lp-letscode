import { MOCK_API_ENDPOINT } from "defaults/Endpoints"

class CaptureLeadApi {

  static captureLead = userData => 
    fetch(`${MOCK_API_ENDPOINT}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })

}

export default CaptureLeadApi
