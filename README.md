
# RoupaSolidária

Este repositório contém o código para o frontend e o backend do sistema RoupaSolidária.

## Estrutura do Repositório

- **`app/`**: Contém o código da aplicação frontend (Angular).
- **`api/`**: Contém o código da API backend (Django) e as configurações do PostgreSQL.

## Instruções

### Primeira Instalação

1. Clone o repositório:
```bash
git clone https://github.com/raphaeljjoao/roupa-solidaria.git
cd roupa-solidaria
```

2. Crie e ative um ambiente virtual:
```bash
python3 -m venv api
source api/bin/activate
```

3. Instale as dependências necessárias:
```bash
pip install django
pip install environ
pip install --upgrade django-environ
pip install djangorestframework
pip install psycopg2
```

4. Aplique as migrações do banco de dados:
```bash
python3 roupa_solidaria/manage.py migrate
```

5. Inicie o servidor de desenvolvimento:
```bash
python3 roupa_solidaria/manage.py runserver
```

### Instruções para Execução do Backend

1. Acesse a pasta do backend:
```bash
cd api
```

2. Ative o ambiente virtual:
```bash
source api/bin/activate
```

3. Inicie o servidor de desenvolvimento:
```bash
python3 roupa_solidaria/manage.py runserver
```

## Acessando o Frontend e Backend

- O frontend [...].
- O backend estará acessível em `http://127.0.0.1:8000/` após iniciar o servidor Django.
