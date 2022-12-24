# Microfrontend single-spa latest version with Angular apps ver 7

Eksperimen awal menggunakan microfrontend dengan kondisi aplikasi versi jadul (Angular 7.x.x)

## Persiapan
Untuk aplikasinya gunakan angular versi 7.x.x, dengan single-spa-angular v.3 beta.

Untuk Core antar aplikasinya gunakan single-spa versi 5.x.x, dan dengan NodeJS versi 16, karena command webpack banyak berjalan di node versi 12 keatas. 

Untuk bisa switch Node dengan mudah bisa menggunakan nvm package, nonton tutorialnya [disini](https://www.youtube.com/watch?v=WH0qowosEXw). Karena angularnya versi 7 yang kompatibel dengan NodeJS versi 10 dan single-spa 5 yang kompatibel dengan Node versi 12 keatas, sehingga cukup berguna ketika bisa switch versi Node dengan cepat

## Cara compile
1. Install dulu di masing-masing aplikasinya, termasuk di hostnya.
   
   ```npm i``` 
2. Compile terlebih dahulu part-part aplikasinya

    ```npm run serve:home```

    ```npm run serve:my-app```

    ```npm run serve:child1```

    pastikan masing-masing command tersebut dijalankan di terminal yang berbeda-beda


3. Compile host microfrontendnya

    ```npm run start```

Tunggu semua aplikasi tercompile dengan sempurna, kemudian buka `localhost:9000`