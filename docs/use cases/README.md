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
    usecase "<b>TaskManage</b>\nКерувати задачами" as TaskManage
    usecase "<b>TeamManage</b>\nКерувати командою" as TeamManage
    usecase "<b>TemplateManage</b>\nКерувати шаблонами" as TemplateManage


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

    usecase "<b>UserSignUp</b>\nЗареєструватися" as UserSignUp
    usecase "<b>UserSignIn</b>\nУвійти в систему" as UserSignIn
    usecase "<b>UserUpdate</b>\nРедагувати дані користувача" as UserUpdate
    usecase "<b>UserDelete</b>\nВидалити користувача" as UserDelete
    usecase "<b>Support</b>\nЗв'язок з службою підтримки" as Support

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
    usecase "<b>DeleteUser</b>\nВидалення користувача з проєкту" as DeleteUser
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


**Діаграма прецедентів**

# Сценарії використання

### UserSignUp

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>UserSignUp</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Реєстрація нового облікового запису</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Менеджер/користувач, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>Менеджер/користувач не має облікового запису</td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Новий обліковий запис</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
        - SignUpException_InvalidData - введені менеджером/користувачем дані не коректні<br/>
        - SignUpException_AccAlreadyExist - обліковий запис по вказаному Email вже існує<br/>
        - SignUpException_InvalidEmail - введений менеджером/користувачем Email не існує<br/>
        </td>
    </tr>
</table>


@startuml

    |Користувач|
    start;

    :Менеджер/користувач натискає кнопку "Зареєструватися";
    |Система|
    :Система відкриває вікно з формою для реєстрації;
    |Користувач|
    :Менеджер/користувач заповнює поля у формі для реєстрації;
    :Менеджер/користувач натискає на кнопку "Створити";
    |Система|
    :Система перевіряє введені дані
    <font color="red">SignUpException_InvalidData</font>
    <font color="red">SignUpException_AccAlreadyExist</font>
    <font color="red">SignUpException_InvalidEmail</font>;
    :Система створює новий обліковий запис;
    |Користувач|
    stop;

@enduml

### UserSignIn

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>UserSignIn</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Автентифікація у існуючий обліковий запис</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Менеджер/користувач, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
         - Менеджер/користувач має обліковий запис<br/>
         - Менеджер/користувач не авнтентифікований<br/>
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Менеджер/користувач автентифікований у системі</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
        - SignInException_InvalidData - введені менеджером/користувачем дані не коректні<br/>
        - SignInException_AccDoesn`tExist - обліковий запис по вказаному Email не існує<br/>
        - SignInException_InvalidPassword - введений менеджером/користувачем пароль не правильний<br/>
        </td>
    </tr>
    <tr>
        <td><b>Основний сценарій:</b></td>
        <td>
            <ol>
                <li>Менеджер/користувач заповнює поля у формі для входу</li>
                <li>Менеджер/користувач натискає кнопку "Увійти"</li>
                <li>Система перевіряє введені дані(SignInException_InvalidData, SignInException_AccDoesn`tExist, SignInException_InvalidPassword)</li>
                <li>Система автентифікує менеджера/користувача</li>
            </ol>
        </td>
    </tr>
</table>

@startuml

    |Менеджер/користувач|
    start;
    :Заповнює поля у формі для входу;
    :Натискає кнопку "Увійти";
    
    |Система|
    :Система перевіряє введені дані
    <font color="red">**SignInException_InvalidData**
    <font color="red">**SignInException_AccDoesn`tExist**
    <font color="red">**SignInException_InvalidPassword`tExist**;
    :Система автентифікує менеджера/користувача;
    
    |Менеджер/користувач|
    stop;

@enduml

### UserUpdate

| ID                 | <span id=UserUpdate>`UserUpdate`</span>                                                                                                                                                                                                                                                                                                                                                 |
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

### UserDelete

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>UserDelete</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Видалення існуючого облікового запису</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Менеджер/користувач, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
        Менеджер/користувач автентифікований у системі
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Обліковий запис менеджера/користувача видалено</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
         UserDeleteException_InvalidPassword - введений менеджером/користувачем пароль не правильний
        </td>
    </tr>
</table>

