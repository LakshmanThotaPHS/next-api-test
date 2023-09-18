import { createEndpoint } from '../../../helpers/createEndpoint'

export async function handler(req, res) {
  if (req.method === 'POST') {
    // Parse the incoming JSON data from Formstack webhook
      const formData = req.body;
      
      if(formData.email_address && formData.name && formData.degreetitle){
        const mailchimpPostData = {
            "email_address": formData.email_address,
            "merge_fields": {
              "FNAME": formData.name,
              "LNAME": formData.degreetitle
            },
            "status": "subscribed"
        }
        const targetApiUrl = 'https://us21.api.mailchimp.com/3.0/lists/7c7acecadd/members';
        try {
            //Make a POST request to the target API
            const response = await fetch(targetApiUrl, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 4c60713f9427e485382ee5736cecb95f-us21'
                },
                body: JSON.stringify(mailchimpPostData), // Convert the form data to JSON
            });

            // Check if the response status code indicates success (e.g., 200 OK)
            if (response.ok) {
                // The request to the target API was successful
                const responseData = await response.json();
                console.log('Response from Target API:', responseData);
                res.status(200).json({ message: 'Webhook received and data sent to target API' });
            } else {
                // The request to the target API failed
                console.error('Error sending data to Target API:', response.status);
                res.status(500).json({ error: 'Error sending data to target API' });
            }
        } catch (error) {
            // Handle any exceptions that occur during the request
            console.error('Error sending request:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
      }else{
        res.status(500).json({ error: 'Invalid body' });
      }
  } else {
    // Return an error for unsupported HTTP methods
    res.status(405).end();
  }
}

  export default createEndpoint({
    allowedMethods: ['post'],
    handler,
})