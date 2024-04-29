# Проєктування бази даних

## Модель бізнес-об'єктів
@startuml

      entity Users #ADD8E6
      entity Users.email #ffffff
      entity Users.ID #ffffff
      entity Users.fullname #ffffff
      entity Users.password #ffffff
      entity Users.username #ffffff
      
      entity Role #ADD8E6
      entity Role.name #ffffff
      entity Role.ID #ffffff
      
      entity Members #ADD8E6
      
      entity Developers #ADD8E6
      entity Developers.ID #ffffff
      entity Developers.name #ffffff
      entity Developers.status #ffffff
      
      entity Project #ADD8E6
      entity Project.ID #ffffff
      entity Project.name #ffffff
      entity Project.developers #ffffff
      entity Project.status #ffffff
      
      entity Task #ADD8E6
      entity Task.description #ffffff
      entity Task.ID #ffffff
      entity Task.status #ffffff
      entity Task.name #ffffff
      entity Task.price #ffffff
      
      Users.email --d-* Users
      Users.ID --d-* Users
      Users.fullname --d-* Users
      Users.password --d-* Users
      Users.username --d-* Users
       
      Project.ID --d-* Project
      Project.name --d-* Project
      Project.developers --d-* Project
      Project.status --d-* Project
      
      Task.description --d-* Task
      Task.ID --d-* Task
      Task.status --d-* Task
      Task.name --d-* Task
      Task.price --d-* Task

      Developers.ID --d-* Developers
      Developers.name --d-* Developers
      Developers.status --d-* Developers

      Role.name --d-* Role
      Role.ID --d-* Role

      Users "1,*" --u-"0,*" Members
      Members "1,*" --u-"1,*" Project
      Project "1,1" --u-"0,*" Task
      Task "1,*" --u-"0,*" Developers
      Developers "0,*" --u-"1,*" Users
      Role "1,1" --u-"1,1" Members

@enduml

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

## Опис ER-моделі

### Roles (Ролі у проекті)
Представляє собою ролі, які може приймати користувач у певному проекті.
- ID: BINARY - унікальний код користувача у проекті
- Name: VARCHAR - назва ролі

### Members (Підписники проекта)
Представляє собою базу з ID користувачів, які підв'язані до проекту.
- ID: BINARY - унікальний код користувача

### Users (Користувачі)
Представляє собою користувача з його атрибутами.
- ID: BINARY - унікальний код користувача
- Username: VARCHAR - логін користувача
- Password: VARCHAR - пароль користувача
- Fullname: VARCHAR - справжнє ім'я користувача
- Email: VARCHAR - поштова скринька користувача  




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
