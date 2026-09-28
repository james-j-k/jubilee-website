/* Jubilee Indane Home — interactions */
(() => {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  const $ = (id) => document.getElementById(id);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(pointer: fine)").matches;
  const desktop = matchMedia("(min-width: 1024px)");
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const WA = "https://wa.me/919447071889";

  /* ============================================================
     Smooth scrolling (desktop pointer only; touch stays native)
     ============================================================ */
  let lenis = null;
  if (window.Lenis && finePointer && !reduce) {
    lenis = new window.Lenis({ lerp: 0.09, smoothWheel: true });
    document.documentElement.classList.add("lenis");
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }
  function scrollToTarget(target) {
    const navH = $("nav").offsetHeight;
    if (lenis) lenis.scrollTo(target, { offset: -navH + 1, duration: 1.3 });
    else target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href").slice(1);
    const target = id ? document.getElementById(id) : null;
    if (!target) return;
    e.preventDefault();
    scrollToTarget(target);
    history.replaceState(null, "", "#" + id);
  });

  /* ============================================================
     SVG helpers
     ============================================================ */
  function el(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  const rr = (x, y, w, h, r) =>
    `M${x + r},${y}H${x + w - r}A${r},${r} 0 0 1 ${x + w},${y + r}V${y + h - r}A${r},${r} 0 0 1 ${x + w - r},${y + h}H${x + r}A${r},${r} 0 0 1 ${x},${y + h - r}V${y + r}A${r},${r} 0 0 1 ${x + r},${y}Z`;
  let uidN = 0;
  const uid = (p) => `${p}${++uidN}`;

  /* ============================================================
     Silver jubilee seal
     ============================================================ */
  function sealSVG() {
    const id = uid("s");
    // rosette edge
    let edge = "";
    for (let i = 0; i <= 360; i++) {
      const t = (i / 360) * Math.PI * 2, r = 94.5 + 3.4 * Math.cos(36 * t);
      edge += `${i ? "L" : "M"}${(100 + Math.cos(t) * r).toFixed(2)},${(100 + Math.sin(t) * r).toFixed(2)}`;
    }
    const emboss = (txt, attrs) =>
      `<text ${attrs} fill="#fff" opacity=".85" transform="translate(0 .8)">${txt}</text><text ${attrs} fill="url(#gSilverInk)">${txt}</text>`;
    const ringTxt = 'font-family="Archivo" font-weight="800" font-size="10.5" letter-spacing="2.4" text-anchor="middle" style="font-stretch:112%"';
    return `<svg viewBox="0 0 200 200" role="img" aria-label="Silver jubilee seal: Jubilee Indane Home, 25 years, 2001 to 2026">
      <defs>
        <path id="${id}t" d="M35,100 A65,65 0 0 1 165,100"/>
        <path id="${id}b" d="M26,100 A74,74 0 0 0 174,100"/>
      </defs>
      <path d="${edge}Z" fill="url(#gSilver)" stroke="#7E8793" stroke-width=".6"/>
      <circle cx="100" cy="100" r="87" fill="url(#gSilver2)" stroke="#fff" stroke-opacity=".7" stroke-width=".8"/>
      <circle cx="100" cy="100" r="81" fill="url(#gSilver)" stroke="#7E8793" stroke-width=".6"/>
      <circle cx="100" cy="100" r="77.5" fill="none" stroke="#6F7884" stroke-width=".7" stroke-dasharray=".6 2.6"/>
      <g>${emboss(`<textPath href="#${id}t" startOffset="50%">JUBILEE INDANE HOME</textPath>`, ringTxt)}</g>
      <g>${emboss(`<textPath href="#${id}b" startOffset="50%">SILVER JUBILEE</textPath>`, ringTxt)}</g>
      <circle cx="30.5" cy="100" r="2.6" fill="#F05A1A"/><circle cx="169.5" cy="100" r="2.6" fill="#F05A1A"/>
      <circle cx="100" cy="100" r="57.5" fill="url(#gSilver2)" stroke="#7E8793" stroke-width=".6"/>
      <circle cx="100" cy="100" r="54" fill="url(#gSilver)" stroke="#fff" stroke-opacity=".6" stroke-width=".6"/>
      <path d="M100 50c2.6 5.4 8.2 8.8 8.2 15.4a8.2 8.2 0 0 1-16.4 0c0-4.8 3.2-6.6 4.4-10.8 1.1 3.1 2.1 4.2 3.2 4.3.5-2.8.6-5.6.6-8.9z" fill="#F05A1A"/>
      <path d="M100 62.5c1.2 2.4 3.4 3.9 3.4 6.6a3.4 3.4 0 0 1-6.8 0c0-2.1 1.7-3 2.2-4.6.4 1 .8 1.4 1.2 1.5z" fill="#FFD2B8" opacity=".9"/>
      ${emboss("25", 'x="100" y="117" text-anchor="middle" font-family="Archivo" font-weight="900" font-size="50" letter-spacing="-2" style="font-stretch:125%"')}
      <text x="100" y="135" text-anchor="middle" font-family="Chilanka, cursive" font-size="14" fill="#3A414C">വർഷം</text>
      <text x="100" y="148" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="7" letter-spacing="1.6" fill="#5E6773">2001 · 2026</text>
    </svg>`;
  }
  $$("[data-seal]").forEach((s) => (s.innerHTML = sealSVG()));

  // pointer-driven sheen + tilt
  function sealInteract(host, seal, tilt) {
    let hovering = false, visible = true, t0 = performance.now();
    const set = (sx, sy, sa) => {
      seal.style.setProperty("--sx", sx + "%");
      seal.style.setProperty("--sy", sy + "%");
      seal.style.setProperty("--sa", sa + "deg");
    };
    if (finePointer && !reduce) {
      host.addEventListener("pointermove", (e) => {
        hovering = true;
        const r = host.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        set(x * 100, y * 100, Math.atan2(y - 0.5, x - 0.5) * 57.3);
        if (tilt) tilt.style.transform = `rotateX(${(0.5 - y) * 22}deg) rotateY(${(x - 0.5) * 22}deg)`;
      });
      host.addEventListener("pointerleave", () => { hovering = false; if (tilt) tilt.style.transform = ""; });
    }
    if (!reduce) {
      new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(host);
      (function idle(t) {
        if (!hovering && visible) {
          const k = (t - t0) / 1000;
          set(50 + Math.cos(k * 0.7) * 30, 40 + Math.sin(k * 0.9) * 22, k * 25);
        }
        requestAnimationFrame(idle);
      })(t0);
    }
  }
  const heroSealLink = document.querySelector(".hero-seal");
  sealInteract(heroSealLink, heroSealLink.querySelector(".seal"), null);
  const bigSeal = document.querySelector(".seal-lg");
  sealInteract(bigSeal.parentElement, bigSeal, bigSeal);

  /* ============================================================
     Cylinder artwork
     ============================================================ */
  const CYL = {
    "5":    { w: 76,  h: 100, type: "red" },
    "10":   { w: 92,  h: 150, type: "comp" },
    "14.2": { w: 104, h: 188, type: "red" },
    "19":   { w: 116, h: 222, type: "red" },
  };
  function cylSVG(kind, opts = {}) {
    const { w, h, type } = CYL[kind];
    const id = uid("c"), cx = 70, base = 296, footH = 12;
    const y0 = base - footH + 3 - h, x0 = cx - w / 2, rx = type === "comp" ? w * 0.26 : Math.min(w * 0.46, h * 0.34);
    const level = opts.level ?? 0.7;
    let s = `<svg viewBox="0 0 140 300" aria-hidden="true">`;
    if (type === "red") {
      const sw = w * 0.7, sh = 30, sx = cx - sw / 2, sy = y0 - 25;
      s += `<path fill-rule="evenodd" fill="url(#gRed)" d="${rr(sx, sy, sw, sh, 8)} ${rr(cx - sw * 0.3, sy + 6, sw * 0.6, 11, 5)}"/>`;
      s += `<rect x="${cx - 6}" y="${sy + 14}" width="12" height="12" rx="2" fill="url(#gMetal)"/>`;
      s += `<rect x="${cx - w * 0.42}" y="${base - footH}" width="${w * 0.84}" height="${footH}" rx="3" fill="url(#gRedDark)"/>`;
      s += `<rect x="${x0}" y="${y0}" width="${w}" height="${h}" rx="${rx}" fill="url(#gRed)"/>`;
      s += `<rect x="${x0}" y="${y0 + h * 0.5}" width="${w}" height="4" fill="#000" opacity=".16"/>`;
      s += `<rect x="${cx - w * 0.33}" y="${y0 + h * 0.12}" width="${w * 0.07}" height="${h * 0.66}" rx="3" fill="#fff" opacity=".16"/>`;
      if (opts.gauge) {
        const gw = 18, gh = h * 0.5, gx = cx - gw / 2 + w * 0.12, gy = y0 + h * 0.16;
        s += `<clipPath id="${id}w"><rect x="${gx}" y="${gy}" width="${gw}" height="${gh}" rx="9"/></clipPath>`;
        s += `<rect x="${gx}" y="${gy}" width="${gw}" height="${gh}" rx="9" fill="#1B1D23"/>`;
        s += `<g clip-path="url(#${id}w)"><rect class="lvl" x="${gx}" y="${gy}" width="${gw}" height="${gh}" fill="#58B7FF" style="transform:scaleY(${level})"/></g>`;
        s += `<rect x="${gx}" y="${gy}" width="${gw}" height="${gh}" rx="9" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="1.5"/>`;
        s += `<text x="${gx + gw + 4}" y="${gy + 7}" font-family="JetBrains Mono" font-size="7" fill="#fff" opacity=".75">F</text>`;
        s += `<text x="${gx + gw + 4}" y="${gy + gh}" font-family="JetBrains Mono" font-size="7" fill="#fff" opacity=".75">E</text>`;
      }
      if (h > 90) s += `<text x="${cx}" y="${y0 + h * 0.84}" text-anchor="middle" font-family="Archivo" font-weight="900" font-size="${Math.round(w * 0.15)}" fill="#fff" opacity=".92" style="font-stretch:112%">INDANE</text>`;
    } else {
      // 10 kg composite: translucent body, gas visible inside
      const hw = w * 0.74, hx = cx - hw / 2, hy = y0 - 24;
      s += `<path fill-rule="evenodd" fill="url(#gNavy)" d="${rr(hx, hy, hw, 34, 12)} ${rr(cx - hw * 0.3, hy + 6, hw * 0.6, 12, 6)}"/>`;
      s += `<rect x="${cx - w * 0.44}" y="${base - footH}" width="${w * 0.88}" height="${footH}" rx="4" fill="url(#gNavy)"/>`;
      s += `<clipPath id="${id}b"><rect x="${x0 + 3}" y="${y0 + 3}" width="${w - 6}" height="${h - 6}" rx="${rx - 3}"/></clipPath>`;
      s += `<rect x="${x0}" y="${y0}" width="${w}" height="${h}" rx="${rx}" fill="#EEF3F7"/>`;
      s += `<g clip-path="url(#${id}b)"><rect class="lvl" x="${x0}" y="${y0}" width="${w}" height="${h}" fill="url(#gGas)" style="transform:scaleY(${level})"/></g>`;
      s += `<rect x="${x0}" y="${y0}" width="${w}" height="${h}" rx="${rx}" fill="url(#gComp)" stroke="#8FA4B8" stroke-width="1.2"/>`;
      for (let i = 1; i < 6; i++) s += `<line x1="${x0 + 6}" x2="${x0 + w - 6}" y1="${y0 + (h * i) / 6}" y2="${y0 + (h * i) / 6}" stroke="#fff" stroke-opacity=".35" stroke-width="1"/>`;
      s += `<rect x="${x0}" y="${y0 + h * 0.66}" width="${w}" height="${h * 0.12}" fill="url(#gNavy)" opacity=".92"/>`;
      s += `<text x="${cx}" y="${y0 + h * 0.66 + h * 0.085}" text-anchor="middle" font-family="Archivo" font-weight="900" font-size="${Math.round(w * 0.13)}" fill="#fff" style="font-stretch:112%">INDANE</text>`;
      s += `<rect x="${cx - w * 0.33}" y="${y0 + h * 0.1}" width="${w * 0.06}" height="${h * 0.5}" rx="3" fill="#fff" opacity=".45"/>`;
    }
    return s + `</svg>`;
  }

  /* ============================================================
     Cylinder data
     ============================================================ */
  const INFO = {
    "5": {
      short: "Small", name: "Compact 5 kg", ml: "ചെറിയ കുടുംബങ്ങൾക്ക്", spec: "Domestic · 5 kg",
      text: "Small and easy to carry. Good for one or two people, or as a spare alongside a main cylinder.",
      best: "Small households, students, working people", body: "Steel", weeks: 4,
      ask: "Hello Jubilee, I'd like to ask about the 5 kg Indane cylinder.",
      book: "Hello Jubilee, I'd like to book an Indane refill (5 kg). My consumer number is: ",
    },
    "10": {
      short: "Composite", name: "10 kg composite", ml: "ഭാരം കുറവ്, ഗ്യാസ് കാണാം", spec: "Domestic · 10 kg composite",
      text: "Made from composite material instead of steel, so it’s lighter to lift, doesn’t rust, and you can see how much gas is left.",
      best: "Homes that want a lighter cylinder", body: "Composite, see-through", weeks: 4,
      ask: "Hello Jubilee, I'd like to ask about the 10 kg composite Indane cylinder.",
      book: "Hello Jubilee, I'd like to book an Indane refill (10 kg composite). My consumer number is: ",
    },
    "14.2": {
      short: "Home", name: "Standard 14.2 kg", ml: "വീടുകൾക്ക്", spec: "Domestic · 14.2 kg",
      text: "The regular domestic Indane cylinder. New connections, refills and help with your supply, delivered on a route planned for your part of Pala.",
      best: "Most family kitchens", body: "Steel", weeks: 6,
      ask: "Hello Jubilee, I'd like to ask about a new 14.2 kg Indane connection.",
      book: "Hello Jubilee, I'd like to book an Indane refill (14.2 kg). My consumer number is: ",
    },
    "19": {
      short: "Business", name: "Commercial 19 kg", ml: "സ്ഥാപനങ്ങൾക്ക്", spec: "Commercial · 19 kg",
      text: "For kitchens that feed a lot of people. Tell us what you cook and how often, and we’ll work out a supply plan together.",
      best: "Commercial kitchens", body: "Steel", weeks: 2, commercial: true,
      who: ["Hotels", "Restaurants", "Bakeries", "Caterers", "Tea shops", "Hospitals", "Schools", "Hostels"],
      ask: "Hello Jubilee, I'd like to ask about commercial 19 kg LPG for my business.",
      book: "Hello Jubilee, I'd like to book a commercial 19 kg LPG refill for my business: ",
    },
  };
  const KINDS = ["5", "10", "14.2", "19"];
  const waLink = (msg) => `${WA}?text=${encodeURIComponent(msg)}`;

  /* roving keyboard focus for radio / tab groups */
  function roving(buttons, onPick) {
    buttons.forEach((b, i) => {
      b.addEventListener("click", () => onPick(b.dataset.kind, true));
      b.addEventListener("keydown", (e) => {
        const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (!d) return;
        e.preventDefault();
        const n = buttons[(i + d + buttons.length) % buttons.length];
        n.focus(); onPick(n.dataset.kind, true);
      });
    });
  }

  /* ============================================================
     Refill planner
     ============================================================ */
  let kind = "14.2";
  const sizes = $("sizes");
  KINDS.forEach((k) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "size"; b.dataset.kind = k;
    b.setAttribute("role", "radio");
    b.innerHTML = `${cylSVG(k)}<b>${k} kg</b><small>${INFO[k].short}</small>`;
    sizes.appendChild(b);
  });
  const sizeBtns = $$(".size", sizes);

  const last = $("last"), weeks = $("weeks"), chips = $("chips");
  const iso = (d) => new Date(d.getTime() - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
  const today0 = new Date(); today0.setHours(0, 0, 0, 0);
  const def = new Date(today0); def.setDate(def.getDate() - 24);
  last.value = iso(def); last.max = iso(today0);
  const fmt = (d) => d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
  const RATE = { 2: 0.17, 4: 0.32, 6: 0.45, 8: 0.6 }; // rough kg/day by household size

  let shownPct = 0, pctRaf = 0, bookByDate = today0;
  function animatePct(to) {
    cancelAnimationFrame(pctRaf);
    const from = shownPct, t0 = performance.now(), dur = reduce ? 0 : 700;
    const step = (t) => {
      const k = dur ? clamp((t - t0) / dur, 0, 1) : 1;
      shownPct = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3)));
      $("pct").textContent = shownPct;
      if (k < 1) pctRaf = requestAnimationFrame(step);
    };
    pctRaf = requestAnimationFrame(step);
  }

  function setKind(k, user) {
    kind = k;
    sizeBtns.forEach((b) => {
      const on = b.dataset.kind === k;
      b.setAttribute("aria-checked", String(on));
      b.tabIndex = on ? 0 : -1;
    });
    $("gaugeArt").innerHTML = cylSVG(k, { gauge: true, level: 1 });
    $("specKg").textContent = INFO[k].spec;
    chips.classList.toggle("hidden", !!INFO[k].commercial);
    if (user) { weeks.value = INFO[k].weeks; $$("button", chips).forEach((c) => c.classList.remove("on")); }
    requestAnimationFrame(update);
  }
  roving(sizeBtns, setKind);

  function update() {
    const w = +weeks.value;
    $("weeksOut").textContent = w === 1 ? "1 week" : `${w} weeks`;
    weeks.style.setProperty("--fill", ((w - 1) / 11) * 100 + "%");
    const start = last.value ? new Date(last.value + "T00:00:00") : def;
    const days = w * 7;
    const used = Math.max(0, (today0 - start) / 864e5);
    const left = clamp(1 - used / days, 0, 1);
    const runOut = new Date(start.getTime() + days * 864e5);
    const bookBy = new Date(runOut.getTime() - Math.min(4, Math.round(days * 0.15)) * 864e5);
    bookByDate = bookBy < today0 ? today0 : bookBy;
    animatePct(Math.round(left * 100));
    $$("#gaugeArt .lvl").forEach((lv) => {
      lv.style.transform = `scaleY(${left})`;
      if (CYL[kind].type === "red") lv.setAttribute("fill", left < 0.2 ? "#FF6B5E" : left < 0.4 ? "#FFC24B" : "#58B7FF");
    });
    const dot = $("statusDot");
    dot.className = "status-dot" + (left < 0.2 || bookBy <= today0 ? " bad" : left < 0.4 ? " warn" : "");
    if (left <= 0) {
      $("resBig").textContent = "Book today";
      $("resSmall").textContent = "By your estimate this cylinder may already be empty.";
    } else if (bookBy <= today0) {
      $("resBig").textContent = "Book now";
      $("resSmall").textContent = `About ${Math.round(left * 100)}% left. Runs out around ${fmt(runOut)}.`;
    } else {
      $("resBig").textContent = "Book by " + fmt(bookBy);
      $("resSmall").textContent = `About ${Math.round(left * 100)}% left. Runs out around ${fmt(runOut)}.`;
    }
    const todayFrac = clamp(used / days, 0, 1), bookFrac = clamp((bookBy - start) / (runOut - start), 0, 1);
    $("mkToday").style.left = clamp(todayFrac * 100, 2, 98) + "%";
    $("mkBook").style.left = clamp(bookFrac * 100, 2, 98) + "%";
    const fill = $("tlFill");
    fill.style.width = todayFrac * 100 + "%";
    fill.style.setProperty("--bgw", todayFrac > 0 ? (100 / todayFrac) + "%" : "100%");
    $("tlStart").textContent = fmt(start);
    $("tlEnd").textContent = fmt(runOut);
    $("bookBtn").href = waLink(INFO[kind].book);
  }
  last.addEventListener("input", update);
  weeks.addEventListener("input", () => { $$("button", chips).forEach((c) => c.classList.remove("on")); update(); });
  $$("button", chips).forEach((c) => c.addEventListener("click", () => {
    const kg = parseFloat(kind);
    weeks.value = clamp(Math.round(kg / RATE[c.dataset.people] / 7), 1, 12);
    $$("button", chips).forEach((x) => x.classList.toggle("on", x === c));
    update();
  }));

  // calendar reminder (.ics)
  const toast = document.createElement("div");
  toast.className = "toast"; toast.setAttribute("role", "status");
  document.body.appendChild(toast);
  let toastT;
  function showToast(msg) {
    toast.textContent = msg; toast.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(() => toast.classList.remove("show"), 3200);
  }
  $("remindBtn").addEventListener("click", () => {
    const d = bookByDate, n = new Date(d.getTime() + 864e5);
    const ymd = (x) => `${x.getFullYear()}${String(x.getMonth() + 1).padStart(2, "0")}${String(x.getDate()).padStart(2, "0")}`;
    const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d+/, "");
    const ics = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Jubilee Indane Home//Refill planner//EN", "BEGIN:VEVENT",
      `UID:${stamp}-${kind}@jubileeindanehome`, `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${ymd(d)}`, `DTEND;VALUE=DATE:${ymd(n)}`,
      `SUMMARY:Book Indane refill (${kind} kg)`,
      `DESCRIPTION:Call Jubilee Indane Home on +91 94470 71889 or message on WhatsApp: ${WA}`,
      "BEGIN:VALARM", "TRIGGER:PT9H", "ACTION:DISPLAY", "DESCRIPTION:Book your Indane refill", "END:VALARM",
      "END:VEVENT", "END:VCALENDAR",
    ].join("\r\n");
    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    const a = document.createElement("a");
    a.href = url; a.download = "jubilee-refill-reminder.ics";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    showToast(`Reminder for ${fmt(d)} saved. Open it to add to your calendar.`);
  });

  /* ============================================================
     Cylinder range (shelf + detail)
     ============================================================ */
  const shelf = $("shelf"), detail = $("cylDetail");
  KINDS.forEach((k) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "cyl-tab"; b.dataset.kind = k;
    b.setAttribute("role", "tab"); b.setAttribute("aria-controls", "cylDetail"); b.id = "tab-" + k.replace(".", "-");
    b.innerHTML = `${cylSVG(k, { level: 0.72 })}<span class="lbl"><b>${k} kg</b><small>${INFO[k].short}</small></span>`;
    shelf.appendChild(b);
  });
  const tabs = $$(".cyl-tab", shelf);
  function showCyl(k) {
    tabs.forEach((t) => {
      const on = t.dataset.kind === k;
      t.setAttribute("aria-selected", String(on)); t.tabIndex = on ? 0 : -1;
    });
    detail.setAttribute("aria-labelledby", "tab-" + k.replace(".", "-"));
    const I = INFO[k];
    detail.innerHTML = `
      <p class="ml d-ml" lang="ml">${I.ml}</p>
      <div class="d-kg">${k}<small>kg</small></div>
      <div><h3>${I.name}</h3><p>${I.text}</p>${I.who ? `<ul class="who">${I.who.map((x) => `<li>${x}</li>`).join("")}</ul>` : ""}</div>
      <dl class="d-facts"><dt>Best for</dt><dd>${I.best}</dd><dt>Body</dt><dd>${I.body}</dd><dt>Use</dt><dd>${I.commercial ? "Commercial" : "Domestic"}</dd></dl>
      <div class="d-act">
        <a class="btn btn-ink" href="${waLink(I.ask)}" target="_blank" rel="noopener">${I.commercial ? "Start a business enquiry" : "Ask on WhatsApp"}</a>
        <a class="btn btn-ghost" href="#refill" data-plan="${k}">Plan a refill</a>
      </div>`;
  }
  roving(tabs, showCyl);
  detail.addEventListener("click", (e) => {
    const p = e.target.closest("[data-plan]");
    if (p) setKind(p.dataset.plan, true);
  });
  showCyl("14.2");
  setKind("14.2", true);

  /* ============================================================
     Topographic map + route story
     ============================================================ */
  function rng(seed) { return () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }; }
  function smoothClosed(pts) {
    const n = pts.length; let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
    for (let i = 0; i < n; i++) {
      const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
      d += `C${(p1[0] + (p2[0] - p0[0]) / 6).toFixed(1)},${(p1[1] + (p2[1] - p0[1]) / 6).toFixed(1)} ${(p2[0] - (p3[0] - p1[0]) / 6).toFixed(1)},${(p2[1] - (p3[1] - p1[1]) / 6).toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
    }
    return d + "Z";
  }
  function smoothOpen(pts) {
    let d = `M${pts[0][0]},${pts[0][1]}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[Math.max(i - 1, 0)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(i + 2, pts.length - 1)];
      d += `C${p1[0] + (p2[0] - p0[0]) / 6},${p1[1] + (p2[1] - p0[1]) / 6} ${p2[0] - (p3[0] - p1[0]) / 6},${p2[1] - (p3[1] - p1[1]) / 6} ${p2[0]},${p2[1]}`;
    }
    return d;
  }
  const HILLS = [
    { x: 1300, y: 260, r: 380, l: 14 }, { x: 1480, y: 760, r: 300, l: 10 }, { x: 980, y: 120, r: 240, l: 8 },
    { x: 760, y: 880, r: 200, l: 6 }, { x: 180, y: 150, r: 200, l: 6 }, { x: 1150, y: 620, r: 170, l: 6 },
  ];
  const RIVER = [[-40, 560], [180, 600], [360, 540], [520, 590], [640, 660], [820, 620], [980, 700], [1120, 760], [1300, 900], [1400, 1060]];
  const ROADS = [
    [[0, 420], [300, 440], [620, 520], [900, 470], [1600, 380]],
    [[620, 520], [600, 760], [560, 1000]],
    [[620, 520], [760, 300], [820, 0]],
  ];
  function drawTopo(g, seed, labels) {
    const r = rng(seed);
    HILLS.forEach((h, hi) => {
      const ph = [r() * 6.28, r() * 6.28, r() * 6.28], am = [0.12 + r() * 0.08, 0.06 + r() * 0.05, 0.03];
      const layer = el("g", { class: "layer" }, g); layer.dataset.depth = (hi % 3) + 1;
      for (let l = 1; l <= h.l; l++) {
        const rad = h.r * (l / h.l), pts = [];
        for (let a = 0; a < 48; a++) {
          const t = (a / 48) * Math.PI * 2;
          const k = 1 + am[0] * Math.sin(2 * t + ph[0] + l * 0.08) + am[1] * Math.sin(3 * t + ph[1] - l * 0.05) + am[2] * Math.sin(5 * t + ph[2]);
          pts.push([h.x + Math.cos(t) * rad * k * 1.15, h.y + Math.sin(t) * rad * k * 0.85]);
        }
        el("path", { d: smoothClosed(pts), fill: "none", stroke: l % 5 === 0 ? "#8FA2AF" : "#AFBEC8", "stroke-width": l % 5 === 0 ? 1.4 : 0.8 }, layer);
      }
    });
    el("path", { d: smoothOpen(RIVER), fill: "none", stroke: "#6E9CC0", "stroke-width": 9, "stroke-linecap": "round", opacity: 0.55 }, g);
    ROADS.forEach((rd) => el("path", { d: smoothOpen(rd), fill: "none", stroke: "#fff", "stroke-width": 5, opacity: 0.9 }, g));
    if (labels) {
      [["Meenachil river", 200, 640, -4], ["Pala town", 650, 500, 0], ["Hill routes", 1250, 250, 0]].forEach(([t, x, y, rot], i) => {
        el("text", { x, y, class: "map-label" + (i === 1 ? " big" : ""), transform: `rotate(${rot} ${x} ${y})` }, g).textContent = t;
      });
    }
  }

  // hero map
  const hero = $("heroMap");
  const hg = el("g", {}, hero);
  drawTopo(hg, 7, true);
  const heroRoute = el("path", {
    d: smoothOpen([[330, 720], [470, 640], [640, 540], [820, 560], [930, 470], [1080, 420], [1180, 330], [1300, 270]]),
    fill: "none", stroke: "#F05A1A", "stroke-width": 5, "stroke-linecap": "round",
  }, hg);
  [[640, 540, true], [1300, 270, false]].forEach(([cx, cy, pulse]) => {
    if (pulse) el("circle", { cx, cy, r: 6, fill: "#F05A1A", class: "pin-pulse" }, hg);
    el("circle", { cx, cy, r: 9, fill: "#F05A1A", stroke: "#fff", "stroke-width": 3 }, hg);
  });
  function frameHero() {
    if (desktop.matches) {
      hero.setAttribute("viewBox", "0 0 1600 1000");
      hero.setAttribute("preserveAspectRatio", "xMidYMid slice");
      hg.setAttribute("transform", "translate(330,40)");
    } else {
      hero.setAttribute("viewBox", "280 150 1100 640");
      hero.setAttribute("preserveAspectRatio", "xMidYMin meet");
      hg.removeAttribute("transform");
    }
  }
  frameHero();
  desktop.addEventListener("change", frameHero);
  const HL = heroRoute.getTotalLength();
  heroRoute.style.strokeDasharray = HL;
  heroRoute.style.strokeDashoffset = reduce ? 0 : HL;
  if (!reduce) {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      heroRoute.style.transition = "stroke-dashoffset 2.6s cubic-bezier(.6,0,.2,1) .2s";
      heroRoute.style.strokeDashoffset = 0;
    }));
  }
  if (!reduce && finePointer) {
    const layers = $$(".layer", hero);
    let px = 0, py = 0, tx = 0, ty = 0, ticking = false;
    const loop = () => {
      px += (tx - px) * 0.08; py += (ty - py) * 0.08;
      layers.forEach((l) => { const d = +l.dataset.depth * 12; l.style.transform = `translate(${(-px * d).toFixed(2)}px,${(-py * d).toFixed(2)}px)`; });
      if (Math.abs(tx - px) > 0.001 || Math.abs(ty - py) > 0.001) requestAnimationFrame(loop); else ticking = false;
    };
    addEventListener("pointermove", (e) => {
      if (scrollY > innerHeight) return;
      tx = e.clientX / innerWidth - 0.5; ty = e.clientY / innerHeight - 0.5;
      if (!ticking) { ticking = true; requestAnimationFrame(loop); }
    }, { passive: true });
    $$(".layer", hero).forEach((l) => (l.style.transition = "none"));
  }

  // route story
  drawTopo($("routeTopo"), 7, false);
  const STOPS = [[330, 720, "Godown"], [640, 520, "Town centre"], [930, 640, "Neighbourhoods"], [1300, 270, "Hill roads"]];
  const routePts = [[330, 720], [430, 690], [520, 600], [640, 520], [740, 600], [840, 690], [930, 640], [1030, 560], [1100, 470], [1180, 360], [1240, 300], [1300, 270]];
  const rp = $("routePath"), ghost = $("routeGhost");
  const rd = smoothOpen(routePts);
  rp.setAttribute("d", rd); ghost.setAttribute("d", rd);
  const RL = rp.getTotalLength();
  rp.style.strokeDasharray = RL; rp.style.strokeDashoffset = RL;
  const stopLen = STOPS.map(([x, y]) => {
    let best = 0, bd = Infinity;
    for (let s = 0; s <= RL; s += 4) { const p = rp.getPointAtLength(s), dd = (p.x - x) ** 2 + (p.y - y) ** 2; if (dd < bd) { bd = dd; best = s; } }
    return best;
  });
  const dots = STOPS.map(([x, y, name], i) => {
    const c = el("circle", { cx: x, cy: y, r: 12, class: "stopdot" }, $("routeStops"));
    el("text", { x: i === 3 ? x - 20 : x + 20, y: y - 18, class: "map-label big", "text-anchor": i === 3 ? "end" : "start" }, $("routeStops")).textContent = `${i + 1} · ${name}`;
    return c;
  });
  const van = $("van"), route = $("route"), stick = route.querySelector(".route-stick");
  const stops = $$(".stop"), bars = $$(".progress b"), nav = $("nav");
  let lastActive = -1;

  function onScroll() {
    nav.classList.toggle("scrolled", scrollY > 10);
    const r = route.getBoundingClientRect();
    if (r.bottom < -50 || r.top > innerHeight + 50) return;
    const total = route.offsetHeight - stick.offsetHeight;
    const p = clamp(-r.top / total, 0, 1);
    const len = p * RL;
    rp.style.strokeDashoffset = RL - len;
    const pt = rp.getPointAtLength(len);
    van.setAttribute("transform", `translate(${pt.x.toFixed(1)},${pt.y.toFixed(1)})`);
    dots.forEach((c, i) => c.classList.toggle("hit", len >= stopLen[i] - 2));
    let active = 0;
    stops.forEach((s, i) => { if (p >= +s.dataset.at) active = i; });
    if (active !== lastActive) { stops.forEach((s, i) => s.classList.toggle("on", i === active)); lastActive = active; }
    bars.forEach((b, i) => {
      const start = [0, 0.26, 0.52, 0.78][i], span = i === 3 ? 0.22 : 0.26;
      b.style.transform = `scaleX(${clamp((p - start) / span, 0, 1)})`;
    });
  }
  let scrollQueued = false;
  const queue = () => { if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(() => { scrollQueued = false; onScroll(); }); } };
  addEventListener("scroll", queue, { passive: true });
  addEventListener("resize", queue);
  onScroll();

  /* ============================================================
     Nav active link
     ============================================================ */
  const links = $$(".nav-links a");
  const linkFor = Object.fromEntries(links.map((a) => [a.getAttribute("href").slice(1), a]));
  const navIO = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { links.forEach((a) => a.classList.remove("active")); linkFor[e.target.id]?.classList.add("active"); }
  }), { rootMargin: "-45% 0px -50% 0px" });
  Object.keys(linkFor).forEach((id) => { const s = $(id); if (s) navIO.observe(s); });
  new IntersectionObserver(([e]) => { if (e.isIntersecting) links.forEach((a) => a.classList.remove("active")); }, { threshold: 0.5 }).observe($("top"));

  /* ============================================================
     Safety checklist
     ============================================================ */
  const boxes = $$("#check input");
  boxes.forEach((b) => b.addEventListener("change", () => {
    const n = boxes.filter((x) => x.checked).length;
    const done = $("done");
    done.textContent = n === 4 ? "All 4 done. Now call 1906 or Jubilee from outside." : `${n} of 4 done`;
    done.classList.toggle("all", n === 4);
    $("checkBar").style.width = (n / 4) * 100 + "%";
  }));

  /* ============================================================
     Office open / closed (IST)
     ============================================================ */
  (function openStatus() {
    try {
      const parts = Object.fromEntries(new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false })
        .formatToParts(new Date()).map((p) => [p.type, p.value]));
      const day = parts.weekday, mins = +parts.hour * 60 + +parts.minute;
      const workday = day !== "Sun";
      const pill = $("openPill"), txt = $("openText");
      if (workday && mins >= 540 && mins < 1020) { pill.classList.add("open"); txt.textContent = "Open now · until 5 PM"; }
      else {
        pill.classList.add("closed");
        if (workday && mins < 540) txt.textContent = "Closed · opens today at 9 AM";
        else if (day === "Sat" || day === "Sun") txt.textContent = "Closed · opens Monday at 9 AM";
        else txt.textContent = "Closed · opens tomorrow at 9 AM";
      }
    } catch (_) { /* keep default label */ }
  })();

  /* ============================================================
     Reveals + count-up
     ============================================================ */
  function countUp(node) {
    const end = +node.dataset.count, plain = node.hasAttribute("data-plain");
    if (reduce) return;
    const t0 = performance.now(), dur = 1500, startV = plain ? end - 25 : 0;
    const step = (t) => {
      const k = clamp((t - t0) / dur, 0, 1), v = Math.round(startV + (end - startV) * (1 - Math.pow(1 - k, 4)));
      node.textContent = plain ? v : v.toLocaleString("en-IN");
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window && !reduce) {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      const sibs = [...e.target.parentElement.children].filter((c) => c.classList.contains("reveal"));
      e.target.style.transitionDelay = Math.min(sibs.indexOf(e.target), 4) * 70 + "ms";
      e.target.classList.add("in");
      $$("[data-count]", e.target).forEach(countUp);
      io.unobserve(e.target);
    }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    $$(".reveal").forEach((n) => io.observe(n));
  } else {
    $$(".reveal").forEach((n) => n.classList.add("in"));
  }

  /* ============================================================
     Mobile action bar: step aside at the footer
     ============================================================ */
  const bar = $("actionBar");
  new IntersectionObserver(([e]) => bar.classList.toggle("away", e.isIntersecting), { threshold: 0.2 })
    .observe(document.querySelector(".footer"));
})();
