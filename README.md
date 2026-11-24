[![make.fun · u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35?utm_source=github&utm_medium=readme&utm_campaign=u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![rank](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/zxpast/makefun-emoji-vacation/rank.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![reward](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/zxpast/makefun-emoji-vacation/reward.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35?utm_source=github&utm_medium=readme&utm_campaign=u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)

**Referral code: `6hmpy1rq`**

# One Emoji, One Dream Vacation 🗻

Entry for the [One Emoji, One Dream Vacation](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35?utm_source=github&utm_medium=readme&utm_campaign=u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35) competition on make.fun — one emoji, nothing else, standing in for the trip of my dreams.

## The entry

**🗻 Mount Fuji (U+1F5FB)**

The only emoji Unicode names for one real mountain. A snow-capped cone that is a postcard at a glance, a specific bucket-list dream (seeing Fuji at sunrise, climbing it in season) rather than any generic holiday — and, in Japan, dreaming of Fuji on the first night of the year is the luckiest dream of all. A dream vacation, literally.

## How it works

`main.ts` (Node 22, stdlib only) writes the single emoji, byte-exact, to `/output/entry.txt`. Deterministic, no network, no date, no randomness. A self-check enforces the gate: exactly one emoji, 1–8 characters, not only whitespace.

```sh
node main.ts
cat /output/entry.txt   # 🗻
```

## License

MIT — see [LICENSE](LICENSE).
