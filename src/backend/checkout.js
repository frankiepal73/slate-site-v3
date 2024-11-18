const stripe = require('stripe')('pk_live_51Q6wvdIKUom0H2xVCF8pKbUqC6ytSEbhKRdNCcSX6WOSLbojVlWUv3Cm22H9fYJOzhS82WPTKIKbt3uZArqzldZq006lE87hpc');
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json()); // Middleware to parse JSON bodies

const YOUR_DOMAIN = 'https://www.chatwithslate.com/';

app.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: 'price_1QMJbwIKUom0H2xVDpiPgVoD', // Replace with your actual Price ID
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
      automatic_tax: { enabled: true },
    });

    res.redirect(303, session.url);
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(4242, () => console.log('Running on port 4242')); 