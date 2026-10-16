# Dental site — React + TypeScript + Django

```
dental-site/
├── frontend/   # Vite + React 18 + TypeScript + React Router
└── backend/    # Django + Django REST Framework
```

## Запуск

**Backend**
```bash
cd backend
python -m venv .venv && source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env                  # впишіть свій DB_PASSWORD та DJANGO_SECRET_KEY
docker compose up -d db               # PostgreSQL (або свій встановлений Postgres з тими ж DB_* значеннями)
python manage.py makemigrations appointments
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver            # http://localhost:8000
```

**Frontend**
```bash
cd frontend
npm install
npm run dev                           # http://localhost:5173 (запити на /api проксуються на :8000)
```

Заявки з модального вікна: `POST /api/appointments/`, переглядати їх можна в `http://localhost:8000/admin/`.

## Що змінювати першим
- `frontend/src/config/site.ts` — назва клініки, адреса, телефон, e-mail, графік, соцмережі.
- `frontend/src/styles/global.css` — кольори (змінні `:root`).
- `frontend/src/data/services.ts` — картки послуг (сторінки послуг оформимо пізніше).
