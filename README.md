# Microfrontend single-spa latest version with Angular apps ver 7

Eksperimen awal menggunakan microfrontend dengan kondisi aplikasi versi jadul 

## Cara compile
1. Compile terlebih dahulu part-part aplikasinya

    ```npm run serve:home```

    ```npm run serve:my-app```

    ```npm run serve:child1```

    pastikan masing-masing command tersebut dijalankan di terminal yang berbeda-beda


2. Compile host microfrontendnya

    ```npm run start```

Tunggu semua aplikasi tercompile dengan sempurna, kemudian buka `localhost:9000`