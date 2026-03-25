# HostInking — Dokploy Deployment Guide

Step-by-step guide to deploy HostInking on your Dokploy server.

## Step 1: Create PostgreSQL Database in Dokploy

1. Log in to your Dokploy dashboard
2. Go to **Databases** → **Create Database**
3. Select **PostgreSQL**
4. Fill in the fields:
   - **Name**: `hostinking-db`
   - **Database Name**: `hostinking`
   - **Username**: `hostinking`
   - **Password**: (generate a strong password)
5. Click **Create**
6. Once created, copy the **Internal Connection URL** — it looks like:
   ```
   postgresql://hostinking:YOUR_PASSWORD@hostinking-db:5432/hostinking
   ```

## Step 2: Create Application in Dokploy

1. Go to **Applications** → **Create Application**
2. Select **Docker** as the build type
3. Connect your GitHub repository: `https://github.com/AhmedEid373/Hiking`
4. Set the branch to `main` (or your deployment branch)
5. Dokploy will automatically detect the `Dockerfile`

## Step 3: Add Environment Variables

Go to your application → **Environment Variables** and add ALL of these:

```env
# Database (use the Internal Connection URL from Step 1)
DATABASE_URL=postgresql://hostinking:YOUR_PASSWORD@hostinking-db:5432/hostinking

# Auth (generate a random 64-character string)
JWT_SECRET=your-random-secret-here

# Stripe (get from https://dashboard.stripe.com/apikeys)
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_PUBLISHABLE_KEY=pk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# App URL (your actual domain)
NEXT_PUBLIC_APP_URL=https://hostinking.com
```

### How to generate JWT_SECRET:
Run this in your terminal:
```bash
openssl rand -hex 32
```

## Step 4: Deploy and Check Logs

1. Click **Deploy** in your Dokploy application
2. Wait for the build to complete (first build takes 2-3 minutes)
3. Check the **Logs** tab for any errors
4. Visit your app at the temporary Dokploy URL to verify it works

### Run database migrations:
After the first deploy, open a terminal in your container and run:
```bash
npx tsx drizzle/migrate.ts
```

### Seed the database:
```bash
npx tsx drizzle/seed.ts
```

This creates the admin account (`admin@hostinking.com` / `Admin123!`) and all hosting plans.

## Step 5: Add Domain + Enable SSL

1. Go to your application → **Domains**
2. Click **Add Domain**
3. Enter: `hostinking.com`
4. Enable **SSL/TLS** (Let's Encrypt)
5. Click **Save**

### DNS Configuration:
In your domain registrar (where you bought hostinking.com), add:
- **A Record**: `@` → `YOUR_SERVER_IP`
- **A Record**: `www` → `YOUR_SERVER_IP`

Wait 5-10 minutes for DNS propagation, then visit https://hostinking.com

## Step 6: Setup Stripe Webhook

1. Go to [Stripe Dashboard → Webhooks](https://dashboard.stripe.com/webhooks)
2. Click **Add Endpoint**
3. Enter URL: `https://hostinking.com/api/stripe/webhook`
4. Select these events:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Click **Add Endpoint**
6. Copy the **Signing Secret** (starts with `whsec_`)
7. Go back to Dokploy → Environment Variables
8. Update `STRIPE_WEBHOOK_SECRET` with the signing secret
9. Redeploy the application

## Troubleshooting

### Build fails
- Check the build logs in Dokploy
- Make sure all environment variables are set

### Database connection error
- Verify DATABASE_URL uses the **internal** connection URL
- Make sure the database container is running

### Stripe payments not working
- Verify you're using live keys (not test keys) for production
- Check the webhook endpoint is reachable
- Check Stripe webhook logs for delivery failures

### Health check
Visit `https://hostinking.com/api/health` — should return `{"status":"ok"}`
