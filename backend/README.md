# Oink Bank - API REST

Oink Bank es una API REST para gestionar usuarios, cuentas bancarias y transacciones financieras. Este proyecto permite realizar operaciones de banca en línea como la creación de usuarios, manejo de cuentas bancarias y gestión de transacciones.

## Endpoints

### 1. Users

**Descripción:** Gestión de usuarios en el sistema de banca.

| Método | Endpoint        | Descripción                         | Parámetros                                               |
|--------|-----------------|-------------------------------------|----------------------------------------------------------|
| GET    | `https://oinkbank.onrender.com/api/users`         | Obtener todos los usuarios          | -                                                        |
| GET    | `https://oinkbank.onrender.com/api/users/{id}`    | Obtener un usuario por ID           | **Path**: `id` (Número de identificación del usuario)     |
| POST   | `https://oinkbank.onrender.com/api/users/register`         | Crear un nuevo usuario              | **Body**: `{ "username": "John", "password": "1234" }`  |
| POST   | `https://oinkbank.onrender.com/api/auth/login`         | Crear un nuevo usuario              | **Body**: `{ "username": "John", "password": "1234" }`  |
| DELETE | `https://oinkbank.onrender.com/api/users/{id}`    | Eliminar un usuario                 | **Path**: `id`                                           |

---

### 2. Accounts

**Descripción:** Gestión de cuentas bancarias.

| Método | Endpoint           | Descripción                         | Parámetros                                                        |
|--------|--------------------|-------------------------------------|-------------------------------------------------------------------|
| GET    | `https://oinkbank.onrender.com/api/accounts`         | Obtener todas las cuentas bancarias | -                                                                 |
| GET    | `https://oinkbank.onrender.com/api/accounts/{accountNumber}`    | Obtener detalles de una cuenta      | **Path**: `id` (Número de identificación de la cuenta)             |
| POST   | `https://oinkbank.onrender.com/api/accounts`         | Crear una nueva cuenta bancaria     | **Body**: `{ "userId": 1, "balance": 1000.00 }`                    |           |
| DELETE | `https://oinkbank.onrender.com/api/accounts/{accountNumber}`    | Eliminar una cuenta bancaria        | **Path**: `id`                                                    |
| GET | `https://oinkbank.onrender.com/api/accounts/balance/{accountNumber}`    | Obtener balance de una cuenta        | **Path**: `id` (Número de identificación de la cuenta)  |                                       
| GET | `https://oinkbank.onrender.com/api/accounts/transactions/{accountNumber}`    | Obtener todas las transacciones de una cuenta        | **Path**: `id` (Número de identificación de la cuenta)              |

---

### 3. Transactions

**Descripción:** Gestión de transacciones financieras entre cuentas.

| Método | Endpoint               | Descripción                           | Parámetros                                                           |
|--------|------------------------|---------------------------------------|----------------------------------------------------------------------|
| GET    | `https://oinkbank.onrender.com/api/transactions`         | Obtener todas las transacciones       | -                                                                    |
| GET    | `https://oinkbank.onrender.com/api/transactions/{id}`    | Obtener detalles de una transacción   | **Path**: `id` (Número de identificación de la transacción)           |
| POST   | `https://oinkbank.onrender.com/api/transactions`         | Crear una nueva transacción           | **Body**: `{ "fromAccountId": 1, "toAccountId": 2, "amount": 100.00 }` |
| DELETE | `https://oinkbank.onrender.com/api/transactions/{id}`    | Eliminar una transacción              | **Path**: `id`                                                       |
| GET | `https://oinkbank.onrender.com/api/receipt/{operationNumber}/pdf`    | Generar un comprobante PDF              | **Path**: `id` (Número de identificación de la transacción)        |

---

## Tecnologías

- Java
- Spring Boot
- Hibernate
- MySQL

## Cómo ejecutar el proyecto

1. Clona el repositorio:
   ```bash
   https://github.com/No-Country-simulation/c21-27-n-java-angular.git
2. Configura las variables de entorno para la base de datos en el archivo `application.properties`
3. Ejecuta la aplicación: `mvn spring-boot:run`

