import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { treatments } from '@/lib/menu-data';
import { siteConfig } from '@/lib/site-config';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TreatmentDetail } from '@/components/sections/TreatmentDetail';

export function generateStaticParams() {
  return treatments
    .filter((t) => t.category === 'surgery' || t.category === 'dermatology')
    .map((t) => ({ slug: t.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const treatment = treatments.find(
      (t) =>
        t.slug === slug &&
        (t.category === 'surgery' || t.category === 'dermatology')
    );
    if (!treatment) return { title: 'Not Found' };
    const categoryLabel =
      treatment.category === 'surgery' ? '美容外科' : '美容皮膚科';
    return {
      title: `${treatment.name}｜${categoryLabel}`,
      description: treatment.description.slice(0, 120),
      openGraph: {
        title: `${treatment.name}｜${siteConfig.clinicName}`,
        description: treatment.description.slice(0, 120),
      },
    };
  });
}

export default async function MenuDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = treatments.find(
    (t) =>
      t.slug === slug &&
      (t.category === 'surgery' || t.category === 'dermatology')
  );

  if (!treatment) notFound();

  const categoryLabel =
    treatment.category === 'surgery' ? '美容外科' : '美容皮膚科';
  const categoryPath =
    treatment.category === 'surgery' ? '/menu/surgery' : '/menu/dermatology';

  return (
    <>
      <TreatmentDetail treatment={treatment} />
      <div className="mx-auto max-w-[1280px] px-4 pb-8">
        <Breadcrumb
          items={[
            { label: '施術をさがす', href: '/menu' },
            { label: categoryLabel, href: categoryPath },
            { label: treatment.name },
          ]}
        />
      </div>
    </>
  );
}
