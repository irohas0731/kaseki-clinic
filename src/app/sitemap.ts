import { MetadataRoute } from 'next';
import { treatments } from '@/lib/menu-data';
import { equipmentItems } from '@/lib/equipment-data';
import { newsItems } from '@/lib/news-data';

const BASE_URL = 'https://example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/guide`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/clinic`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/menu`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/menu/surgery`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/menu/dermatology`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/artmake`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/info`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/price`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/case`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/cosme`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/access`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/news`, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE_URL}/campaign`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const treatmentPages: MetadataRoute.Sitemap = treatments.map((t) => {
    const basePath = t.category === 'artmake' ? '/artmake' : '/menu';
    return {
      url: `${BASE_URL}${basePath}/${t.slug}`,
      changeFrequency: 'monthly',
      priority: 0.8,
    };
  });

  const equipmentPages: MetadataRoute.Sitemap = equipmentItems.map((e) => ({
    url: `${BASE_URL}/equipment/${e.slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const newsPages: MetadataRoute.Sitemap = newsItems.map((n) => ({
    url: `${BASE_URL}/news/${n.id}`,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticPages, ...treatmentPages, ...equipmentPages, ...newsPages];
}
