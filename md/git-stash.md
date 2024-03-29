<< [На главную](../README.md)

# Git : Припрятывание (stash)

---

Навигация:

- [Git : Припрятывание (stash)](#git--припрятывание-stash)
  - [Git : Создание](#git--создание)
  - [Git : Список](#git--список)
  - [Git : Восстановление](#git--восстановление)
  - [Git : Удаление](#git--удаление)

---

<a id="stash"></a>

```bash
git stash   # прячем файлы
```

Набор команд, позволяющий «прятать» изменения файлов рабочей директории в специальное хранилище и восстанавливать их при необходимости.

## Git : Создание

```bash
git add .           # добавляем их в индекс
git stash           # помещаем их в хранилище
git stash push      # аналог команды выше
```

## Git : Список

```bash
git stash list      # список припрятываний

# stash@{0}: WIP on main: 049d078 _______
# stash@{1}: WIP on main: c264051 _______
# stash@{2}: WIP on main: 21d80a5 _______
```

## Git : Восстановление

```bash
# с удалением из stash-list
git stash pop               # восстановить последнее припрятывание
git stash pop stash@{1}     # восстановить конкретное припрятывание
```

```bash
# без удаления из stash-list
git stash apply             # восстановить последнее припрятывание
git stash apply stash@{1}   # восстановить конкретное припрятывание
```

## Git : Удаление

```bash
git stash drop              # удалить последнее припрятывание
git stash drop stash@{1}    # удалить конкретное припрятывание
```
