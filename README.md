# 🎓 Certification Study Hub

A self-paced web app for studying CompTIA certifications. Watch the full Professor Messer course
one video at a time, get quizzed after every video, test yourself on each domain, drill key terms
with flashcards, and finish with a full timed practice exam.

Pick a certification from the landing page:

- 🛡️ **Security+ (SY0-701)** — 120 videos
- 🌐 **Network+ (N10-009)** — 86 videos

Built as a plain static website — **no build step, no dependencies, no accounts.** All progress is
saved locally in your browser (separately per certification).

*By Amani Kalua*

---

## ✨ Features (every certification)

- **📺 Embedded course videos** — the entire Professor Messer course, organized by exam objective,
  watchable in order right on the page.
- **✅ A short quiz after every video** — with instant feedback and explanations. Score 70%+ to
  mark a video complete.
- **📝 Section exams** — a cumulative test for each domain, which unlocks once you've passed every
  video quiz in that section.
- **🃏 Flashcards (Quizlet-style)** — key-term decks per domain. Flip, shuffle, and track "Got it"
  vs "Still learning," then re-study just the terms you haven't mastered.
- **🎓 Full practice exam** — a CompTIA-style, **timed** exam drawn from a **dedicated question
  bank** (separate from the quizzes), sampled using the real domain weighting, with a question
  navigator, flag-for-review, and a domain-by-domain score breakdown. Full (90 Q) or quick (30 Q).
- **🔀 Randomized** — question order and answer options are shuffled on every attempt.
- **🌙 Light & dark mode** — toggle in the sidebar (and on the landing page); your choice is
  remembered.
- **📈 Progress tracking** — checkmarks, per-section bars, and an overall meter, persisted via
  `localStorage`.

### Content at a glance

| Certification | Videos | Video quiz Qs | Section exams | Practice-exam bank | Flashcards |
|---------------|:------:|:-------------:|:-------------:|:------------------:|:----------:|
| Security+ SY0-701 | 120 | 360 | 5 | 141 | 154 |
| Network+ N10-009  | 86  | 258 | 5 | 133 | 151 |

---

## 🚀 Running it

It's a static site, so you have two options:

**Option 1 — just open it**
Double-click `index.html` (the landing page) to open it in your browser, then pick a certification.

**Option 2 — run a tiny local server** (recommended; most reliable for the video embeds)

```bash
# from the project folder
python3 -m http.server 8000
```

Then visit **http://localhost:8000** in your browser.

> An internet connection is required — the videos stream from YouTube.

### Hosting on GitHub Pages
1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Set **Source: Deploy from a branch**, pick your branch (e.g. `main`) and the `/root` folder,
   then **Save**.
4. Your hub will be live at `https://<your-username>.github.io/<repo-name>/`.

---

## 📂 Project structure

```
.
├── index.html          # Landing page — "Certification Study Hub"
├── style.css           # Shared styling (dark + light themes)
├── app.js              # Shared app engine (reads window.CERT_META per page)
├── README.md
├── security-plus/
│   ├── index.html      # Sets CERT_META for Security+, loads shared engine
│   ├── data.js         # 120 videos grouped by objective 1.1–5.6
│   ├── quizzes.js      # 360 per-video questions + 5 section exams
│   ├── exambank.js     # 141 dedicated practice-exam questions
│   └── flashcards.js   # 154 flashcards
└── network-plus/
    ├── index.html      # Sets CERT_META for Network+, loads shared engine
    ├── data.js         # 86 videos grouped by objective 1.1–5.5
    ├── quizzes.js      # 258 per-video questions + 5 section exams
    ├── exambank.js     # 133 dedicated practice-exam questions
    └── flashcards.js   # 151 flashcards
```

The engine is **cert-agnostic**: each certification page sets a `window.CERT_META` object (name,
exam code, domain weights, passing score, storage key) and loads its own data files plus the shared
`app.js` and `style.css`. Adding another certification is just a new folder + its data files.

No frameworks — everything is vanilla HTML, CSS, and JavaScript.

---

## 🧭 How to use it

1. Open the hub and choose a certification.
2. Hit **Start course** (or **Resume**).
3. Watch a video, then take its quiz. Passing marks it complete.
4. Use **Flashcards** anytime to drill the key terms for a section.
5. Once you've cleared all of a section's video quizzes, take that **Section Exam**.
6. When you feel ready, take the **Full Practice Exam** and review your weak domains.

Progress lives in your browser, tracked separately for each certification. Use **Reset all
progress** in the sidebar to start over (this keeps your light/dark preference).

---

## 📝 Notes & attribution

- This is an **unofficial, personal study tool**. It is not affiliated with, endorsed by, or
  sponsored by **CompTIA** or **Professor Messer**.
- All course **videos are the property of Professor Messer** and are embedded from his official
  YouTube channel. Please support his work at
  [professormesser.com](https://www.professormesser.com/).
- The quizzes, flashcards, and practice-exam questions were written as original study aids to
  accompany the videos.
- "CompTIA", "Security+", and "Network+" are trademarks of CompTIA.

---

## 📄 License

The **code** in this project is released under the MIT License — feel free to fork and adapt it.
This license does **not** cover the embedded video content, which remains the property of its
creator.
