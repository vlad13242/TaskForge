# Модель прецедентів

В цьому файлі необхідно перелічити всі документи, розроблені в проекті та дати посилання на них.

*Модель прецедентів повинна містити загальні оглядові діаграми та специфікації прецедентів.*



Вбудовування зображень діаграм здійснюється з використанням сервісу [plantuml.com](https://plantuml.com/). 

В markdown-файлі використовується опис діаграми

```md

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header
        <font size=24 color=black>Package: <b>UCD_3.0
    end header

    title
        <font size=18 color=black>UC_8. Редагувати конфігурацію порталу
        <font size=16 color=black>Діаграма прецедентів
    end title


    actor "Користувач" as User #eeeeaa
    
    package UCD_1{
        usecase "<b>UC_1</b>\nПереглянути список \nзвітів" as UC_1 #aaeeaa
    }
    
    usecase "<b>UC_1.1</b>\nЗастосувати фільтр" as UC_1.1
    usecase "<b>UC_1.2</b>\nПереглянути метадані \nзвіту" as UC_1.2  
    usecase "<b>UC_1.2.1</b>\nДати оцінку звіту" as UC_1.2.1  
    usecase "<b>UC_1.2.2</b>\nПереглянути інформацію \nпро авторів звіту" as UC_1.2.2
    
    package UCD_1 {
        usecase "<b>UC_4</b>\nВикликати звіт" as UC_4 #aaeeaa
    }
    
    usecase "<b>UC_1.1.1</b>\n Використати \nпошукові теги" as UC_1.1.1  
    usecase "<b>UC_1.1.2</b>\n Використати \nрядок пошуку" as UC_1.1.2
    usecase "<b>UC_1.1.3</b>\n Використати \nавторів" as UC_1.1.3  
    
    
    
    User -> UC_1
    UC_1.1 .u.> UC_1 :extends
    UC_1.2 .u.> UC_1 :extends
    UC_4 .d.> UC_1.2 :extends
    UC_1.2 .> UC_1.2 :extends
    UC_1.2.1 .u.> UC_1.2 :extends
    UC_1.2.2 .u.> UC_1.2 :extends
    UC_1 ..> UC_1.2.2 :extends
    
    
    UC_1.1.1 -u-|> UC_1.1
    UC_1.1.2 -u-|> UC_1.1
    UC_1.1.3 -u-|> UC_1.1
    
    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2020
    end footer

@enduml

**Діаграма прецедентів**

</center>
```

яка буде відображена наступним чином

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header
        <font size=24 color=black>Package: <b>UCD_3.0
    end header

    title
        <font size=18 color=black>UC_8. Редагувати конфігурацію порталу
        <font size=16 color=black>Діаграма прецедентів
    end title


    actor "Користувач" as User #eeeeaa
    
    package UCD_1{
        usecase "<b>UC_1</b>\nПереглянути список \nзвітів" as UC_1 #aaeeaa
    }
    
    usecase "<b>UC_1.1</b>\nЗастосувати фільтр" as UC_1.1
    usecase "<b>UC_1.2</b>\nПереглянути метадані \nзвіту" as UC_1.2  
    usecase "<b>UC_1.2.1</b>\nДати оцінку звіту" as UC_1.2.1  
    usecase "<b>UC_1.2.2</b>\nПереглянути інформацію \nпро авторів звіту" as UC_1.2.2
    
    package UCD_1 {
        usecase "<b>UC_4</b>\nВикликати звіт" as UC_4 #aaeeaa
    }
    
    usecase "<b>UC_1.1.1</b>\n Використати \nпошукові теги" as UC_1.1.1  
    usecase "<b>UC_1.1.2</b>\n Використати \nрядок пошуку" as UC_1.1.2
    usecase "<b>UC_1.1.3</b>\n Використати \nавторів" as UC_1.1.3  
    
    
    
    User -> UC_1
    UC_1.1 .u.> UC_1 :extends
    UC_1.2 .u.> UC_1 :extends
    UC_4 .d.> UC_1.2 :extends
    UC_1.2 .> UC_1.2 :extends
    UC_1.2.1 .u.> UC_1.2 :extends
    UC_1.2.2 .u.> UC_1.2 :extends
    UC_1 ..> UC_1.2.2 :extends
    
    
    UC_1.1.1 -u-|> UC_1.1
    UC_1.1.2 -u-|> UC_1.1
    UC_1.1.3 -u-|> UC_1.1
    
    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2020
    end footer

@enduml

**Діаграма прецедентів**

</center>

**Діаграма прецедентів**

</center>

# Сценарії використання

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

