# Point Talentos

Banco de talentos desenvolvido para a Point Media, com tres perfis de acesso: candidato, empresa e administrador.

## Estrutura

- backend/  -> API em NestJS + Prisma + PostgreSQL
- frontend/ -> Interface em React + Vite + Tailwind CSS

## Ordem recomendada para rodar o projeto

1. Configure o banco de dados PostgreSQL (local ou na nuvem).
2. Crie as credenciais OAuth 2.0 no Google Cloud Console (tela de consentimento + Client ID/Secret) e adicione:
   - Origem JavaScript autorizada: http://localhost:5173
   - URI de redirecionamento autorizado: http://localhost:3000/auth/google/callback
3. Configure e rode o backend (veja backend/README.md).
4. Configure e rode o frontend (veja frontend/README.md).
5. Acesse http://localhost:5173 e faca login com o Google.

O primeiro papel de cada usuario e CANDIDATO por padrao. Para virar EMPRESA ou ADMIN:
- ADMIN: adicione o e-mail na variavel ADMIN_EMAILS do backend antes do primeiro login.
- EMPRESA: por enquanto, altere o campo "role" do usuario diretamente no banco de dados (ex: usando o Prisma Studio: npx prisma studio) ate que uma tela de solicitacao seja implementada.
