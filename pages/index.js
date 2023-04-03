import Head from 'next/head'

import Header from '@/components/header/Header';
import Body from '@/components/body/index/Body';
import Footer from '@/components/footer/Footer';

export default function Home({sections}) {



  return (
    <>
      <Head>
          <title>The LaSallian — The bastion of issue-oriented critical thinking</title>
      </Head>

      <div className="wrapper">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </>
  )
}

export async function getServerSideProps({req, res}) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  
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
  };
}