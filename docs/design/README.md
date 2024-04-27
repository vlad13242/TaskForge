# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема

# ER-модель

@startuml

    namespace UserProfile {
        entity Users {
            ID: UUID
            USERNAME: TEXT
            PASSWORD: VARCHAR
            FULLNAME: TEXT
            EMAIL: TEXT
        }
    }

    namespace ProjectManagement {
        entity Projects {
            ID: UUID
            name: TEXT
            description: TEXT
            status: TEXT
        }

        entity Tasks {
            ID: UUID
            name: TEXT
            description: TEXT
            status: TEXT
            developer: TEXT
            price: TEXT
        }

        entity Developers {
            ID: UUID
            Name: TEXT
            Status: TEXT
            }
    }

    namespace AccessPolicy {
        entity Members {
            ID: UUID
        }

        entity Roles {
            ID: UUID
            Name: TEXT
        }
    }

Developers "1..*" --- "1..*" Users
Tasks "1..*" --- "0..*" Developers
Roles "1" --- "1" Members
Users "1..*" --> "0..*" Members
Projects "1..1" --- "1..*" Members
Projects "1" <-- "1..*" Tasks

@enduml

# Опис ER-моделі
Projects (Проєкти)
Власне представляє собою проєкт, над яким працює команда. Має поля:
- ID: BINARY - унікальний код
- Name: VARCHAR - ім'я проєкту
- description: VARCHAR - опис проєкту
- status: VARCHAR - статус проєкту

Task (Завдання)
Представляє собою завдання. Має поля:
- ID: BINARY - унікальний код
- Name: VARCHAR - назва завдання
- Description: VARCHAR - опис завдання
- Status: VARCHAR - статус завдання
- Developer: VARCHAR - ім'я розробника, який виконує завдання
- Price: VARCHAR - ціна виконання завдання

Developers (Розробники)
Developers - це сутність-асоціація, яка зберігає учасників, які працюють над проєктом.\
- ID: BINARY - унікальний код
- Name: VARCHAR - ім'я розробника
- Status: VARCHAR - статус розробника
