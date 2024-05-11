import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" border-t bg-gray-100/40 py-4 w-full justify-center flex dark:bg-gray-800">
      <p className="font-light">
        <Link target="_blank" href="https://github.com/fabricior0cha">
          @fabricior0cha
        </Link>
      </p>
    </footer>
  );
}
