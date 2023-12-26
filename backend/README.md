# MaskotApp Backend

This folder contains the backend for MaskotApp social.

## Installation

This project uses [poetry](https://python-poetry.org/docs/#installation)

1. Clone the repository.

```git
git clone https://github.com/No-Country/c15-48-n-python.git
```

2. CD to the backend folder.

```bash
cd backend/
```

3. Install the project dependencies.

```bash
poetry install
```

4. Run migrations. Note that the order is necessary due to the accounts app overriding the default user.

```bash
python manage.py makemigrations accounts
python manage.py migrate accounts
python manage.py makemigrations posts
python manage.py migrate posts
python manage.py makemigrations
python manage.py migrate
```

5. Start the development server

```bash
python manage.py runserver
```

## License

The backend (only the code inside the `backend/` folder) is licensed under the GNU AGPLv3 license.
