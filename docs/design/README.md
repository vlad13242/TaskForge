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

      Role.name --d-* Role
      Role.ID --d-* Role

      Users "1,*" --u-"0,*" Members
      Members "1,*" --u-"1,*" Project
      Project "1,1" --u-"0,*" Task
      Task "1,*" --u-"0,*" Developers
      Developers "0,*" --u-"1,*" Users
      Role "1,1" --u-"1,1" Members

@enduml
