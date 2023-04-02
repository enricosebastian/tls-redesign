import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'

import Section from '@/components/Section'

export default function Home({sections}) {
  const sectionComponents = sections.map(section => <Section key={section.category} section={section}/>);
  return (
    <>
      <Head>
          <title>The LaSallian — The bastion of issue-oriented critical thinking</title>
      </Head>
      <h1>The LaSallian - Next.js version</h1>
      {sectionComponents}
    </>
  )
}

export async function getStaticProps({ req, res }) {
  const universityResponse = await fetch('https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,excerpt,title,slug,categories,jetpack_featured_media_url&per_page=6&categories=4');
  const universityData = await universityResponse.json();

  const menagerieResponse = await fetch('https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,excerpt,title,slug,categories,jetpack_featured_media_url&per_page=6&categories=8');
  const menagerieData = await menagerieResponse.json();

  const sportsResponse = await fetch('https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,excerpt,title,slug,categories,jetpack_featured_media_url&per_page=6&categories=6');
  const sportsData = await sportsResponse.json();

  const vanguardResponse = await fetch('https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,excerpt,title,slug,categories,jetpack_featured_media_url&per_page=6&categories=1883');
  const vanguardData = await vanguardResponse.json();

  const opinionResponse = await fetch('https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,excerpt,title,slug,categories,jetpack_featured_media_url&per_page=6&categories=5');
  const opinionData = await opinionResponse.json();

  return {
      props: {
          sections: [
              {
                  name: 'University',
                  category: 4,
                  articles: universityData,
              },
              {
                  name: 'Menagerie',
                  category: 8,
                  articles: menagerieData,
              },
              {
                  name: 'Sports',
                  category: 6,
                  articles: sportsData,
              },
              {
                  name: 'Vanguard',
                  category: 1883,
                  articles: vanguardData,
              },
              {
                  name: 'Opinions',
                  category: 5,
                  articles: opinionData,
              },
          ],
      },
      revalidate: 10,
  };
}