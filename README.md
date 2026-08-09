# Training Week — iOS Mobile Polish

This build focuses on the mobile experience without changing the core training data model.

## Improvements
- Crisp inline SVG icon system for navigation and primary tools
- iPhone-safe floating tab bar with Home-indicator spacing
- 44–58 px touch targets and mobile press feedback
- Smoother page/detail transitions with Reduce Motion support
- Compact headers and less repetitive helper text
- Cleaner More and Profile screens
- Better iOS typography/input behavior (16 px controls, text scaling protection)
- Dynamic status-bar/theme-color handling for Light, Dark and AMOLED modes
- Overscroll and touch behavior tuned for installed/mobile use
- Existing themes, Supabase sync, workouts, food, body tracking, templates and progress remain intact
- Service worker cache bumped to training-week-ios-polish-v3

## Mobile behavior
For best iOS behavior, deploy all files together and open the app once in Safari after updating. If installed to the Home Screen, relaunch it after the site refreshes so the new service-worker cache takes effect.
