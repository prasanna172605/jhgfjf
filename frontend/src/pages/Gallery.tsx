

export default function Gallery() {
  return (
    <div className="pt-32 px-6 min-h-screen bg-coffee-dark text-white flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-cappuccino font-bold mb-3 block">Visuals</span>
          <h1 className="text-4xl md:text-5xl font-serif text-white">Gallery</h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Placeholder Gallery Images */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square bg-coffee-medium border border-white/10 rounded-2xl flex items-center justify-center text-white/30 text-sm">
              Image {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
