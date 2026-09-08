# Point Talentos - API (backend)

## Como rodar

1. Instale as dependencias:

   npm install

2. Copie o arquivo .env.example para .env e preencha os valores:

   - DATABASE_URL: connection string do PostgreSQL (Neon, Supabase ou local)
   - GOOGLE_CLIENT_ID e GOOGLE_CLIENT_SECRET: criados no Google Cloud Console
   - GOOGLE_CALLBACK_URL: http://localhost:3000/auth/google/callback
   - JWT_SECRET: qualquer texto longo e aleatorio
   - FRONTEND_URL: http://localhost:5173
   - ADMIN_EMAILS: e-mails que devem virar administrador automaticamente ao logar

3. Gere o cliente do Prisma e crie as tabelas no banco:

   npx prisma generate
   npx prisma migrate dev --name init

4. Rode o servidor:

   npm run start:dev

A API sobe em http://localhost:3000
