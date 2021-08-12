myApp

# 環境のつくりかた

1. 適当な場所に `git clone`する
2. `cd learning_Nuxt`する
3. `myApp`直下に`.env`ファイルをつくって下の内容をコピペする 
4. `docker-compose build` する
5. `docker-compose run --rm frontend npx create-nuxt-app`する
6. `docker-compose up -d`する


-------.envの中身--------

WORKDIR=nuxt_app
CONTAINER_PORT=80
FRONT_PORT=3000

-------------------------

# Nuxtのオプションの意味

