export const categories = [
  { name: 'Writing & Content Creation', slug: 'writing', icon: '✍️', toolCount: 12 },
  { name: 'Image & Art Generation', slug: 'image-art', icon: '🎨', toolCount: 10 },
  { name: 'Video & Animation', slug: 'video', icon: '🎬', toolCount: 8 },
  { name: 'Voice & Audio', slug: 'voice-audio', icon: '🎤', toolCount: 7 },
  { name: 'Chatbots & Conversational AI', slug: 'chatbots', icon: '💬', toolCount: 9 },
  { name: 'Productivity & Automation', slug: 'productivity', icon: '⚡', toolCount: 11 },
  { name: 'Marketing & Sales', slug: 'marketing', icon: '📈', toolCount: 10 },
  { name: 'Data Analysis & Research', slug: 'data-analysis', icon: '📊', toolCount: 8 },
  // ...add more categories as needed
];

export const featuredTools = [
  {
    name: 'CopyGenie',
    slug: 'copygenie',
    logo: '/logo-placeholder.png',
    category: 'Writing & Content Creation',
    categorySlug: 'writing',
    rating: 4.7,
    url: 'https://copygenie.ai',
    priceTier: 'Freemium',
    features: ['API', 'Collaboration'],
    popularity: 95,
    platform: ['Web', 'Desktop']
  },
  {
    name: 'ArtifyAI',
    slug: 'artifyai',
    logo: '/logo-placeholder.png',
    category: 'Image & Art Generation',
    categorySlug: 'image-art',
    rating: 4.5,
    url: 'https://artifyai.com',
    priceTier: 'Paid',
    features: ['Mobile app'],
    popularity: 80,
    platform: ['Web', 'Mobile']
  },
  {
    name: 'VidMagic',
    slug: 'vidmagic',
    logo: '/logo-placeholder.png',
    category: 'Video & Animation',
    categorySlug: 'video',
    rating: 4.3,
    url: 'https://vidmagic.ai',
    priceTier: 'Free',
    features: ['API'],
    popularity: 70,
    platform: ['Web']
  },
  {
    name: 'VoiceFlow',
    slug: 'voiceflow',
    logo: '/logo-placeholder.png',
    category: 'Voice & Audio',
    categorySlug: 'voice-audio',
    rating: 4.6,
    url: 'https://voiceflow.com',
    priceTier: 'Freemium',
    features: ['API', 'Collaboration'],
    popularity: 88,
    platform: ['Web', 'Desktop']
  },
  {
    name: 'ChatPilot',
    slug: 'chatpilot',
    logo: '/logo-placeholder.png',
    category: 'Chatbots & Conversational AI',
    categorySlug: 'chatbots',
    rating: 4.4,
    url: 'https://chatpilot.ai',
    priceTier: 'Paid',
    features: ['API', 'Mobile app'],
    popularity: 77,
    platform: ['Web', 'Mobile']
  },
  {
    name: 'TaskBot',
    slug: 'taskbot',
    logo: '/logo-placeholder.png',
    category: 'Productivity & Automation',
    categorySlug: 'productivity',
    rating: 4.8,
    url: 'https://taskbot.com',
    priceTier: 'Freemium',
    features: ['Collaboration', 'API'],
    popularity: 92,
    platform: ['Web', 'Desktop']
  },
  {
    name: 'MarketMaven',
    slug: 'marketmaven',
    logo: '/logo-placeholder.png',
    category: 'Marketing & Sales',
    categorySlug: 'marketing',
    rating: 4.2,
    url: 'https://marketmaven.ai',
    priceTier: 'Paid',
    features: ['API', 'Mobile app'],
    popularity: 75,
    platform: ['Web', 'Mobile']
  },
  {
    name: 'DataSage',
    slug: 'datasage',
    logo: '/logo-placeholder.png',
    category: 'Data Analysis & Research',
    categorySlug: 'data-analysis',
    rating: 4.6,
    url: 'https://datasage.com',
    priceTier: 'Freemium',
    features: ['API', 'Collaboration'],
    popularity: 85,
    platform: ['Web', 'Desktop']
  },
  {
    name: 'WriteWise',
    slug: 'writewise',
    logo: '/logo-placeholder.png',
    category: 'Writing & Content Creation',
    categorySlug: 'writing',
    rating: 4.1,
    url: 'https://writewise.ai',
    priceTier: 'Free',
    features: ['Mobile app'],
    popularity: 60,
    platform: ['Web', 'Mobile']
  },
  {
    name: 'PixelSmith',
    slug: 'pixelsmith',
    logo: '/logo-placeholder.png',
    category: 'Image & Art Generation',
    categorySlug: 'image-art',
    rating: 4.3,
    url: 'https://pixelsmith.com',
    priceTier: 'Freemium',
    features: ['API'],
    popularity: 68,
    platform: ['Web']
  },
  {
    name: 'Jasper',
    slug: 'jasper',
    logo: '/logo-placeholder.png',
    category: 'Writing & Content Creation',
    categorySlug: 'writing',
    rating: 4.8,
    url: 'https://jasper.ai',
    priceTier: 'Paid',
    features: ['API', 'Collaboration'],
    popularity: 98,
    platform: ['Web']
  },
  {
    name: 'Grammarly',
    slug: 'grammarly',
    logo: '/logo-placeholder.png',
    category: 'Writing & Content Creation',
    categorySlug: 'writing',
    rating: 4.7,
    url: 'https://grammarly.com',
    priceTier: 'Freemium',
    features: ['Browser Extension', 'Desktop App', 'Mobile app'],
    popularity: 99,
    platform: ['Web', 'Desktop', 'Mobile']
  },
  {
    name: 'DALL-E',
    slug: 'dall-e',
    logo: '/logo-placeholder.png',
    category: 'Image & Art Generation',
    categorySlug: 'image-art',
    rating: 4.9,
    url: 'https://openai.com/dall-e/',
    priceTier: 'Paid',
    features: ['API'],
    popularity: 97,
    platform: ['Web']
  },
  {
    name: 'Midjourney',
    slug: 'midjourney',
    logo: '/logo-placeholder.png',
    category: 'Image & Art Generation',
    categorySlug: 'image-art',
    rating: 4.8,
    url: 'https://midjourney.com',
    priceTier: 'Paid',
    features: ['Discord Bot'],
    popularity: 95,
    platform: ['Web']
  },
  {
    name: 'ChatGPT',
    slug: 'chatgpt',
    logo: '/logo-placeholder.png',
    category: 'Chatbots & Conversational AI',
    categorySlug: 'chatbots',
    rating: 4.9,
    url: 'https://chat.openai.com',
    priceTier: 'Freemium',
    features: ['API', 'Web App'],
    popularity: 100,
    platform: ['Web']
  },
  {
    name: 'Synthesia',
    slug: 'synthesia',
    logo: '/logo-placeholder.png',
    category: 'Video & Animation',
    categorySlug: 'video',
    rating: 4.7,
    url: 'https://synthesia.io',
    priceTier: 'Paid',
    features: ['API', 'Templates'],
    popularity: 90,
    platform: ['Web']
  },
  {
    name: 'Otter.ai',
    slug: 'otter-ai',
    logo: '/logo-placeholder.png',
    category: 'Voice & Audio',
    categorySlug: 'voice-audio',
    rating: 4.6,
    url: 'https://otter.ai',
    priceTier: 'Freemium',
    features: ['Mobile app', 'Collaboration'],
    popularity: 89,
    platform: ['Web', 'Mobile']
  },
  {
    name: 'Notion AI',
    slug: 'notion-ai',
    logo: '/logo-placeholder.png',
    category: 'Productivity & Automation',
    categorySlug: 'productivity',
    rating: 4.8,
    url: 'https://notion.so/product/ai',
    priceTier: 'Paid',
    features: ['Collaboration', 'Templates'],
    popularity: 93,
    platform: ['Web', 'Desktop', 'Mobile']
  },
  {
    name: 'DeepL',
    slug: 'deepl',
    logo: '/logo-placeholder.png',
    category: 'Productivity & Automation',
    categorySlug: 'productivity',
    rating: 4.7,
    url: 'https://deepl.com',
    priceTier: 'Freemium',
    features: ['API', 'Desktop App'],
    popularity: 91,
    platform: ['Web', 'Desktop', 'Mobile']
  },
  {
    name: 'Copy.ai',
    slug: 'copy-ai',
    logo: '/logo-placeholder.png',
    category: 'Writing & Content Creation',
    categorySlug: 'writing',
    rating: 4.6,
    url: 'https://copy.ai',
    priceTier: 'Freemium',
    features: ['Templates', 'API'],
    popularity: 87,
    platform: ['Web']
  },
  {
    name: 'Descript',
    slug: 'descript',
    logo: '/logo-placeholder.png',
    category: 'Video & Animation',
    categorySlug: 'video',
    rating: 4.7,
    url: 'https://descript.com',
    priceTier: 'Freemium',
    features: ['Video Editing', 'Transcription'],
    popularity: 89,
    platform: ['Web', 'Desktop']
  },
  {
    name: 'Lumen5',
    slug: 'lumen5',
    logo: '/logo-placeholder.png',
    category: 'Video & Animation',
    categorySlug: 'video',
    rating: 4.5,
    url: 'https://lumen5.com',
    priceTier: 'Freemium',
    features: ['Templates', 'Stock Media'],
    popularity: 82,
    platform: ['Web']
  },
  {
    name: 'Murf AI',
    slug: 'murf-ai',
    logo: '/logo-placeholder.png',
    category: 'Voice & Audio',
    categorySlug: 'voice-audio',
    rating: 4.6,
    url: 'https://murf.ai',
    priceTier: 'Paid',
    features: ['Voice Cloning', 'API'],
    popularity: 84,
    platform: ['Web']
  },
  {
    name: 'Replika',
    slug: 'replika',
    logo: '/logo-placeholder.png',
    category: 'Chatbots & Conversational AI',
    categorySlug: 'chatbots',
    rating: 4.3,
    url: 'https://replika.ai',
    priceTier: 'Freemium',
    features: ['Mobile app', 'Voice Chat'],
    popularity: 80,
    platform: ['Web', 'Mobile']
  },
  {
    name: 'Pictory',
    slug: 'pictory',
    logo: '/logo-placeholder.png',
    category: 'Video & Animation',
    categorySlug: 'video',
    rating: 4.4,
    url: 'https://pictory.ai',
    priceTier: 'Paid',
    features: ['Templates', 'Text to Video'],
    popularity: 78,
    platform: ['Web']
  },
  {
    name: 'Fireflies.ai',
    slug: 'fireflies-ai',
    logo: '/logo-placeholder.png',
    category: 'Productivity & Automation',
    categorySlug: 'productivity',
    rating: 4.5,
    url: 'https://fireflies.ai',
    priceTier: 'Freemium',
    features: ['Meeting Notes', 'Integrations'],
    popularity: 86,
    platform: ['Web']
  },
  {
    name: 'QuillBot',
    slug: 'quillbot',
    logo: '/logo-placeholder.png',
    category: 'Writing & Content Creation',
    categorySlug: 'writing',
    rating: 4.6,
    url: 'https://quillbot.com',
    priceTier: 'Freemium',
    features: ['Paraphrasing', 'Grammar Check'],
    popularity: 90,
    platform: ['Web']
  },
  {
    name: 'RunwayML',
    slug: 'runwayml',
    logo: '/logo-placeholder.png',
    category: 'Image & Art Generation',
    categorySlug: 'image-art',
    rating: 4.5,
    url: 'https://runwayml.com',
    priceTier: 'Freemium',
    features: ['Video Editing', 'Image Generation'],
    popularity: 83,
    platform: ['Web']
  },
  {
    name: 'Tome',
    slug: 'tome',
    logo: '/logo-placeholder.png',
    category: 'Productivity & Automation',
    categorySlug: 'productivity',
    rating: 4.4,
    url: 'https://tome.app',
    priceTier: 'Freemium',
    features: ['Presentations', 'Templates'],
    popularity: 79,
    platform: ['Web']
  },
  {
    name: 'ElevenLabs',
    slug: 'elevenlabs',
    logo: '/logo-placeholder.png',
    category: 'Voice & Audio',
    categorySlug: 'voice-audio',
    rating: 4.7,
    url: 'https://elevenlabs.io',
    priceTier: 'Paid',
    features: ['Voice Synthesis', 'API'],
    popularity: 88,
    platform: ['Web']
  },
  {
    name: 'Perplexity AI',
    slug: 'perplexity-ai',
    logo: '/logo-placeholder.png',
    category: 'Chatbots & Conversational AI',
    categorySlug: 'chatbots',
    rating: 4.5,
    url: 'https://perplexity.ai',
    priceTier: 'Free',
    features: ['Web Search', 'API'],
    popularity: 85,
    platform: ['Web']
  },
  {
    name: 'You.com',
    slug: 'you-com',
    logo: '/logo-placeholder.png',
    category: 'Data Analysis & Research',
    categorySlug: 'data-analysis',
    rating: 4.3,
    url: 'https://you.com',
    priceTier: 'Free',
    features: ['Web Search', 'AI Chat'],
    popularity: 81,
    platform: ['Web']
  },
  {
    name: 'Beautiful.ai',
    slug: 'beautiful-ai',
    logo: '/logo-placeholder.png',
    category: 'Productivity & Automation',
    categorySlug: 'productivity',
    rating: 4.5,
    url: 'https://beautiful.ai',
    priceTier: 'Paid',
    features: ['Presentations', 'Templates'],
    popularity: 84,
    platform: ['Web']
  },
  {
    name: 'SurferSEO',
    slug: 'surferseo',
    logo: '/logo-placeholder.png',
    category: 'SEO & Website Tools',
    categorySlug: 'seo-tools',
    rating: 4.6,
    url: 'https://surferseo.com',
    priceTier: 'Paid',
    features: ['SEO Audit', 'Content Editor'],
    popularity: 87,
    platform: ['Web']
  },
  {
    name: 'Jasper Art',
    slug: 'jasper-art',
    logo: '/logo-placeholder.png',
    category: 'Image & Art Generation',
    categorySlug: 'image-art',
    rating: 4.4,
    url: 'https://jasper.ai/art',
    priceTier: 'Paid',
    features: ['Image Generation'],
    popularity: 80,
    platform: ['Web']
  }
]; 