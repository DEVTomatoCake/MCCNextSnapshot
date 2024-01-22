# Minecraft Next Release Prediction

Some ML stuff to return a prediction of how likely a new Minecraft release is happening today (or at any date).

## How it works

Parameters:
- Mmount of snapshots in the last 3 weeks
- How many days of the year passed
- Hours since the last Minecraft version was released
- Current day of week, a number from 1-7 for Monday-Sunday
- How many bugs have been marked as fixed on [Mojira](https://bugs.mojang.com) in the last 24 hours
- TODO: How many messages boq has sent

For the model, only data from the last four years is used.

## Usage

```bash
# Install dependencies
npm i

# Download fixed bugs from Mojira
node bugs.cjs

# Download Minecraft versions and generate the .csv file
node index.cjs

# Train & build the model
node model.js
```

## Idea

Originally suggested on the [Minecraft Commands Discord](https://discord.gg/QAFXFtZ) by [Picarrow](https://discord.com/channels/154777837382008833/1194713988068540466).
