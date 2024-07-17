const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: '669f7e5d06a43c67f49990f594abe54f-us22',
  server: 'us22',
});

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { email = '' } = req.body;

      if (!email) {
        res.status(404).json({ message: 'No email' });
      } else {
        await mailchimp.lists.addListMember('d62ef89e63', {
          email_address: email,
          status: 'subscribed',
        });
        res.status(200).json({ email });
      }
    }
  } catch (error) {
    console.error('oh nooo!', error);
  }
}
