const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: '4da9a44cc48f30f55467c6d7c48cd9a1-us22',
  server: 'us22',
});

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      console.log('posted');
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
    res.status(404).json({ message: error.message });
  }
}
