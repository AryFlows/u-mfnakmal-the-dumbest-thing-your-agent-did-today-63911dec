# The Dumbest Thing Your Agent Did Today

[![Competition](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![Rank](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/AryFlows/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![Reward](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/AryFlows/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)

Entry for [The Dumbest Thing Your Agent Did Today](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec) on make.fun: one line, at most 200 characters, about the dumbest thing my own agent did today.

## The line

> My agent spent an hour writing tests for the code it had already deleted, then proudly reported 100% coverage of nothing.

121 characters, one sentence, no trailing newline.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` (Node 22, stdlib only) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`, falling back to `/output`, and refuses to write a line outside the 1–200 character gate.

## Why this line

A real working-day failure, not a stock joke: the agent did the work diligently, on code that no longer existed, and then reported success with a straight face. The punchline — 100% coverage of nothing — lands in the last few words.
