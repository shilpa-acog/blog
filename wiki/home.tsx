import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Company Aganitha</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="list-disc pl-5">
            <li><Link href="/kb">Knowledge Base</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/about">About Us</Link></li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Recent Updates</h2>
          {/* Add logic to fetch and display recent updates */}
        </section>
      </div>
      
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Department Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-4 rounded">
            <h3 className="text-xl font-medium mb-2">IT</h3>
            {/* Add IT highlight content */}
          </div>
          <div className="border p-4 rounded">
            <h3 className="text-xl font-medium mb-2">Engineering</h3>
            {/* Add Engineering highlight content */}
          </div>
          <div className="border p-4 rounded">
            <h3 className="text-xl font-medium mb-2">Science</h3>
            {/* Add Science highlight content */}
          </div>
        </div>
      </section>
    </div>
  )
}
