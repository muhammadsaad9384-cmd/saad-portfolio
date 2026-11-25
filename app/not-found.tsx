import { MagneticBtn } from "@/components/magnetic-btn";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <div className="mt-6">
        <MagneticBtn href="/">Back home</MagneticBtn>
      </div>
    </div>
  );
}
