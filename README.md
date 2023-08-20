
# NextJS + Laravel - Project

This project was developed being a test for one opportunity in CredFranco as Fullstack Developer.


## Instalação

Clone this repository

```bash
 git clone https://github.com/virgilhawkins00/breeze-next
```

Setup your .env file
```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=database_name
DB_USERNAME=database_user_name
DB_PASSWORD=database_password
```

Install breeze
```bash
composer require laravel/breeze --dev
```
After install breeze api, you can see .env file two url for backend and frontend. You can change url in production, for local leave it.
 
```bash
 APP_URL=http://localhost:8000
FRONTEND_URL=http://localhost:3000
```
run project and leave it.
```bash
php artisan serve
```
Open two terminal one for run laravel application & second to create nextjs project and run.
```bash
cd frontend
# for nodejs
npm install 
or
# for yarn
yarn install

```
Copy .env file
```bash
cp .env.example .env 
```
you can change url in production
```bash
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```
run next js project
```bash
npm run dev
```