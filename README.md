# Microfrontend single-spa latest version with Angular apps ver 7

Eksperimen awal menggunakan microfrontend dengan kondisi aplikasi versi jadul (Angular 7.x.x)

## Persiapan
Untuk aplikasinya gunakan angular versi 7.x.x, dengan single-spa-angular v.3 beta.

Untuk Core antar aplikasinya gunakan single-spa versi 5.x.x, dan dengan NodeJS versi 16, karena command webpack banyak berjalan di node versi 12 keatas. 

Untuk bisa switch Node dengan mudah bisa menggunakan nvm package, nonton tutorialnya [disini](https://www.youtube.com/watch?v=WH0qowosEXw). Karena angularnya versi 7 yang kompatibel dengan NodeJS versi 10 dan single-spa 5 yang kompatibel dengan Node versi 12 keatas, sehingga cukup berguna ketika bisa switch versi Node dengan cepat.

Kelengkapan library bisa dicek di masing-masing aplikasinya. jika ada error <i>module not found</i>, bisa install saja masing-masing librarynya. 

Saya sendiri menggunakan **Node v.10** (untuk create angular app) dan **Node v.16** (untuk compile webpack / single-spa pada host app). Jika ingin belajar membuat single-spa dari awal, bisa menggunakan built-in ``create-single-spa`` dengan system **Node v.16**. Cara installnya seperti dibawah ini 
```
npm install -g create-single-spa
``` 
Selain itu dibutuhkan juga ``webpack-cli`` pada environment global. Install terlebih dahulu ``webpack-cli`` via **Node v.16** dengan
```
npm i -g webpack-cli
``` 

## Cara compile
1. Install dulu di masing-masing aplikasinya, termasuk di hostnya.
   
   ```
   npm install
   ``` 

   atau lebih mudah menggunakan command di root folder ini ``(mfe-angular)`` dengan:

   ```
   npm run install:all
   ```

   kemudian tunggu beberapa saat agar library-library terinstall dengan sempurna.

2. Compile terlebih dahulu part-part aplikasinya
    ```
    npm run serve:nav
    ```
    ```
    npm run serve:home
    ```

    ```
    npm run serve:my-app
    ```

    ```
    npm run serve:child1
    ```

    pastikan masing-masing command tersebut dijalankan di terminal yang berbeda-beda


3. Compile host microfrontendnya

    ```
    npm run start
    ```

    Tunggu semua aplikasi tercompile dengan sempurna, kemudian buka `localhost:9000`

    ![hasil compile](/screenshoot/first-single-spa-app.png "Ini hasil compile")

## Cara menambah Aplikasi Angular
1. Switch terlebih dahulu ke Node versi 10 menggunakan nvm use
2. buat aplikasi Angular 7 dengan command berikut:

    ```
    ng new [nama-aplikasi] --routing --defaults --prefix [nama-aplikasi]
    ```

3. Change directory ke ``[nama-aplikasi]``
4. kemudian tambahkan library single-spa-angular v.3 dengan command berikut

    ```
    ng add single-spa-angular@beta
    ```

5. Buka ``app.module.ts``, kemudian ubah sesuai dengan ini
    ```
        import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';

        import { AppRoutingModule } from './app-routing.module';
        import { AppComponent } from './app.component';
        import { EmptyRouteComponent } from './empty-route/empty-route.component';

        @NgModule({
        declarations: [
            AppComponent,
            EmptyRouteComponent // <-- tambahkan ini
        ],
        imports: [
            BrowserModule,
            AppRoutingModule
        ],
        providers: [],
        bootstrap: [AppComponent]
        })
        export class AppModule { }
    ```

6. Buka ``app-routing.module.ts``, ubah bagian ``routes`` dan ``providers`` seperti di bawah ini

    ```
    import { APP_BASE_HREF } from '@angular/common';
    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { EmptyRouteComponent } from './empty-route/empty-route.component';

    const routes: Routes = [{
    path: '**',
    component: EmptyRouteComponent
    }];

    @NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }

    ```

7. Buka ``package.json``. kemudian pada bagian ``script`` untuk ``serve:single-spa`` dan ``build:single-spa`` diubah portnya dari ``4200`` menjadi port yang belum digunakan (dalam hal ini ``4200``, ``4201``, ``4202`` sudah digunakan oleh aplikasi existing)

8. Kembali ke root folder. pada ``package.json`` buatlah script baru untuk install dan serve aplikasi yang baru dibuat.

    Misal aplikasi yang baru dibuat ada di folder ``child03`` maka script barunya adalah 
    ```
    "serve:child03": "cd ./child03 && npm run serve:single-spa"
    ```
    ```
    "install:child03": "cd ./child03 && npm i"
    ```

9. Jalankan aplikasi ``child03`` dengan
    
    ```
    npm run serve:child03
    ```

10. Buka folder simple host ``simple-host`` dan masuk ke file ``index.ejs``. Pada bagian ``imports`` yang ada di dalam tag ``<script type="systemjs-importmap">`` tambahkan aplikasi baru yang telah dibuat dan dijalankan tadi. 

    ```
    "child03":"//localhost:4203/main.js"
    ```

    Port ``4203`` ini disesuaikan dengan setting yang dilakukan di ``package.json`` di AngularApp pada step 7.

11. Selanjutnya buka file ``microfrontend-layout``. pada file main tambahkan aplikasi tadi dengan 
    ```
    <route path="child03">
      <application name="child03"></application>
    </route>
    ```

    untuk ``route path="child03"`` ini ketika menjalankan host aplikasinya akan terbuka pada path ``localhost:9000/child03``. Agar bisa muncul di ``localhost:9000/``, maka dapat menggunakan path ``route default``.

12. kembali ke root folder. Kembalilah ke Node versi 16 dan jalankan
    ``npm run start``. Aplikasi baru tadi dapat di jalankan di microfrontend single-spa

## Cara build
Demi keperluan build, repo ini dipecah menjadi beberapa repo yaitu:
1. [mfea7v2-root-app](https://github.com/damarkrisnandi/mfea7v2-root-app) sebagai host / root configuration
2. [mfea7v2-microapp-nav](https://github.com/damarkrisnandi/mfea7v2-microapp-nav) sebagai microapp navigation
3. [mfea7v2-microapp-home](https://github.com/damarkrisnandi/mfea7v2-microapp-home) sebagai microapp home app
4. [mfea7v2-microapp-myapp](https://github.com/damarkrisnandi/mfea7v2-microapp-myapp) sebagai microapp my-app
5. [mfea7v2-microapp-child1](https://github.com/damarkrisnandi/mfea7v2-microapp-child1) sebagai microapp child1

Juga hasil build yang berhasil bisa dilihat di sini -> [Demo](https://mfea7v2-root-app.vercel.app/)

Cara buildnya sebetulnya cukup mudah, namun sedikit tricky terutama di microappnya karena ada kondisi bahwa app membutuhkan module-module atau script yg hanya ada di dalam microapp.

Untuk masing-masing microappnya dibuild dengan cara di bawah ini

```
> node ./node_modules/@angular/cli/bin/ng build --prod --output-hashing none"
```

script diatas digunakan jika buildnya di local, untuk build di hosting / container gunakan script ini

```
> node ./node_modules/@angular/cli/bin/ng build --prod --output-hashing none --deploy-url "[link-url-microapp]"
```

Untuk root config dibuild dengan cara di bawah ini

```
npm run build:webpack
```

## What's Next?
1. Build Configuration
2. Sharing App (apakah component dan service yang ada di aplikasi yang berbeda bisa digunakan juga?)
3. Build optimization (apakah bisa dioptimize lagi?)
4. handling CORS (masih problem)
5. Custom URL yg diencrypt (masih problem juga)