@startuml

    |Менеджер/користувач|
    start;
    :Менеджер/користувач натискає кнопку "Видалити обліковий запис";
    |Система|
    :Система запитує у менеджера/користувача пароль до його облікового запису;
    |Менеджер/користувач|
    :Менеджер/користувач вводить пароль і натискає кнопку "Видалити";
    |Система|
    :Система перевіряє введені дані
    <font color="red"><b>UserDeleteException_InvalidPassword;
    :Система видаляє обліковий запис;
    |Менеджер/користувач|
    stop;

@enduml

### ProjectCreate

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>ProjectCreate</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Створення нового проєкту</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Менеджер, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
         Менеджер автентифікований у системі
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Створено новий проєкт</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
        ProjectCreate_InvalidData - введені менеджером дані не коректні
        </td>
    </tr>
</table>

@startuml

    |Менеджер|
    start;
    :Менеджер натискає кнопку "Створити проєкт";
    |Система|
    :Система відкриває вікно з формою для створення проєкту;
    |Менеджер|
    :Менеджер заповнює форму та натискає кнопку "Створити";
    |Система|
    :Система перевіряє введені дані
    <font color="red"><b> ProjectCreate_InvalidData;
    :Система створює новий проєкт;
    |Менеджер|
    stop;

@enduml

### ProjectUpdate

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>ProjectUpdate</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Редагування існуючого проєкту</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Менеджер, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
         Менеджер автентифікований у системі
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Існуючий проєкт відредаговано</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
        - ProjectUpdateException_InvalidData - введені менеджером дані не коректні<br/>
        - ProjectUpdateException_Unauthorized - менеджер не має прав на редагування<br/>
        </td>
    </tr>
</table>

@startuml

    |Менеджер|
    start;
    :Менеджер обирає проєкт у розділі "Проєкти";
    :Менеджер натискає кнопку "Редагувати проєкт";
    |Система|
    :Система відкриває вікно з формою для редагування проєкту;
    |Менеджер|
    :Менеджер заповнює форму та натискає кнопку "Редагувати";
    |Система|
    :Система перевіряє введені дані
    <font color="red"><b> ProjectUpdateException_InvalidData
    <font color="red"><b> ProjectUpdateException_Unauthorized;
    :Система зберігає зміни в проєкті;
    |Менеджер|
    stop;

@enduml

### ProjectDelete

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>ProjectDelete</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Видалення існуючого проєкту</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Менеджер, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
         Менеджер автентифікований у системі
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Існуючий проєкт видалено</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
         ProjectDeleteException_Unauthorized - менеджер не має прав на видалення
        </td>
    </tr>
</table>

@startuml

    |Менеджер|
    start;
    :Менеджер обирає проєкт у розділі "Проєкти";
    :Менеджер натискає кнопку "Видалити проєкт";
    |Система|
    :Система перевіряє права менеджера
    <font color="red"><b> ProjectDeleteException_Unauthorized;
    :Система питає чи точно менеджер бажає видалити проєкт;
    |Менеджер|
    :Менеджер натискає кнопку "Видалити";
    |Система|
    :Система видаляє проєкт;
    |Менеджер|
    stop;

@enduml

### UserAdd

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>UserAdd</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Додавання користувача до проєкту</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Менеджер, користувач, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
         - Менеджер автентифікований у системі<br/>
         - Користувач якого додають до проєкту існує<br/>
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>До проєкту додано користувача</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
        - UserAddException_InvalidData - введені менеджером дані не коректні<br/>
        - UserAddException_Unauthorized - менеджер не має прав на додавання користувача<br/>
        </td>
    </tr>
</table>

@startuml

    |Менеджер|
    :Менеджер обирає проєкт у розділі "Проєкти";
    :Менеджер натискає кнопку "Додати користувача";
    |Система|
    :Система відкриває вікно з полем для вводу імені користувача;
    |Менеджер|
    : Менеджер заповнює поле та натискає кнопку "Додати";
    |Система|
    :Система перевіряє введені дані
    <font color="red"><b>UserAddException_InvalidData
    <font color="red"><b>UserAddException_Unauthorized;
    :Система додає нового користувача;
    |Менеджер|
    stop;

@enduml

