export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8 space-y-12">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Magrum Rentals</h1>
        <p className="text-lg text-gray-400">Modern, reliable housing you can count on</p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">Available Properties</h2>
        <div className="bg-gray-800 rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-semibold">1007 Elm St S, Moorhead, MN 56560</h3>
          <p className="text-gray-300 mt-2">Spacious 3-bedroom home in a quiet neighborhood. Features hardwood floors, updated kitchen, large backyard, and pet-friendly policy.</p>
          <p className="mt-2 text-green-400 font-semibold">Status: Available</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">Contact Us</h2>
        <form className="bg-gray-800 p-6 rounded-2xl shadow-md space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400" />
          <textarea placeholder="Message" rows="4" className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"></textarea>
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Send</button>
        </form>
      </section>

      <footer className="text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} Magrum Rentals. All rights reserved.
      </footer>
    </main>
  );
}