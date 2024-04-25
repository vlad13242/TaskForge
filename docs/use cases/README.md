# Модель прецедентів

## Загальна схема

<center style="
   border-radius:4px;
   border: 1px solid #cfd7e6;
   box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
   padding: 1em;"
>

@startuml

    skinparam noteFontColor white

    actor "Користувач" as User


    usecase "<b>UserSignUp</b>\nЗареєструватися" as UserSignUp
    usecase "<b>UserSignIn</b>\nУвійти в систему" as UserSignIn
    usecase "<b>UserUpdate</b>\nРедагувати дані користувача" as UserUpdate
    usecase "<b>Support</b>\nЗв'язок з службою підтримки" as Support


    User -r-> UserSignUp
    User -u-> UserSignIn
    User -u-> UserUpdate
    User -u-> Support


    actor "Менеджер" as Manager

    usecase "<b>ProjectManage</b>\nКерувати проектом" as ProjectManage
    usecase "<b>TaskManage</b>\nКерувати спринтом" as TaskManage
    usecase "<b>TeamManage</b>\nКерувати командою" as TeamManage
    usecase "<b>TemplateManage</b>\nКерувати командою" as TemplateManage


    Manager -> ProjectManage
    Manager -d-> TaskManage
    Manager -l-> TeamManage
    Manager -l-> TemplateManage
    Manager -u-|> User

@enduml

</center>

## Користувач

<center style="
   border-radius:4px;
   border: 1px solid #cfd7e6;
   box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
   padding: 1em;"
>


@startuml

    skinparam noteFontColor white

    actor "Користувач" as User

    usecase "<b>UserSignUp</b>\nРеєстрація" as UserSignUp
    usecase "<b>UserSignIn</b>\nРеєстрація користувача" as UserSignIn
    usecase "<b>UserUpdate</b>\nРедагувати дані користувача" as UserUpdate
    usecase "<b>UserDelete</b>\nКерувати завданнями" as UserDelete
    usecase "<b>Support</b>\nКоментувати завдання" as Support

    User -l-> UserSignUp
    User -r-> UserSignIn
    User --d-> UserUpdate
    User --d-> UserDelete
    User -u-> Support


@enduml


</center>


## Менеджер

<center style="
   border-radius:4px;
   border: 1px solid #cfd7e6;
   box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
   padding: 1em;"
>


@startuml

    skinparam noteFontColor white

    actor "Менеджер" as Manager

    usecase "<b>UserSignUp</b>\nРеєстрація" as UserSignUp
    usecase "<b>UserSignIn</b>\nЛогін" as UserSignIn
    usecase "<b>UserUpdate</b>\nРедагувати дані користувача" as UserUpdate
    usecase "<b>UserDelete</b>\nВидалити користувача" as UserDelete
    usecase "<b>Support</b>\nЗвернутись до служби підтримки" as Support
    usecase "<b>ProjectManage</b>\nКерувати проєктами" as ProjectManage
    usecase "<b>ProjectCreate</b>\nСтворити проєкт" as ProjectCreate
    usecase "<b>ProjectUpdate</b>\nРедагувати проєкт" as ProjectUpdate
    usecase "<b>ProjectDelete</b>\nВидалити проєкту" as ProjectDelete
    usecase "<b>TeamManage</b>\nКерувати командою" as TeamManage
    usecase "<b>UserAdd</b>\nДодати користувача до команди" as UserAdd
    usecase "<b>DeleteUser</b>\Видалення користувача з проєкту" as DeleteUser
    usecase "<b>TaskManage</b>\nКерувати задачами" as TaskManage
    usecase "<b>TaskAdd</b>\nДодавання задачі в проєкт" as TaskAdd
    usecase "<b>TaskUpdate</b>\nРедагування задачі в проєкті" as TaskUpdate
    usecase "<b>TaskDelete</b>\nВидалення задачі з проєкту" as TaskDelete
    usecase "<b>TemplateManage</b>\nКерувати шаблонами" as TemplateManage
    usecase "<b>TemplateAdd</b>\nСтворення шаблону проєкту" as TemplateAdd
    usecase "<b>TemplateUpdate</b>\nРедагування шаблону проєкту" as TemplateUpdate
    usecase "<b>TemplateApply</b>\nЗастосування шаблону до проєкту" as TemplateApply
    usecase "<b>TemplateDelete</b>\nВидалення шаблону" as TemplateDelete

    Manager -l-> UserSignUp
    Manager -r-> UserSignIn
    Manager --d-> UserUpdate
    Manager --d-> UserDelete
    Manager --d-> Support
    Manager -r-> ProjectManage
    Manager -d-> TeamManage
    Manager -l-> TaskManage
    Manager -u-> TemplateManage
    ProjectManage <.u. ProjectCreate:extends
    ProjectManage <.u. ProjectUpdate:extends
    ProjectManage <.u. ProjectDelete:extends
    TeamManage <.u. UserAdd:extends
    TeamManage <.u. DeleteUser:extends
    TaskManage <.u. TaskAdd:extends
    TaskManage <.u. TaskUpdate:extends
    TaskManage <.u. TaskDelete:extends
    TemplateManage <.u. TemplateAdd:extends
    TemplateManage <.u. TemplateUpdate:extends
    TemplateManage <.u. TemplateApply:extends
    TemplateManage <.u. TemplateDelete:extends

@enduml


</center>


## Сценарії використання



| ID                 | <span id=UserSignIn>`UserUpdate`</span>                                                                                                                                                                                                                                                                                                                                                 |
| :----------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Назва:             | Редагування існуючого облікового запису                                                                                                                                                                                                                                                                                                                                                 |
| Учасники:          | Менеджер/користувач, система                                                                                                                                                                                                                                                                                                                                                            |
| Передумови:        | Менеджер/користувач автентифікований у системі                                                                                                                                                                                                                                                                                                                                          |
| Результат:         | Дані облікового запису менеджера/користувача змінені                                                                                                                                                                                                                                                                                                                                    |
| Виключні ситуації: | Введені менеджером/користувачем дані не коректні <font color="red">UserUpdateException_InvalidData</font><br> менеджер/користувач не авторизований <font color="red">UserUpdateException_Unauthorized</font><br> |

@startuml

    |Користувач|
    start;
    : Натискає кнопку "Редагувати обліковий запис";

    |Система|
    : Відкриває вікно редагування облікового запису;

    |Користувач|
    : Змінює дані та натискає кнопку "Зберегти";
    
    |Система|
    : Перевіряє введені дані;
    note right #ffaaaa
    <b> Можливі помилки:
    <b> UserUpdateException_InvalidData
    <b> UserUpdateException_Unauthorized
    end note
    
    : Система зберігає зміни в обліковому записі;
    
    |Користувач|
    : Отримує оновленні дані;
    stop;

@enduml