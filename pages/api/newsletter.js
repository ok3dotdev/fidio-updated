const mailchimp = require('@mailchimp/mailchimp_marketing');

console.log('env', process.env.MAILCHIMP_API_KEY);
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
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
