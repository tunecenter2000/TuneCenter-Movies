export const colors = {
  primary: {
    dark: '#1A1A1A',
    light: '#F5F5F5',
    accent: '#E50914',
  },
  gradients: {
    primary: 'linear-gradient(45deg, #E50914, #FF5722)',
  }
};

export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px'
};

export const PREMIUM_PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    price: 1.00,
    features: [
      'HD streaming',
      'Watch on 1 device',
      'Cancel anytime',
      'First month free'
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 14.99,
    features: [
      'Full HD streaming',
      'Watch on 2 devices',
      'Cancel anytime',
      'First month free',
      'Download & watch offline'
    ],
    isPopular: true
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 19.99,
    features: [
      '4K Ultra HD streaming',
      'Watch on 4 devices',
      'Cancel anytime',
      'First month free',
      'Download & watch offline',
      'Exclusive content access'
    ]
  }
];

export const FEATURES = [
  {
    id: 'unlimited',
    title: 'Unlimited Entertainment',
    description: 'Stream thousands of movies, TV shows, and documentaries anytime, anywhere.',
    icon: 'film'
  },
  {
    id: 'exclusive',
    title: 'Exclusive Originals',
    description: 'Enjoy award-winning Tune Center originals you cant find anywhere else.',
    icon: 'star'
  },
  {
    id: 'download',
    title: 'Download & Watch Offline',
    description: 'Save your data by downloading shows to watch on the go without an internet connection.',
    icon: 'download'
  },
  {
    id: 'devices',
    title: 'Watch on Any Device',
    description: 'Stream seamlessly on your phone, tablet, laptop, TV, and more.',
    icon: 'TvMinimalPlay'
  },
  {
    id: 'profiles',
    title: 'Multiple Profiles',
    description: 'Create up to 5 profiles for different members of your household.',
    icon: 'users'
  },
  {
    id: 'cancel',
    title: 'Cancel Anytime',
    description: 'Flexible plans with no complicated contracts. Cancel online anytime.',
    icon: 'CircleX'
  }
];

export const FOOTER_LINKS = {
  company: [  
    { name: '', path: '' },
    { name: '', path: '' },
    { name: '', path: '' },
    { name: '', path: '' }
    // { name: 'About Us', path: '/about' },
    // { name: 'Careers', path: '/careers' },
    // { name: 'Press', path: '/press' },
    // { name: 'Blog', path: '/blog' }
  ],
  support: [
    // { name: 'Help Center', path: '/help' },
    { name: 'Contact Us', path: '/contact' },
    // { name: 'FAQ', path: '/faq' },
    // { name: 'Account', path: '/account' }
  ],
  legal: [
    { name: 'Terms of Service', path: '/terms-and-conditions' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    // { name: 'Cookie Preferences', path: '/cookies' },
    // { name: 'Corporate Information', path: '/corporate' }
  ],
  social: [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'YouTube', url: 'https://youtube.com' }
  ]
};