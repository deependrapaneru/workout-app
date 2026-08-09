# Training Week — Rebuilt Advanced App

This build integrates the advanced features directly into the original app architecture.

## Native features added
- Five-section navigation: Home, Workout, Progress, Food, More
- Weekly workout target and completion percentage
- Per-set RPE logging (6–10) stored in existing workout logs
- Session notes stored in the main app state
- Save, apply and delete workout templates
- Progress screen: volume, RPE, PRs, consistency, body-weight trend, recent notes
- Existing Sunday body-weight system retained
- Existing exercise history, PR logic, rest timer, session timer and food tracker retained
- Existing Supabase sync, export/restore and offline behavior retained
- Responsive desktop sidebar and mobile bottom navigation
- Backward-compatible state migration for existing users

## Deployment
Upload the contents of this ZIP over the existing /workout-app/ files. Because the service worker changed, do one hard refresh after deployment.
