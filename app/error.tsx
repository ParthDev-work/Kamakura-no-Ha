"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className="mx-auto max-w-3xl px-6 md:px-10 py-32 text-center">
      <h1 className="font-display text-3xl md:text-4xl tracking-ja text-sumi">
        火加減を、しくじりました。
      </h1>
      <p className="font-body text-base leading-loose tracking-ja text-keshizumi mt-8">
        鍛冶場にて障りが生じております。今しばし措きて、改めて御試し下さいませ。
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-10 font-gothic text-sm tracking-ja border border-sumi px-8 py-3 text-sumi hover:bg-sumi hover:text-kinari transition-colors"
      >
        鍛え直す
      </button>
    </section>
  );
}
