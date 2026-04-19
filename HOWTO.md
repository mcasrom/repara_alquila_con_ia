# HOWTO - Fix & Rent Gold Coast

## Quick Start

### Development
```bash
cd ~/repara_alquila_con_ia
npm run dev
```

### Deploy to Vercel
```bash
vercel --prod
```

### Add OpenAI for smarter AI Chat
1. Go to https://platform.openai.com/api-keys
2. Create API key
3. Add to Vercel project settings:
   - Settings → Environment Variables
   - Add: `OPENAI_API_KEY` = your-key
4. Redeploy

## Common Tasks

### Update Fleet
Edit `fleet` array in `src/app/page.tsx`:

```typescript
const fleet = [
  { model: "Toyota Camry", type: "Sedan", price: 45, available: true },
  // Add more vehicles...
];
```

### Update Services
Edit `services` array in `src/app/page.tsx`

### Add FAQ
Add to `faqs` array in `src/app/page.tsx`

### Update SEO
Edit `metadata` in `src/app/layout.tsx`

## Troubleshooting

### Build fails
```bash
npm run build
# Check for TypeScript errors
```

### Chat not working
- Check `OPENAI_API_KEY` is set
- Fallback mode works without key

### Changes not showing
```bash
vercel --prod --force
```

## Contact

- Phone: +61 7 1234 5678
- Email: info@fixrentgoldcoast.com.au