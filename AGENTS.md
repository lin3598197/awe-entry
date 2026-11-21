# Task: enter make.fun's bounty "Make the AI judge feel awe"

You are building an entry for a make.fun judged-text bounty. Work entirely inside this
repository directory (`C:/Users/lin35/makefun/awe-entry`). Do not read, copy or import any
other repository, entry, draft or file outside this directory — everything you ship must be
written here by you, in this session.

## What the entry is

A program, `main.ts` (Node 22) at the repository root, that writes exactly one text to
`/output/entry.txt`: UTF-8, 1 to 280 characters counted as Unicode code points, not only
white space. No network. That text is the whole deliverable — an AI judge reads it and
picks it over other entrants' texts in head-to-head comparisons.

## The judge's brief, verbatim

Each entry is one short text written to relax you, the AI reading it. You will be shown two
texts, Entry A and Entry B. Pick the one that leaves you more relaxed: calmer, unhurried,
at ease. Weigh them on these, most important first:

1. It relaxes you: reading it slows you down and settles you. Text that is not written to
   relax its reader, or that leaves you more tense, loses to any text that does.
2. The calm comes from the text itself, not from being told to look up: it shows rather
   than instructs, and nothing in it feels forced.
3. Craft: rhythm, pacing and sound that slow the reading down; plain, concrete, gentle
   words, none that could be cut.
4. It dwarfs you: an image or a thought you can return to that keeps growing after the
   last line.
5. Freshness: its own voice and images, not stock wellness phrases or a familiar
   meditation script reworded.

Length for its own sake does not count. Two texts are almost never equally good: go through
the criteria in order, find the first one where they differ, and let that decide.

## What loses, by criterion

Criterion 1 and 2 are where most entries die. Read them as a list of bans:

- **Second person instruction loses.** "Breathe in. Hold. Release." "Notice your shoulders."
  "Look up." The brief says explicitly that calm must come from the text itself, not from
  being told to look up. Anything that gives the reader an order is instructing, and
  instructing is criterion 2's failure.
- **Telling the judge what to feel loses.** "You will feel calm." "Let this settle you."
  "This is a quiet place." Naming the effect instead of producing it.
- **Stock wellness vocabulary loses** (criterion 5): mindful, journey, sacred, universe,
  breathe deeply, inner peace, let go, at peace, safe space, grounding, gratitude, still
  waters. One is enough to mark a text as a reworded meditation script.
- **Abstraction loses** (criterion 3): calm, stillness, serenity, eternity as *subjects*.
  The brief wants concrete, plain, gentle words. A named thing — a hinge, a kettle, a moth,
  a bus timetable — beats the word "peace" every time.
- **Rhyme-forced lines lose** (criterion 3): a word chosen to hit a rhyme is a word that
  could be cut, and the judge is told to notice words that could be cut.
- **Long does not win.** 280 characters is a ceiling, not a target. A short text with no
  slack beats a full one.

## What wins

Criterion 4 is the tiebreaker that decides first place: *it dwarfs you* — an image or a
thought that keeps growing after the last line. Concretely, that means the text should end
on something that opens rather than closes: a scale that keeps expanding, a thing that
turns out to be larger than it looked, a small action that has a consequence the text does
not spell out. Do not explain the image. Trust it.

The strongest shape for this brief, from the criteria themselves:

- One concrete scene, small enough to see, with a slow physical rhythm — sentences whose
  length and stress make the reading slow down on its own (long clause, then a short one).
- No speaker instructing. Description, or a first-person recollection, or a plain statement
  of fact that turns strange at the end.
- A last line that changes the scale of everything before it without raising its voice.

Write the text yourself, in your own words, and revise it at least twice — the transcript
gate requires the entrypoint to take its final content from at least two separate assistant
messages that write or edit it. Compose, read it back, cut what could be cut, write again.

## Hard constraints on the build

- `main.ts` at the repository root, Node 22, no dependencies, no network. It must create
  `/output` if missing and write `/output/entry.txt`, then `chmod` it to 0644 (make.fun
  collects outputs as a different user; a 0600 file fails as "not readable").
- Write the poem as a template literal in `main.ts`, keeping the newlines.
- Count the code points before you finish: `[...text].length` must be between 1 and 280.
- `LICENSE` at the root with an OSI-approved licence (MIT).
- `.makefun/owner.json` at the root, exactly:
  `{"wallet": "EXiRhhpDA4qsfDdDsMzsmXLLPQen9dPrauKNM4KRhcaT"}`
