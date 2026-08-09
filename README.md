# Training Week — Profile & Theme Upgrade

This build upgrades the rebuilt Training Week app with a native personalization system.

## New in this version
- System, Light, Dark, and AMOLED appearance modes
- Six user-selectable accent palettes
- Theme choices persist locally and sync with the existing account state
- Automatic System appearance responds to OS light/dark changes
- Profile shortcut/avatar available from every main app view
- New Profile hub with current weight, goal weight, streak, PRs, training phase, and weekly progress
- Training-level profile field: Beginner / Intermediate / Advanced
- Optional goal body weight
- Achievement cards derived from existing workout data
- Haptic-feedback preference
- Reduce-motion accessibility preference
- Larger-text accessibility preference
- Profile editor remains integrated with the existing schedule/split editor
- Updated service-worker cache version for cleaner deployment upgrades

The implementation uses the original `S` state, `load()/save()`, `render()`, Supabase sync, and existing app navigation. It does not create a second application state or overlay database.
