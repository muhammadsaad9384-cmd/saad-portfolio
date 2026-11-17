import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-serif text-4xl">Page not found</h1>
      <p className="mt-4 text-muted">That URL is not part of this portfolio.</p>
      <Link href="/" className="mt-6 inline-block underline">
        Back home
      </Link>
    </div>
  );
}
