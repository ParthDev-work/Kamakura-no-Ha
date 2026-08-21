#!/usr/bin/env python3
"""Regenerate the self-hosted subset fonts in app/_fonts/.

Japanese web fonts from next/font/google fragment into ~140 unicode-range files
(~2.7 MB) and tank mobile performance. Instead we self-host one woff2 per family,
subset to only the glyphs this site actually renders (~1,300).

Requires: pip install fonttools brotli
Run from the project root:  python scripts/subset-fonts.py
"""
import os, re, glob, sys, tempfile, subprocess, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "app", "_fonts")
SRC = os.path.join(tempfile.gettempdir(), "kamakura-fontsrc")
os.makedirs(OUT, exist_ok=True)
os.makedirs(SRC, exist_ok=True)

GF = "https://raw.githubusercontent.com/google/fonts/main/ofl"
SOURCES = {
    "ZenOldMincho-Regular.ttf":    f"{GF}/zenoldmincho/ZenOldMincho-Regular.ttf",
    "ZenKakuGothicNew-Regular.ttf": f"{GF}/zenkakugothicnew/ZenKakuGothicNew-Regular.ttf",
    "NotoSerifJP-var.ttf":         f"{GF}/notoserifjp/NotoSerifJP%5Bwght%5D.ttf",
}

def fetch(name, url):
    dest = os.path.join(SRC, name)
    if not os.path.exists(dest):
        print(f"downloading {name} ...")
        urllib.request.urlretrieve(url, dest)
    return dest

# --- collect every character the site renders (all source literals) ---
chars = set()
for pat in ("app/**/*.ts", "app/**/*.tsx", "components/**/*.tsx",
            "components/**/*.ts", "data/**/*.ts", "lib/**/*.ts"):
    for f in glob.glob(os.path.join(ROOT, pat), recursive=True):
        with open(f, encoding="utf-8") as fh:
            chars.update(fh.read())

# base ranges for safety: latin, kana, punctuation, fullwidth, symbols
def add(a, b):
    chars.update(chr(cp) for cp in range(a, b + 1))
add(0x0020, 0x007E); add(0x00A0, 0x00FF); add(0x2010, 0x2027); add(0x2190, 0x2199)
add(0x3000, 0x303F); add(0x3040, 0x309F); add(0x30A0, 0x30FF)
add(0xFF00, 0xFF5E); add(0xFFE0, 0xFFE6)
chars = {c for c in chars if ord(c) >= 0x20}

txt = os.path.join(SRC, "chars.txt")
with open(txt, "w", encoding="utf-8") as fh:
    fh.write("".join(sorted(chars)))
print(f"keeping {len(chars)} glyphs")

def subset(infile, outname):
    out = os.path.join(OUT, outname)
    subprocess.run([sys.executable, "-m", "fontTools.subset", infile,
        f"--text-file={txt}", f"--output-file={out}", "--flavor=woff2",
        "--layout-features=*", "--no-hinting", "--desubroutinize"], check=True)
    print(f"  {outname}: {os.path.getsize(out)//1024} KB")

# Zen Old Mincho (display) + Zen Kaku Gothic New (gothic) — static 400
subset(fetch("ZenOldMincho-Regular.ttf", SOURCES["ZenOldMincho-Regular.ttf"]),
       "ZenOldMincho-Regular.subset.woff2")
subset(fetch("ZenKakuGothicNew-Regular.ttf", SOURCES["ZenKakuGothicNew-Regular.ttf"]),
       "ZenKakuGothicNew-Regular.subset.woff2")

# Noto Serif JP (body) is variable — pin to weight 400 (no bold used) then subset
noto = fetch("NotoSerifJP-var.ttf", SOURCES["NotoSerifJP-var.ttf"])
noto400 = os.path.join(SRC, "NotoSerifJP-400.ttf")
subprocess.run([sys.executable, "-m", "fontTools.varLib.instancer", noto,
                "wght=400", "-o", noto400], check=True)
subset(noto400, "NotoSerifJP-Regular.subset.woff2")
print("done ->", OUT)
