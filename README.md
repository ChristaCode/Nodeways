# French Grammar Brain Map

An interactive visualization of French grammar concepts organized by CEFR levels (A1-C2). Track your learning progress as you master each concept.

## Features

- 🧠 Interactive brain map visualization
- 📊 CEFR level organization (A1, A2, B1, B2, C1, C2)
- ✅ Progress tracking (stored locally)
- 💾 Export/Import progress (backup and restore across devices)
- 🎯 Prerequisite-based learning path
- 🎨 Color-coded difficulty levels
- 📱 Responsive design

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

This project is configured for Vercel deployment. Simply connect your repository to Vercel and it will automatically build and deploy.

The app uses:
- React 18
- Vite for build tooling
- react-force-graph-2d for graph visualization
- LocalStorage for progress tracking (frontend-only)

## Progress Management

Progress is stored locally in your browser using LocalStorage. To sync across devices:

1. **Export**: Click the "📥 Export" button to download your progress as a JSON file
2. **Import**: Click the "📤 Import" button and select a previously exported JSON file
3. **Backup**: Regularly export your progress as a backup

The export file includes:
- All completed nodes
- Completion timestamps
- Export metadata

**Note**: Progress is stored per browser/device. Use export/import to transfer progress between devices.

## CEFR Level Mapping

- **A1 (Beginner)**: Priority 1, Difficulty 1-2 - Core basics
- **A2 (Elementary)**: Priority 1-2, Difficulty 2-3 - Essential grammar
- **B1 (Intermediate)**: Priority 2-3, Difficulty 3-4 - Intermediate concepts
- **B2 (Upper Intermediate)**: Priority 3-4, Difficulty 4 - Advanced grammar
- **C1 (Advanced)**: Priority 4-5, Difficulty 4-5 - Complex structures
- **C2 (Proficient)**: Priority 5, Difficulty 5 - Mastery level

## License

MIT