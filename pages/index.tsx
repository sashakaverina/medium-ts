import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Head>
        <title>Medium blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'>
            <span className='underline decoration-black decoration-4'>Medium</span> is a place to write, read and connect</h1>
          <h2>It's easy to post your thinking and share it with millions of readers.</h2>
        </div>
        <img 
        className='hidden md:inline-flex h-32 lg:h-full'
        src='https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png'/>
      </div>
    </div>
  )
}
