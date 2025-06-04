export default function HomePage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center text-white p-8 space-y-16"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586105251261-72a756497a12?auto=format&fit=crop&w=1470&q=80')" }}
    >
      <div className="bg-black bg-opacity-70 p-10 rounded-2xl shadow-xl max-w-4xl mx-auto">
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold">Magrum Rentals</h1>
          <p className="text-lg text-gray-300">Modern, reliable housing you can count on</p>
        </header>

        <section className="space-y-6 pt-10">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
            >
              Send
            </button>
          </form>
        </section>
      </div>

      <footer className="text-center text-sm text-gray-300 pt-10">
        &copy; {new Date().getFullYear()} Magrum Rentals. All rights reserved.
      </footer>
    </main>
  );
}