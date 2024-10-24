# Oink Bank - API REST

Oink Bank es una API REST para gestionar usuarios, cuentas bancarias y transacciones financieras. Este proyecto permite realizar operaciones de banca en línea como la creación de usuarios, manejo de cuentas bancarias y gestión de transacciones.

## Endpoints

### 1. Users

**Descripción:** Gestión de usuarios en el sistema de banca.

| Método | Endpoint        | Descripción                         | Parámetros                                               |
|--------|-----------------|-------------------------------------|----------------------------------------------------------|
| GET    | `/users`         | Obtener todos los usuarios          | -                                                        |
| GET    | `/users/{id}`    | Obtener un usuario por ID           | **Path**: `id` (Número de identificación del usuario)     |
| POST   | `/users`         | Crear un nuevo usuario              | **Body**: `{ "username": "John", "password": "1234" }`  |
| PUT    | `/users/{id}`    | Actualizar un usuario existente     | **Path**: `id` <br> **Body**: `{ "username": "Brad", "password": "123" }`        |
| DELETE | `/users/{id}`    | Eliminar un usuario                 | **Path**: `id`                                           |

---

### 2. Accounts

**Descripción:** Gestión de cuentas bancarias.

| Método | Endpoint           | Descripción                         | Parámetros                                                        |
|--------|--------------------|-------------------------------------|-------------------------------------------------------------------|
| GET    | `/accounts`         | Obtener todas las cuentas bancarias | -                                                                 |
| GET    | `/accounts/{accountNumber}`    | Obtener detalles de una cuenta      | **Path**: `id` (Número de identificación de la cuenta)             |
| POST   | `/accounts`         | Crear una nueva cuenta bancaria     | **Body**: `{ "userId": 1, "balance": 1000.00 }`                    |           |
| DELETE | `/accounts/{accountNumber}`    | Eliminar una cuenta bancaria        | **Path**: `id`                                                    |
| DELETE | `/accounts/balance/{accountNumber}`    | Obtener balance de una cuenta        | **Path**: `id` (Número de identificación de la cuenta)  |                                       
| DELETE | `/accounts/transactions/{accountNumber}`    | Obtener todas las transacciones de una cuenta        | **Path**: `id` (Número de identificación de la cuenta)              |

---

### 3. Transactions

**Descripción:** Gestión de transacciones financieras entre cuentas.

| Método | Endpoint               | Descripción                           | Parámetros                                                           |
|--------|------------------------|---------------------------------------|----------------------------------------------------------------------|
| GET    | `/transactions`         | Obtener todas las transacciones       | -                                                                    |
| GET    | `/transactions/{id}`    | Obtener detalles de una transacción   | **Path**: `id` (Número de identificación de la transacción)           |
| POST   | `/transactions`         | Crear una nueva transacción           | **Body**: `{ "fromAccountId": 1, "toAccountId": 2, "amount": 100.00 }` |
| DELETE | `/transactions/{id}`    | Eliminar una transacción              | **Path**: `id`                                                       |
| DELETE | `/receipt/{operationNumber}/pdf`    | Generar un comprobante PDF              | **Path**: `id` (Número de identificación de la transacción)        |

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