### UserDelete

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>UserDelete</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Видалення користувача з проєкту</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Менеджер, користувач, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
         - Менеджер автентифікований у системі<br/>
         - Користувач якого видаляють є в проєкті<br/>
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>З проєкту видалено користувача</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
        - UserDeleteException_InvalidData - введені менеджером дані не коректні<br/>
        - UserDeleteException_Unauthorized - менеджер не має прав на видалення користувача<br/>
        </td>
    </tr>
    <tr>
        <td><b>Основний сценарій:</b></td>
        <td>
            <ol>
                <li>Менеджер обирає проєкт у розділі "Проєкти"</li>
                <li>Менеджер обирає користувача у розділі "Користувачі"</li>
                <li>Менеджер натискає кнопку "Видалити користувача"</li>
                <li>Система запитує чи менеджер дійсно хоче видалити користувача</li>
                <li>Менеджер натискає кнопку "Видалити"</li>
                <li>Система перевіряє введені дані(UserDeleteException_InvalidData, UserDeleteException_Unauthorized)</li>
                <li>Система видаляє користувача з проєкту</li>
            </ol>
        </td>
    </tr>
</table>

@startuml

    |Менеджер|
    :Менеджер обирає проєкт у розділі "Проєкти";
    :Менеджер обирає користувача у розділі "Користувачі";
    :Менеджер натискає кнопку "Видалити користувача";
    |Система|
    :Система запитує чи менеджер дійсно хоче видалити користувача;
    |Менеджер|
    :Менеджер натискає кнопку "Видалити";
    |Система|
    :Система перевіряє введені дані
    <font color="red"><b> UserDeleteException_InvalidData
    <font color="red"><b> UserDeleteException_Unauthorized;
    :Система видаляє користувача з проєкту;
    |Менеджер|
    stop;

@enduml

### TaskAdd

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>TaskAdd</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Додавання задачі в проєкт</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Менеджер, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
         - Менеджер автентифікований у системі<br/>
         - Проєкт в який додають задачу існує<br/>
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>В проєкт додано задачу</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
        - TaskAddException_InvalidData - введені менеджером дані не коректні<br/>
        - TaskAddException_Unauthorized - менеджер не має прав на додавання задачі<br/>
        </td>
    </tr>
</table>

@startuml

    |Менеджер|
    start;
    :Менеджер обирає проєкт у розділі "Проєкти";
    :Менеджер натискає кнопку "Додати задачу";
    |Система|
    :Система відкриває вікно з формою для додавання задачі;
    |Менеджер|
    :Менеджер заповнює форму та натискає кнопку "Додати";
    |Система|
    :Система перевіряє введені дані
    <font color="red"><b> TaskAddException_InvalidData
    <font color="red"><b> TaskAddException_Unauthorized;
    :Система додає задачу в проєкт;
    |Менеджер|
    stop;

@enduml

### TaskUpdate

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>TaskUpdate</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Редагування задачі в проєкті</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Менеджер, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
         - Менеджер автентифікований у системі<br/>
         - Проєкт в якому редагують задачу існує<br/>
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Задачу відредаговано</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
         - TaskUpdateException_InvalidData - введені менеджером дані не коректні<br/>
         - TaskUpdateException_Unauthorized - менеджер не має прав на змінення задачі<br/>
        </td>
    </tr>
    <tr>
        <td><b>Основний сценарій:</b></td>
        <td>
            <ol>
                <li>Менеджер обирає проєкт у розділі "Проєкти"</li>
                <li>Менеджер обирає задачу у розділі "Задачі"</li>
                <li>Менеджер натискає кнопку "Редагувати"</li>
                <li>Система відкриває вікно з формою для редагування задачі</li>
                <li>Менеджер заповнює форму та натискає кнопку "Зберегти"</li>
                <li>Система перевіряє введені дані(TaskUpdateException_InvalidData, TaskUpdateException_Unauthorized)</li>
                <li>Система змінює задачу</li>
            </ol>
        </td>
    </tr>
</table>

@startuml

    |Менеджер|
    start;
    :Обирає проєкт у розділі "Проєкти";
    :обирає задачу у розділі "Задачі";
    :натискає кнопку "Редагувати";
    
    |Система|
    :Система відкриває вікно з формою для редагування задачі;
    
    |Менеджер|
    :Заповнює форму та натискає кнопку "Зберегти";
    
    |Система|
    :Система перевіряє введені дані
    <font color="red">**TaskUpdateException_InvalidData**
    <font color="red">**TaskUpdateException_Unauthorized**;
    :Система змінює задачу;

    |Менеджер|
    stop;

@enduml

