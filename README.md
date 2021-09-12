myApp

# 環境のつくりかた

1. 適当な場所に `git clone`する
2. `cd learning_Nuxt`する
3. `myApp`直下に`.env`ファイルをつくって下の内容をコピペする 
4. `docker-compose build` する
5. `docker-compose run --rm frontend npx create-nuxt-app`する
6. `docker-compose up -d`する
7. コンテナに入る時`docker-compose exec frontend sh`


## 人のを見るとき

### ※.env等の設定ファイルがないと動かないので、
### 見たい場合はまずそのファイルを共有してもらってください
1. 見たいbranchをpullする
2. dockerコンテナの状態によって分岐
    a. dockerコンテナが起動できる場合
        - dockerコンテナ内に入る
        - プロジェクトが普通に立ち上がる場合
            - そのまま使用
        - エラーが出る場合
            - node-modulesを削除する
            - node-moduleを削除した場合は`yarn install`する（不要な場合もあり）
    b. dockerコンテナが起動できない場合
        - dockerコンテナを削除
        - node-modulesを削除
        - `docker-compose build`
        - `docker-compose run --rm frontend yarn install`
3. `docker-compose up -d`
4. 設定ファイルがある場合は共有してもらってください
5. 以降は普通に使えます


-------.envの中身--------

WORKDIR=nuxt_app
CONTAINER_PORT=80
FRONT_PORT=3000

-------------------------


