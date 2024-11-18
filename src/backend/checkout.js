const stripe = require('stripe')('pk_live_51Q6wvdIKUom0H2xVCF8pKbUqC6ytSEbhKRdNCcSX6WOSLbojVlWUv3Cm22H9fYJOzhS82WPTKIKbt3uZArqzldZq006lE87hpc');
const express = require('express');
const app = express();

// Basic middleware
app.use(express.static('public'));
app.use(express.json());

// Add CORS headers middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://www.chatwithslate.com');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

const YOUR_DOMAIN = 'https://www.chatwithslate.com/';

const PRICE_IDS = {
  'Premium Package': {
    oneTime: 'price_1QMHy8IKUom0H2xV6g5ZMHHf',
    recurring: 'price_1QMHjNIKUom0H2xV1d1zJUxH'
  },
  'Advanced Assistant': {
    oneTime: 'price_1QMHvgIKUom0H2xVbTa2Zkyx',
    recurring: 'price_1QMHhCIKUom0H2xVFGbXXqO8'
  },
  'Standard Assistant': {
    oneTime: 'price_1QMHtUIKUom0H2xV9DM5SNE5',
    recurring: 'price_1QMHeqIKUom0H2xVtjSlfZJb'
  }
};

app.post('/create-checkout-session', async (req, res) => {
  try {
    const { package: selectedPackage } = req.body;
    
    if (!PRICE_IDS[selectedPackage]) {
      return res.status(400).json({ error: 'Invalid package selected' });
    }

    const priceIds = PRICE_IDS[selectedPackage];

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceIds.oneTime,
          quantity: 1,
        },
        {
          price: priceIds.recurring,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
      automatic_tax: { enabled: true },
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(4242, () => console.log('Running on port 4242')); 