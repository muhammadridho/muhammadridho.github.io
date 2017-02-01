## PSEUDOCODE Game Quiz

MASUKKAN 'soalPertama' yang didalamnya ada 'soal' , 'jawaban', 'kategori pelajaran' dan 'pilihan'
MASUKKAN 'soalKedua' yang didalamnya ada 'soal' , 'jawaban', 'kategori pelajaran' dan 'pilihan'
MASUKKAN 'soalKetiga' yang didalamnya ada 'soal' , 'jawaban', 'kategori pelajaran' dan 'pilihan'
MASUKKAN 'soalKeempat' yang didalamnya ada 'soal' , 'jawaban', 'kategori pelajaran' dan 'pilihan'
MASUKKAN 'soalKelima' yang didalamnya ada 'soal' , 'jawaban', 'kategori pelajaran' dan 'pilihan'

MASUKAN 'soalPertama' hingga ke 'soalKelima' kedalam array 'BankSoal'

BUAT sebuah fungsi untuk menampilkan 'pilihan' yang akan menampilkan pilihan dengan parameter 'nomor soal' dan 2 buah pilihan

TAMPILKAN 'nomor' lalu BUAT sebuah 'list' untuk 'nomor' yang akan dilalui user
    JIKA 'nomor' saat ini adalah nomor 1  BERIKAN class 'active' untuk nomor 
    
JALANKAN fungsi transisi soal

BUAT  fungsi 'transisi soal' :
    ANIMASIKAN 'h1' dengan animasi fade in dan waktu 1000 ms dan delay 500 ms
    ANIMASIKAN id 'soal'  dengan animasi fade in dan waktu 1000 ms dan delay 500 ms
    ANIMASIKAN id 'pilihan A'  dengan animasi fade in dan waktu 1000 ms dan delay 500 ms
    ANIMASIKAN id 'pilihan B'  dengan animasi fade in dan waktu 1000 ms dan delay 500 ms
    
    Hapus list di jenis 'kategori pelajaran'
    
    ULANGI dari index 0 sampai jumlah_soal penambahan 1
        AMBIL KASUS sesuai 'kategori pelajaran'
            jika "social"
                TAMBAHKAN list di id 'jenis' dengan class 'social' dan ANIMASIKAN 'fade in' dengan waktu 'index sekarang * 1000ms'
            selesai 
            jika "science"
                TAMBAHKAN list di id 'jenis' dengan class 'science' dan ANIMASIKAN 'fade in' dengan waktu 'index sekarang * 1000ms'
            selesai 
            jika "nature"
                TAMBAHKAN list di id 'jenis' dengan class 'nature' dan ANIMASIKAN 'fade in' dengan waktu 'index sekarang * 1000ms'
            selesai 
           jika "math"
                TAMBAHKAN list di id 'jenis' dengan class 'math' dan ANIMASIKAN 'fade in' dengan waktu 'index sekarang * 1000ms'
            selesai 
            jika "logic"
                TAMBAHKAN list di id 'jenis' dengan class 'logic' dan ANIMASIKAN 'fade in' dengan waktu 'index sekarang * 1000ms'
            selesai 
            DEFAULT
                TAMBAHKAN list di id 'jenis' dengan tanpa class dan ANIMASIKAN 'fade in' dengan waktu 'index sekarang * 1000ms'
            selesai 
            
ASOSIASIKAN var 'jika' dengan method 'kondisi'


BUAT Method JIKA SOAL
        BUAT FUNGSI lanjut dengan parameter 'kondisi'
            JIKA 'nomorSekarang' bukan 'nomor' 5
                TAMBAH 'nomorSekarang' dengan 1
                UBAH element 'Soal' dengan mengambil 'soal' berdasarkan index
                UBAH element 'nomorSoal' dengan 'nomorSekarang'
                
                AMBIL Kasus berdasarkan 'nomorSekarang':
                    Kasus nomor 2:
                    JIKA 'jawaban' benar
                    PANGGIL method 'jika'.jawabanBenar dengan paramter 'nilai1' dan 'nomor2'
                    JIKA 'jawaban' salah
                    PANGGIL method 'jika'.jawabanBenar dengan paramter 'nilai1' dan 'nomor2'
                    Kasus nomor 3:
                    JIKA 'jawaban' benar
                    PANGGIL method 'jika'.jawabanBenar dengan paramter 'nilai2' dan 'nomor3'
                    JIKA 'jawaban' salah
                    PANGGIL method 'jika'.jawabanBenar dengan paramter 'nilai2' dan 'nomor3'
                     Kasus nomor 4:
                    JIKA 'jawaban' benar
                    PANGGIL method 'jika'.jawabanBenar dengan paramter 'nilai3' dan 'nomor4'
                    JIKA 'jawaban' salah
                    PANGGIL method 'jika'.jawabanBenar dengan paramter 'nilai3' dan 'nomor4'
                     Kasus nomor 5:
                    JIKA 'jawaban' benar
                    PANGGIL method 'jika'.jawabanBenar dengan paramter 'nilai4' dan 'nomor5'
                    JIKA 'jawaban' salah
                    PANGGIL method 'jika'.jawabanBenar dengan paramter 'nilai4' dan 'nomor5'
                     Kasus nomor 6:
                    JIKA 'jawaban' benar
                    PANGGIL method 'jika'.jawabanBenar dengan paramter 'nilai5' 
                    JIKA 'jawaban' salah
                    PANGGIL method 'jika'.jawabanBenar dengan paramter 'nilai5'
                    DEFAULT
                    KOSONGKAN
                    
             END CASE
             
            PANGGIL tampilkanPilihan dengan parameter 'Banksoal' dan 'NomorSekarang'
        END FUNCTION
        BUAT FUNGSI selesai
            UBAH element 'score' dengan 'nilai sekarang'
            TAMBAHKAN class 'terbuka' Di class 'latar'
            
            
ASOSIASIKAN 'jika soal' dengan variabel soalnya


BUAT fungsi jika id 'pilih' di 'click' 
    JIKA checkbox 'a' atau checkbox 'b' di 'check'
        JIKA checkbox 'a' diklik masukkan pilihan 'a'
        JIKA checkbox 'b' diklik masukkan pilihan 'b'
        
        JIKA jawaban benar
            PANGGIL soalnya.lanjut() dengan parameter 'benar'
        JIKA jawaban salah
            PANGGIL soalnya.lanjut() dengan parameter 'salah'
            
    END IF
    JIKA checkbox tidak diklik
        tampilkan peringatan 'anda belum mengklik apapun'
        
        
            
                    
                    
                    

    
    