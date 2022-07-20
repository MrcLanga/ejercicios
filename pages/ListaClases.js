import Link from 'next/Link' 
import Head from 'next/head'

function ListaClases() {
  return (
    
    <div>
      <Head>
        <title>BestCycling</title>
        <meta name="description" content="Proyecto para la empresa BestCycling" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className='main'>
        <header className='cabecera'>
          <nav>
            <h1 className='logo'>
              <Link href='/'>
                <img src='/logo.png' width='200px'/>
              </Link>
            </h1>
          </nav>
        </header>
      </main>
  </div>
  )
}

export default ListaClases