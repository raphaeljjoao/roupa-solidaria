# RoupaSolidária

Este repositório contém o código para o frontend e o backend do sistema RoupaSolidária.

## Estrutura do Repositório

- **`app/`**: Contém o código da aplicação frontend (Angular).
- **`api/`**: Contém o código da API backend (Django) e as configurações do PostgreSQL.

## Instruções

### Passos Iniciais (necessários penas na primeira instalação)

1. Clone o repositório:
   ```bash
   git clone https://github.com/raphaeljjoao/roupa-solidaria.git
   cd roupa-solidaria
   ```

2. Crie e ative o ambiente virtual:
   ```bash
   python3 -m venv api
   source api/bin/activate
   ```

3. Instale as dependências:
   ```bash
   pip install django
   pip install django-environ
   pip install djangorestframework
   pip install psycopg2
   ```

4. Acesse a pasta do projeto `api/roupa_solidaria`:
   ```bash
   cd api/roupa_solidaria
   ```

5. Certifique-se de que o arquivo **.env** está presente na pasta `api/roupa_solidaria/roupa_solidaria/`. O arquivo `.env` deve ser obtido com o administrador do projeto.

6. Execute as migrações:
   ```bash
   python3 manage.py migrate
   ```

7. Rode o servidor:
   ```bash
   python3 manage.py runserver
   ```

### Instruções para Execução do Backend

1. Ative o ambiente virtual:
   ```bash
   source api/bin/activate
   ```

2. Acesse a pasta do projeto `api/roupa_solidaria`:
   ```bash
   cd api/roupa_solidaria
   ```

3. Rode o servidor novamente:
   ```bash
   python3 manage.py runserver
   ```

## Acessando o Frontend e Backend

- O **frontend** estará disponível [...]
  
- O **backend** estará acessível em `http://127.0.0.1:8000/` após iniciar o servidor Django.