### TaskDelete

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>TaskDelete</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Видалення задачі з проєкту</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Менеджер, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
         - Менеджер автентифікований у системі<br/>
         - Проєкт з якого видаляють задачу існує<br/>
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Задачу видалено</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
         TaskDeleteException_Unauthorized - менеджер не має прав на видалення задачі
        </td>
    </tr>
    <tr>
        <td><b>Основний сценарій:</b></td>
        <td>
            <ol>
                <li>Менеджер обирає проєкт у розділі "Проєкти"</li>
                <li>Менеджер обирає задачу у розділі "Задачі"</li>
                <li>Менеджер натискає кнопку "Видалити"</li>
                <li>Система запитує менеджера чи точно він хоче видалити задачу</li>
                <li>Менеджер натискає кнопку "Видалити"</li>
                <li>Система перевіряє права доступу(TaskDeleteException_Unauthorized)</li>
                <li>Система видаляє задачу</li>
            </ol>
        </td>
    </tr>
</table>

@startuml

    |Менеджер|
    start;
    :Обирає проєкт у розділі "Проєкти";
    :обирає задачу у розділі "Задачі";
    :натискає кнопку "Видалити";
    
    |Система|
    :Система запитує менеджера чи точно він хоче видалити задачу;
    
    |Менеджер|
    :Натискає кнопку "Видалити";
    
    |Система|
    :Система перевіряє права доступу
    <font color="red">**TaskDeleteException_Unauthorized**;
    :Система видаляє задачу;

    |Менеджер|
    stop;

@enduml

### TemplateAdd

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>TemplateAdd</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Створення шаблону проєкту</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Менеджер, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
         Менеджер автентифікований у системі
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Шаблон створено</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
         TemplateAddException_InvalidData - введені менеджером дані не коректні
        </td>
    </tr>
    <tr>
        <td><b>Основний сценарій:</b></td>
        <td>
            <ol>
                <li>Менеджер натискає кнопку "Створити шаблон"</li>
                <li>Система відкриває вікно з формою для створення шаблону</li>
                <li>Менеджер заповнює форму та натискає кнопку "Створити"</li>
                <li>Система перевіряє введені дані(TemplateAddException_InvalidData)</li>
                <li>Система створює шаблон</li>
            </ol>
        </td>
    </tr>
</table>

@startuml

    |Менеджер|
    start;
    :Натискає кнопку "Створити шаблон";
    
    |Система|
    :Система відкриває вікно з формою для створення шаблону;
    
    |Менеджер|
    :Заповнює форму та натискає кнопку "Створити";
    
    |Система|
    :Система перевіряє введені дані
    <font color="red">**TemplateAddException_InvalidData**;
    :Система створює шаблон;

    |Менеджер|
    stop;

@enduml

### TemplateUpdate

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>TemplateUpdate</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Редагування шаблону проєкту</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Менеджер, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
         - Менеджер автентифікований у системі<br/>
         - Шаблон який редагують існує<br/>
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Шаблон відредаговано</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
         - TemplateUpdateException_InvalidData - введені менеджером дані не коректні<br/>
         - TemplateUpdateException_Unauthorized - менеджер не має прав на змінення шаблону<br/>
        </td>
    </tr>
    <tr>
        <td><b>Основний сценарій:</b></td>
        <td>
            <ol>
                <li>Менеджер обирає шаблон у розділі "Шаблони"</li>
                <li>Менеджер натискає кнопку "Редагувати"</li>
                <li>Система відкриває вікно з формою для редагування шаблону</li>
                <li>Менеджер заповнює форму та натискає кнопку "Зберегти"</li>
                <li>Система перевіряє введені дані(TemplateUpdateException_InvalidData, TemplateUpdateException_Unauthorized)</li>
                <li>Система змінює шаблон</li>
            </ol>
        </td>
    </tr>
</table>

@startuml

    |Менеджер|
    start;
    :Обирає шаблон у розділі "Шаблони";
    :Натискає кнопку "Редагувати";
    
    |Система|
    :Система відкриває вікно з формою для редагування шаблону;
    
    |Менеджер|
    :Заповнює форму та натискає кнопку "Зберегти";
    
    |Система|
    :Система перевіряє введені дані
    <font color="red">**TemplateUpdateException_InvalidData**
    <font color="red">**TemplateUpdateException_Unauthorized**;
    :Система змінює шаблон;

    |Менеджер|
    stop;

@enduml

