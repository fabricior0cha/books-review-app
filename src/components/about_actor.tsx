import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function AboutActor() {
  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-2xl font-bold">Sobre mim</h2>
      <div className="flex items-center gap-4">
        <Avatar className="h-24 w-24">
          <AvatarImage
            className="object-cover"
            alt="F. Scott Fitzgerald"
            src="/images/me.jpg"
          />
          <AvatarFallback>FPR</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">Fabrício P. Rocha</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Desenvolvedor de software mid-level, leitor ávido e entusiasta de
            tecnologia.
          </p>
        </div>
      </div>
      <p>
        Vivo de programação e café, gosto de ler e escrever sobre aquilo que
        aprendi, compartilhar conhecimento é uma benção. Desenvolvo aplicações
        web a pouco mais de três anos e curso Sistemas de Informações,
        atualmente resido em São Paulo.
      </p>
    </div>
  );
}
