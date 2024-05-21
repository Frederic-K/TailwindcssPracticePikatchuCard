function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-zinc-200">
      <div className="w-full max-w-sm overflow-hidden rounded-lg border border-zinc-400 bg-zinc-100 shadow-2xl">
        <header className="bg-[url('https://cdn.pixabay.com/photo/2023/10/31/16/38/ai-generated-8355516_640.png')] bg-cover bg-center">
          <div className="bg-black/30 p-7 text-zinc-50 backdrop-blur-sm">
            <h1 className="text-2xl font-bold">Pikatchu</h1>
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center rounded-md bg-green-500/20 p-1 font-medium text-green-400">
                44⚡️
              </span>
              <span className="p1 flex items-center justify-center rounded-md bg-red-500/20 p-1 font-medium text-red-400">
                100❤️
              </span>
            </div>
          </div>
        </header>
        <main>
          <section className="p-7">
            <p className="text-sm/6">
              Pikachu is an Electric-type Pokémon known for its yellow fur and
              lightning bolt-shaped tail. It has red circular pouches on its
              cheeks that store electricity. Pikachu's ears are long and come to
              a point, enhancing its cute appearance.
            </p>
          </section>
        </main>
        <footer className="flex justify-end border-t bg-zinc-50 px-8 py-4">
          <button className="inline-flex items-center justify-center rounded-md border border-red-800 bg-red-600 p-2 font-semibold text-zinc-50 outline-offset-2 outline-red-300 delay-150 duration-150 hover:scale-110 hover:bg-red-300 hover:text-zinc-900 hover:shadow-md hover:transition-all focus:outline">
            Delete
          </button>
        </footer>
      </div>
    </div>
  )
}

export default App
