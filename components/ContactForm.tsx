"use client";

// 御問合せ — 四つの client island の一つ。
// 【採用した方式】バックエンドを持たぬため、mailto: による送信。
// （サーバのルートは設けない。design-brief §6 の二案のうち mailto: を選択。）

import { useState } from "react";

const ATELIER_MAIL = "otoiawase@kamakura-no-ha.example";

export function ContactForm({ defaultBlade = "" }: { defaultBlade?: string }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [blade, setBlade] = useState(defaultBlade);
  const [body, setBody] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `御誂えの御相談${blade ? `　―　${blade}` : ""}`;
    const lines = [
      `お名前　${name}`,
      `御連絡先　${contact}`,
      `御希望の一振り　${blade}`,
      "",
      "御用件",
      body,
    ];
    const href = `mailto:${ATELIER_MAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
  };

  const field =
    "w-full bg-transparent border-b-2 border-white focus:border-sumi py-2 px-1 font-body text-sumi outline-none transition-colors placeholder:text-nibi/50";
  const label = "font-gothic text-sm text-keshizumi tracking-ja";

  return (
    <form onSubmit={onSubmit} className="max-w-xl">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={label}>
            お名前
          </label>
          <input
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={field}
            autoComplete="name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact" className={label}>
            御連絡先（御電話・メール）
          </label>
          <input
            id="contact"
            name="contact"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className={field}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="blade" className={label}>
            御希望の一振り
          </label>
          <input
            id="blade"
            name="blade"
            value={blade}
            onChange={(e) => setBlade(e.target.value)}
            className={field}
            placeholder="刀・脇差・短刀など"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="body" className={label}>
            御用件
          </label>
          <textarea
            id="body"
            name="body"
            required
            rows={6}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className={`${field} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-10 font-gothic text-sm tracking-ja border border-sumi px-8 py-3 text-sumi hover:bg-sumi hover:text-kinari transition-colors"
      >
        御相談を送る
      </button>

      <p className="font-gothic text-xs text-nibi mt-6 leading-relaxed">
        送信を押すと、御使いのメールにて下書きが開きます。
        直に <span className="latin">{ATELIER_MAIL}</span> 宛にお認め頂いても構いませぬ。
      </p>
    </form>
  );
}
