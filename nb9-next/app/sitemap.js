export const dynamic = 'force-static';

export default function sitemap() {
  return [
    {
      url: 'https://nakedbyninemusic.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
