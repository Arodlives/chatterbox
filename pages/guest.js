
import Link from 'next/link'

function Guest(){
    return (
      <main className='container py-20 mx-auto text-center'>
        <h3 className='text-4xl font-bold'>
          Guest Homepage
        </h3>
        <div className='flex justify-center'>
          <Link href={'/login'} alt="To Login page" className='px-10 py-1 mt-5 bg-indigo-500 rounded-sm text-gray '>Sign in</Link>
        </div>
      </main>
    )
   }

export default Guest