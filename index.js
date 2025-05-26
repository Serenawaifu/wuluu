export default function Home() {
  return (
    <div className="bg-cream text-gray-900 font-body">
      <header className="flex justify-between items-center px-6 py-4 border-b border-pink">
        <h1 className="text-3xl font-display text-pink">Wulu</h1>
        <nav className="space-x-4 text-lg">
          <a href="#about" className="hover:text-pink">About</a>
          <a href="#community" className="hover:text-pink">Community</a>
          <a href="#join" className="hover:text-pink">Join</a>
        </nav>
      </header>

      <section className="text-center py-20 bg-paleYellow">
        <h2 className="text-5xl font-display mb-4">Welcome to Wulu</h2>
        <p className="text-xl max-w-xl mx-auto">
          Your cozy corner for anime discussions, fan art, and more. Built with love for every fan out there.
        </p>
        <a href="#join" className="inline-block mt-6 px-6 py-3 bg-pink text-white rounded-full text-lg hover:bg-rose-400 transition">
          Join the Club
        </a>
      </section>

      <section id="about" className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-display mb-2">What is Wulu?</h3>
          <p className="text-lg">
            Wulu is more than just a club — it's a shared experience of anime culture, art, discussions, and meaningful connections. Whether you're into slice-of-life or high-action shounen, there's something for you here.
          </p>
        </div>
      </section>

      <section id="community" className="bg-pink text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-display mb-2">Join Our Community</h3>
          <p className="text-lg">
            From live events to community watch parties and exclusive art showcases — we’re here for the vibes and the feels.
          </p>
        </div>
      </section>

      <section id="join" className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-display mb-4">Become a Member</h3>
          <p className="text-lg mb-4">Be a part of something beautiful. Join Wulu today and meet your anime family.</p>
          <a href="#" className="inline-block bg-pink text-white px-6 py-3 rounded-full hover:bg-rose-400 transition">Join Discord</a>
        </div>
      </section>

      <footer className="py-6 text-center border-t border-gray-300">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Wulu – your Anime Club</p>
      </footer>
    </div>
  )
}