### TemplateApply

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>TemplateApply</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Застосування шаблону до проєкту</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Менеджер, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
         - Менеджер автентифікований у системі<br/>
         - Шаблон який застосовують існує<br/>
         - Проєкт до якого застосовують шаблон існує<br/>
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Шаблон застосовано</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
         TemplateApplyException_Unauthorized - менеджер не має прав на застосування шаблону
        </td>
    </tr>
    <tr>
        <td><b>Основний сценарій:</b></td>
        <td>
            <ol>
                <li>Менеджер обирає проєкт у розділі "Проєкти"</li>
                <li>Менеджер натискає кнопку "Застосувати шаблон"</li>
                <li>Система перевіряє права менеджера(TemplateApplyException_Unauthorized)</li>
                <li>Система відкриває вікно з розділом "Шаблони"</li>
                <li>Менеджер обирає шаблон та натискає кнопку "Застосувати"</li>
                <li>Система застосовує шаблон</li>
            </ol>
        </td>
    </tr>
</table>

@startuml

    |Менеджер|
    start;
    :Обирає шаблон у розділі "Шаблони";
    :Натискає кнопку "Застосувати шаблон";
    
    |Система|
    :Система перевіряє права менеджера
    <font color="red">**TemplateApplyException_Unauthorized**;
    :Система відкриває вікно з розділом "Шаблони";

    |Менеджер|
    :Обирає шаблон та натискає кнопку "Застосувати";

    |Система|
    :Система застосовує шаблон;

    |Менеджер|
    stop;

@enduml

### TemplateDelete

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>TemplateDelete</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Видалення шаблону</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Менеджер, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
         - Менеджер автентифікований у системі<br/>
         - Шаблон який видаляють існує<br/><br/>
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Шаблон видалено</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
         TemplateDeleteException_Unauthorized - менеджер не має прав на видалення шаблону
        </td>
    </tr>
    <tr>
        <td><b>Основний сценарій:</b></td>
        <td>
            <ol>
                <li>Менеджер обирає шаблон у розділі "Шаблони"</li>
                <li>Менеджер натискає кнопку "Видалити"</li>
                <li>Система перевіряє права менеджера(TemplateDeleteException_Unauthorized)</li>
                <li>Система запитує менеджера чи точно він хоче видалити шаблон</li>
                <li>Менеджер натискає кнопку "Видалити"</li>
                <li>Система видаляє шаблон</li>
            </ol>
        </td>
    </tr>
</table>

@startuml

    |Менеджер|
    start;
    :Обирає шаблон у розділі "Шаблони";
    :Натискає кнопку "Видалити";
    
    |Система|
    :Система перевіряє права менеджера
    <font color="red">**TemplateApplyException_Unauthorized**;
    :Система запитує менеджера чи точно він хоче видалити шаблон;

    |Менеджер|
    :Натискає кнопку "Видалити";

    |Система|
    :Система видаляє шаблон;

    |Менеджер|
    stop;

@enduml

### Support

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>Support</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Зв'язок з службою підтримки</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Менеджер/користувач, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
         Менеджер/користувач автентифікований у системі
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Менеджер/користувач надіслав запит до служби підтримки</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td></td>
    </tr>
    <tr>
        <td><b>Основний сценарій:</b></td>
        <td>
            <ol>
                <li>Менеджер/користувач натискає кнопку "Зв'язатися зі службою підтримки"</li>
                <li>Система відкриває форму для зв'язку зі службою підтримки</li>
                <li>Менеджер/користувач заповнює форму та натискає кнопку "Надіслати"</li>
            </ol>
        </td>
    </tr>
</table>

@startuml

    |Менеджер/користувач|
    start;
    :натискає кнопку "Зв'язатися зі службою підтримки";
    
    |Система|
    :Система відкриває форму для зв'язку зі службою підтримки;

    |Менеджер/користувач|
    :заповнює форму та натискає кнопку "Надіслати";

    |Менеджер/користувач|
    stop;

@enduml

### ProjectProgress

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>ProjectProgress</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Відслідковування прогресу виконання проєкту</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Менеджер/користувач, Система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
         Проєкт існує
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Вивід відсотку виконання проєкту</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td></td>
    </tr>
    <tr>
        <td><b>Основний сценарій:</b></td>
        <td>
            <ol>
                <li>Менеджер/користувач обирає проєкт у розділі "Проєкти"</li>
                <li>Система виводить відсоток виконання проєкту</li>
            </ol>
        </td>
    </tr>
</table>

@startuml

    |Менеджер/користувач|
    start;
    :обирає проєкт у розділі "Проєкти";
    
    |Система|
    :Система виводить відсоток виконання проєкту;

    |Менеджер/користувач|
    stop;

@enduml