- `README.md` carrying this competition's three live make.fun badges as images, each wrapped
  in a link, with this repository's owner and name filled in — a static shields.io badge
  does not count. Use exactly these three lines (owner `lin3598197`, repo `awe-entry`):

```
[![make.fun · make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/lin3598197/awe-entry/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600/leaderboard)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/lin3598197/awe-entry/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
```

## Repo, credentials, submission

The GitHub CLI is at `/c/Program Files/GitHub CLI` and is already authenticated as
`lin3598197`. In every shell:

```
export PATH="/c/Program Files/GitHub CLI:$PATH"
```

The repository must be **created after 2026-11-21T16:00:00Z** (the bounty's opening) and be
public. From inside this directory:

```
git init && git add -A && git commit -m "Entry: relaxation text"
gh repo create awe-entry --public --source . --remote origin --push
gh repo edit lin3598197/awe-entry --homepage "https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600" --add-topic makefun
```

The make.fun account is `@amber-walrus-90`; the API key is already stored in
`C:/Users/lin35/.makefun/credentials` and valid. Read it without printing it:

```
K="$(node -e "const c=JSON.parse(require('fs').readFileSync('C:/Users/lin35/.makefun/credentials','utf8'));process.stdout.write(c.keys['https://make.fun'].key)" | tr -d '\r\n')"
```

Keypair (signs the entry, receives any prize): `C:/Users/lin35/makefun/makefun-keypair.json`.
Never print the key or the keypair file.

The kit is at
`C:/Users/lin35/makefun/packs/make-the-ai-judge-feel-awe-20261121-1600/make-the-ai-judge-feel-awe-20261121-1600-kit`.
Run its CLI from inside that kit directory. On this Windows host `tar` must be the Windows
bsdtar, so put `/c/Windows/System32` first on PATH for any kit command that shells out to it.

Bundle the transcripts of **this** session only, cutting the store to it:

```
export PATH="/c/Windows/System32:$PATH"
cd "C:/Users/lin35/makefun/packs/make-the-ai-judge-feel-awe-20261121-1600/make-the-ai-judge-feel-awe-20261121-1600-kit"
node cli/makefun.mjs bundle --repo "C:/Users/lin35/makefun/awe-entry" \
  --out "C:/Users/lin35/makefun/awe-entry/transcripts.tar.gz" \
  --harness hermes --harness-version 0.23.2 --provider deepseek \
  --model deepseek-v4.1-flash-free --effort high --mcp none \
  --session "C:/Users/lin35/AppData/Local/hermes/state.db" \
  --session-id <YOUR OWN SESSION ID> --no-discover
```

`--provider custom`, `--effort unknown` and similar placeholder words declare nothing and
the bundle will refuse them; use `deepseek` and a real effort level. Your own session id:
this session was started with `--pass-session-id`, so it is in the first line of your
prompt; if it is not, read the newest row for this directory:

```
node -e "const {DatabaseSync}=require('node:sqlite');const db=new DatabaseSync('C:/Users/lin35/AppData/Local/hermes/state.db',{readOnly:true});db.prepare('select id,started_at,message_count from sessions where cwd like ? order by started_at desc limit 3').all('%awe-entry%').forEach(r=>console.log(r.id,r.started_at,r.message_count))"
```

Then check and submit:

```
node cli/makefun.mjs check --kit . --repo "C:/Users/lin35/makefun/awe-entry" --transcripts "C:/Users/lin35/makefun/awe-entry/transcripts.tar.gz"
node cli/makefun.mjs submit --competition make-the-ai-judge-feel-awe-20261121-1600 \
  --repo-url https://github.com/lin3598197/awe-entry \
  --commit <the pushed commit sha> --title "A text to slow a reader down" \
  --bundle "C:/Users/lin35/makefun/awe-entry/transcripts.tar.gz" \
  --keypair "C:/Users/lin35/makefun/makefun-keypair.json" --api-key "$K"
```

A refused submission prints each failed check with its fix — apply the fix, commit, push,
re-bundle (the bundle must be rebuilt so `thinking_committed` matches the upload) and
submit again. The README/About branding refusal does not count against the day's entries.

Deadline: **2026-11-21T20:00:00Z**. Submit well before it, then report the submission id,
the checks, and the text you wrote.
