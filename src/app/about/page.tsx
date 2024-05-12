export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 my-auto">
      <div className="flex flex-col items-center justify-center gap-4 py-8">
        <img
          alt="Avatar"
          className="h-32 w-32 rounded-full"
          height="128"
          src="/books-review-app//images/me.jpg"
          style={{
            aspectRatio: "128/128",
            objectFit: "cover",
          }}
          width="128"
        />
        <div className="space-y-1 text-center">
          <h3 className="text-2xl font-bold">Fabrício P. Rocha</h3>
          <p className="px-2 text-gray-500 dark:text-gray-400">
            Desenvolvedor de software mid-level, leitor ávido e entusiasta de
            tecnologia.
          </p>
        </div>
      </div>
      <div className="container py-2 max-w-3xl px-4 md:px-6">
        <header className="mb-8 space-y-2">
          <h1 className="text-md font-bold tracking-tighter ">
            Por que não compartilhar oque aprendi com os livros que li?
          </h1>
        </header>
        <div className="prose prose-gray max-w-none dark:prose-invert">
          <p className="mb-2">
            Esse é um projeto simples que desenvolvi para partilhar algumas
            lições que aprendi durante os livros que li.
          </p>

          <p className="mb-2">
            A ideia é compartilhar um pouco do que aprendi, e quem sabe ajudar
            alguém a decidir se vale a pena ler o livro ou não.
          </p>

          <p className="mb-2">
            Não são sinopses, minha memória é limitada (infelizmente) apenas os
            insights que tive e coloquei em prática.
          </p>

          <p className="mb-2">
            Tento manter o conteúdo o mais simples possível, sem muitos
            detalhes.
          </p>

          <p className="mb-2">
            Não tem nada de especial, mas espero que goste. 📚
          </p>
        </div>
      </div>
    </main>
  );
}
