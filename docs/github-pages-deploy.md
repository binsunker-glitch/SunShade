# النشر التلقائي على GitHub Pages (يتطلب توكن بصلاحية workflow)

هذا الملف مثال جاهز. لتفعيل النشر التلقائي عند كل push على main:

1. انسخ هذا الملف إلى `.github/workflows/deploy.yml`
2. ادفعه بتوكن يملك صلاحيتي `repo` و `workflow`
3. من إعدادات المستودع Settings ← Pages اختر Source = GitHub Actions

> ملاحظة: بدون صلاحية workflow سيرفض GitHub أي push يحتوي ملفات
> `.github/workflows/` — لهذا يُنشر حالياً يدوياً من فرع `gh-pages`.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```
