import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { treatments } from '@/lib/menu-data';
import { siteConfig } from '@/lib/site-config';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TreatmentDetail } from '@/components/sections/TreatmentDetail';

export function generateStaticParams() {
  return treatments
    .filter((t) => t.category === 'artmake')
    .map((t) => ({ slug: t.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const treatment = treatments.find(
      (t) => t.slug === slug && t.category === 'artmake'
    );
    if (!treatment) return { title: 'Not Found' };
    return {
      title: `${treatment.name}｜アートメイク`,
      description: treatment.description.slice(0, 120),
      openGraph: {
        title: `${treatment.name}｜${siteConfig.clinicName}`,
        description: treatment.description.slice(0, 120),
      },
    };
  });
}

export default async function ArtmakeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = treatments.find(
    (t) => t.slug === slug && t.category === 'artmake'
  );

  if (!treatment) notFound();

  return (
    <>
      <TreatmentDetail treatment={treatment} />
      <div className="mx-auto max-w-[1280px] px-4 pb-8">
        <Breadcrumb
          items={[
            { label: 'アートメイク', href: '/artmake' },
            { label: treatment.name },
          ]}
        />
      </div>
    </>
  );
}
