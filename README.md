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
   python3 -m venv apienv
   source apienv/bin/activate
   ```

3. Instale as dependências:
   ```bash
   pip install -r api/requirements.txt
   ```

4. Certifique-se de que o arquivo **.env** está presente na pasta `api/roupa_solidaria/`. O arquivo `.env` deve ser obtido com o administrador do projeto.

5. Execute as migrações:
   ```bash
   python3 api/manage.py migrate
   ```

6. Rode o servidor:
   ```bash
   python3 api/manage.py runserver
   ```

### Instruções para Execução do Backend

1. Ative o ambiente virtual:
   ```bash
   source apienv/bin/activate
   ```

2. Rode o servidor:
   ```bash
   python3 api/manage.py runserver
   ```

## Acessando o Frontend e Backend

- O **frontend** estará disponível em `http://localhost:4200/` após iniciar o servidor Angular com o comando `ng serve`.
  
- O **backend** estará disponível em `http://127.0.0.1:8000/` após iniciar o servidor Django.
