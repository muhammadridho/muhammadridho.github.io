

window.onload = function(){
   
var dataRegistrasi =  {
    username : '@idsaga',
    password : '',
    email : '',
    nama : 'User Default',
    validasiUsername : false,
    validasiPassword : false,
    validasiEmail : false,
    validasiNama : false,
    posisiSekarang : '',
    dataNotes : [['Contoh Notes Presentasi','Jelaskan setidaknya tiga alasan kenapa audiens harus belajar mendesain slide presentasi, bisa','Presentasi'],                    ['Contoh Notes Makanan','Makanan yang sempurna adalah makanan yang dapat menyehatkan raga dan jiwa','Makan'],
                 ['Persiapan Berkemah','Untuk para anggota Pramuka Antasari untuk membawa Lampu, Kemah, dan Makanan','Berkemah']],
    PertamaPost : true,
    Teman : ['tony','ridho'],
    Notifikasi :[['Hai Bro!','Selamat datang di Hai Bro!','Pemberitahuan']],
    Notes:{
        Ridho : [['Persiapan Berkemah','Untuk para anggota Pramuka Antasari untuk membawa Lampu, Kemah, dan Makanan','Berkemah'],
                 ['Tips memasak Nasi Goreng','Jangan membiasakan menggunakan bumbu cepat saji, biasakan memakai bumbu tradisional','Makan']
                ],
        Tony : [['Film Kemarin','Nonton Ironman cukup asyik tapi lebih asyik nonton Civil war','Nonton'],
                 ['Olahraga Cepat','Setiap bangun tidur kedipkan mata selama 1 menit, lanjut cuci muka','Ngegym'],
                 ['Obat Tradisional Mujarab','Lebih sering memakan kurma atau habatus sauda, jangan sering begadang','Berobat']
                ]
    },
    KataShare : ['Hai, Notes mu sudah sampai ditempatku','Terima Kasih Kawan','Okay thanks buddy'],
    KataGetNotes : ['Sudah kamu cek notesnya ?','Semoga notesnya berguna untukmu','Coba liat cek Notes itu, bro']
    
}
    //Iniliasikan 
    var body = document.body,       
 elementHeaderFriends,
 elementContainer,
 menuButton,
 noticeButton,
 tombolHapus,
 inputJudul,
 textArea,
 pilihanTag,
 tombolSubmit,
 selectoption,
 kartunya,
 tombolBagikan,
 latarTransisiSukses,
 tombolTutup,
 tombolPilihNotes,
 table,
 spanNotif, 
tulisanSukses,
numberNotesChoose,
catatanKlik,
listNotes,
containerList,
catatanLayanan;

//init();//tes
    //Iniliasikan 
    
    var usernameInput = document.getElementById('username');
    var spanUsername = document.getElementById('user-info');
    
    var passwordInput = document.getElementById('password');
    var spanPassword = document.getElementById('password-info');
    
    var emailInput = document.getElementById('mail');
    var spanEmail = document.getElementById('mail-info');
    
    var tombolLogin = emailInput.nextElementSibling.nextElementSibling;
    
    
    var namaInput;
    var tombolNamaNext;
    
var validasi = function(){
    var namaInputIDnya = '';
    var tombolNamaSelanjutnya = '';
    
    this.cekNilai = function(target,input,nilai,inisial){
        
        if (input.length < nilai){
            target.innerHTML = inisial + " panjangnya harus lebih dari "+ nilai;
        }
        else if (input.length > nilai){
            switch(inisial){
                case "Email":
                    if (input.indexOf('@') != -1) {
                        target.innerHTML = inisial+" valid";
                        dataRegistrasi.email = input;
                        dataRegistrasi.validasiEmail = true;
                    }
                    else {
                        target.innerHTML = inisial + " belum valid";
                        dataRegistrasi.validasiEmail = false;
                    }
                break;
                case "Username":
                    if (input.search(/[a-z]/i) < 0){
                        target.innerHTML = inisial + "Harus mengandung huruf dan angka";
                        dataRegistrasi.validasiUsername = false;
                    }
                    else if (input.search(/[0-9]/i) < 0){
                        target.innerHTML = inisial + "Harus mengandung huruf dan angka";
                        dataRegistrasi.validasiUsername = false;
                    }
                    else if (input.search(/[!@#]/i) > 0){
                        target.innerHTML = inisial + "Tidak boleh memakai simbol";
                        dataRegistrasi.validasiUsername = false;
                    }
                    else{
                        target.innerHTML = "Data "+inisial+" benar";
                        dataRegistrasi.username = input;
                        dataRegistrasi.validasiUsername = true;
                      
                    }
                    
                break;
                case "Password":
                    if (input.search(/[a-z]/i) < 0){
                        target.innerHTML = inisial + "Harus mengandung huruf dan angka";
                        dataRegistrasi.validasiPassword = false;
                    }
                    else if (input.search(/[0-9]/i) < 0){
                        target.innerHTML = inisial + "Harus mengandung huruf dan angka";
                        dataRegistrasi.validasiPassword = false;
                    }
                    else {
                        target.innerHTML = "Data "+inisial+" benar";
                        dataRegistrasi.password = input;
                        dataRegistrasi.validasiPassword = true;
                    }
                break;
                
            
                default:
                    if (input.search(/[a-z]/i) < 0)
                        target.innerHTML = inisial + "Harus mengandung huruf dan angka";
                    else if (input.search(/[0-9]/i) < 0)
                        target.innerHTML = inisial + "Harus mengandung huruf dan angka";
                    else 
                        target.innerHTML = "Data "+inisial+" benar";
                break;
            }

        }
    }//Akhir fungsi cek nilai
    
    //Jika si User berhasil mendaftar
    this.cekKonfirmasi = function(){
        if (dataRegistrasi.validasiEmail == false || dataRegistrasi.validasiPassword == false || dataRegistrasi.validasiUsername == false )
            alert("data belum di isi dengan benar");
        else
            this.berhasilDaftar();
        
    }
    
     this.transisiKeAplikasi = function(arrElement){
        var body = document.body;
        var layarTransisi = document.createElement('div');
 
         
        layarTransisi.setAttribute('class','latarTransisi-phase');
        body.appendChild(layarTransisi);

        setTimeout(function(){
             layarTransisi.classList.add("terbuka");
         },1000);
         
         setTimeout(function(){
             arrElement.forEach(function(item){
             body.removeChild(item);
   
            })
            body.classList.add('body-Apps');
            
         },1500);
         setTimeout(function(){
             body.removeChild(layarTransisi);
             body.classList.remove('rataTengah');
             body.classList.remove('awal');
         },1900);
         setTimeout(function(){
           init();  
         },2200);
         
       
 
    }
    
    this.inputNamaBaru = function(input){
        if (input.length > 5){
            tombolNamaSelanjutnya.className = "btn-nama";
            animasiMuncul(tombolNamaSelanjutnya,400,'shake');
            dataRegistrasi.validasiNama = true;
        }
        else{
            tombolNamaSelanjutnya.className = "btn-nama";
            tombolNamaSelanjutnya.classList.add('btn-salah');
            animasiMuncul(tombolNamaSelanjutnya,400,'shake');
            dataRegistrasi.validasiNama = false;
        }
            
    }
    
    //Jika user berhasil login
    this.berhasilDaftar = function(){
        
        
        var body = document.body;
        var formnya = document.querySelector("#main-form");
        var logo = document.querySelector('#logo');
        var h2 = document.querySelector('h2');
        
        formnya.classList.add("animated");
        formnya.classList.add("bounceOut");
        dataRegistrasi.username = usernameInput.value;
        dataRegistrasi.email = emailInput.value;
        setTimeout(function(){
            
         body.removeChild(formnya);   
        },500);
        
        localStorage.HAiusername = dataRegistrasi.username;
        localStorage.HAIpassword = dataRegistrasi.password;
    
        //Membuat element untuk input username
        var divNama = document.createElement('input');
        divNama.setAttribute('type','text');
        var divNamaID = document.createAttribute('id');
        divNamaID.value = "namaMainID";
        
        divNama.setAttributeNode(divNamaID);
        
        divNama.setAttribute('name','namaUser');
        divNama.classList.add('namaText');
        namaInputIDnya = divNama;
        
        divNama.addEventListener('input',function(event){
            var data = event.target.value;
            cek.inputNamaBaru(data);
        })
        
        //Membuat element Label 
        var labelNama = document.createElement('label');
        labelNama.classList.add('labelNama');
        labelNama.innerHTML = "Masukkan Nama anda:  ";
        
        //Memuat div gambar
        var divPicNama = document.createElement('div');
        divPicNama.classList.add('labelUser');
        
        //Membuat tombol saya
        var tombolNama = document.createElement('button');
        tombolNama.classList.add('btn-nama');
        tombolNama.setAttribute('type','button');
        tombolNama.innerHTML = "LANJUT";
        
        tombolNamaSelanjutnya = tombolNama;
        
        tombolNamaSelanjutnya.addEventListener('click',function(){
          if (dataRegistrasi.validasiNama == true){
    
              dataRegistrasi.nama = namaInputIDnya.value;
             cek.transisiKeAplikasi([divNama,tombolNama,divPicNama,labelNama,logo,h2]); 
              
          }
        })
        
       animasiMuncul(divPicNama,1000,'bounceIn');
       animasiMuncul(labelNama,1500,'bounceIn');
       animasiMuncul(divNama,2000,'bounceIn')
       animasiMuncul(tombolNama,2300,'bounceIn');
        
        
        
        labelNama.classList = "labelNama";
        divNama.classList = "namaText";
        
        body.classList.add('rataTengah');
       
        
    }
    
   
    

       
 }
   
function animasiMuncul(elementnya,waktunya,animasinya){
    var elementnya = elementnya;
    var waktunya = waktunya;
    var body = document.body;
    setTimeout(function(){
        body.appendChild(elementnya);
        elementnya.classList.add('animated');
        elementnya.classList.add(animasinya);
    },waktunya)
}
    
function mempunyaiClass(element,classnya){
    return (' '+element.className+' ').indexOf(' '+classnya+' ') > -1;
}
    
    
var cek = new validasi();
    
    usernameInput.addEventListener('input',function(event){
       // spanUsername.innerHTML = event.target.value;
        var data = event.target.value;
        cek.cekNilai(spanUsername,data,6,'Username');
    });
    
    passwordInput.addEventListener('input',function(event){
        var data = event.target.value;
        cek.cekNilai(spanPassword,data,8,'Password');
    });
    
    emailInput.addEventListener('input',function(event){
        var data = event.target.value;
        cek.cekNilai(spanEmail,data,3,'Email');
    })
    
    tombolLogin.addEventListener('click',function(){
        cek.cekKonfirmasi();
    })
    
    if(tombolNamaNext != null){
    //alert("tes");
        
    }
    
    
if (window.Notification && Notification.permission !== "granted") {
    Notification.requestPermission(function (status) {
      if (Notification.permission !== status) {
        Notification.permission = status;
      }
    });
  }

     //Membuat halaman
        
function init(){
/* 
Fungsi init digunakan :
Untuk membuat transisi Animasi pada Aplikasi Ini
*/

      containerList = document.createElement('div');
      containerList.classList.add('notif-container');
      
      listNotes = document.createElement('ul');
      listNotes.classList.add('list-notif');
    
      for (var index = 0; index < 2;index++){
          var listMessage = document.createElement('li');
          var nama = index == 0 ? 'Ridho ' : 'Tony Stark ';
          var containerList1 = document.createElement('div');
          containerList1.classList.add('notif-column-1');
          var picList = document.createElement('div');
          picList.classList.add('profile-friends'+Number(index+1)+'-notif');
          containerList1.appendChild(picList);
          
          var containerList2 = document.createElement('div');
          containerList2.classList.add('notif-column-2');
          var h1 = document.createElement('h1');
          h1.classList.add('pesan-notif');
          h1.innerHTML = '<span>'+nama+'</span>Hey bro.now you can Share notes with me';
          var pesanIcon = document.createElement('div');
          pesanIcon.classList.add('notif-pesan-icon');
          
          containerList2.appendChild(h1);
          containerList2.appendChild(pesanIcon);
          

          
          listMessage.appendChild(containerList1);
          listMessage.appendChild(containerList2);          
          listNotes.appendChild(listMessage);
      }
      
      containerList.appendChild(listNotes);
      body.appendChild(containerList);
      
      var elementHeader = document.createElement('header');
      var headerLogo = document.createElement('h1');
      headerLogo.setAttribute('id','logo-header');
      headerLogo.innerHTML = "Hai Bro!";
      
      elementHeader.appendChild(headerLogo);         
      animasiMuncul(elementHeader,100,'fadeInDownBig');
     
      
      noticeButton = document.createElement('id');
      noticeButton.setAttribute('id','notice-button');
      
      noticeButton.addEventListener('click',tampilkanPesan);
      elementHeader.appendChild(noticeButton);
    
      var sampingDivNav = document.createElement('div');
      sampingDivNav.classList.add('samping-nav');
      animasiMuncul(sampingDivNav,500,'fadeInLeftBig');
      
      var ulSampingNav = document.createElement('ul');
      ulSampingNav.setAttribute('id','nav-samping');
      sampingDivNav.appendChild(ulSampingNav);
    
      elementContainer = document.createElement('div');
      elementContainer.classList.add('container');
    
      

      body.appendChild(elementContainer);
       
      //List yang akan ditampilkan pada Navbar yang disamping
      for (var index = 0 ;index < 3;index++){
          
          var listDiv = document.createElement('li');
          var spanIcon = document.createElement('span');
 
          listDiv.classList.add('side-list');
          spanIcon.classList.add('icon-nav');
          switch(index){
              case 0:
                  listDiv.innerHTML = 'Notes';
                  listDiv.classList.add('notes');
                  spanIcon.classList.add('note');
                  listDiv.classList.add('active');
              break;
              case 1:
                  listDiv.innerHTML = 'Profile';
                  listDiv.classList.add('biodata');
                  spanIcon.classList.add('profile');
              break;
              case 2:
                  
                  listDiv.classList.add('notes');
                  listDiv.innerHTML = 'Friends';
                  spanIcon.classList.add('teman');
              break;
              default:
              break;
                  
            
          }
       
          listDiv.appendChild(spanIcon);
       
          ulSampingNav.appendChild(listDiv);
          
      }
       spanNotif = document.createElement('span');
       spanNotif.classList.add('notif-baru');
        noticeButton.appendChild(spanNotif);
  //Untuk navigasi list  
  var selector, elems, makeActive;
  
            
  elems = ulSampingNav.children;
            
  makeActive = function () {
      
  var active = document.querySelector('.active');
  active.classList.remove('active');
  this.classList.add('active');
  var orangtua = this.parent;        

  };

  for (var i = 0; i < elems.length; i++){
        elems[i].addEventListener('mousedown', makeActive);
        elems[i].addEventListener('click',loadingBar);
        elems[i].addEventListener('mousedown', detectionList);
  }
    

     
}//Akhir fungsi Init
            
        
 function animasiMuncul(elementnya,waktunya,animasinya,objek){
     //Fungsi ini digunakan untuk memberikan animasi baru
  var elementnya = elementnya;
  var waktunya = waktunya;
  if (objek == undefined){
    var body = document.body;
    setTimeout(function(){
        body.appendChild(elementnya);
        elementnya.classList.add('animated');
        elementnya.classList.add(animasinya);
    },waktunya)
    /*
    setTimeout(function(){
        elementnya.classList.remove('animated');
        elementnya.classList.remove(animasinya);
    },5000+waktunya);
    */
  }
  else{
    var objek = objek;
    setTimeout(function(){
    objek.appendChild(elementnya);
        elementnya.classList.add('animated');
        elementnya.classList.add(animasinya);
    },waktunya)
    
    setTimeout(function(){
        elementnya.classList.remove('animated');
        elementnya.classList.remove(animasinya);
    },5000+waktunya);
  }
  
    
}//Akhir fungsi Animasi
            
function detectionList(){
    
    if(this.children[0].className == 'icon-nav teman' && dataRegistrasi.posisiSekarang != 'menu-teman'){
         pindahMenu();
        setTimeout(function(){openFriends()},1800);
        dataRegistrasi.posisiSekarang = 'menu-teman';
    }
    else if(this.children[0].className == 'icon-nav profile' && dataRegistrasi.posisiSekarang != 'menu-profile'){
        pindahMenu();
        setTimeout(function(){   openProfile()},1800);
        dataRegistrasi.posisiSekarang = 'menu-profile';
        
    }
    else if(this.children[0].className == 'icon-nav note' && dataRegistrasi.posisiSekarang != 'menu-notes'){
        pindahMenu();
        setTimeout(function(){ openNotes()}, 1800);
        dataRegistrasi.posisiSekarang = 'menu-notes';
    }
}
            
function openFriends(){
    
    elementHeaderFriends = document.createElement('div');
    elementHeaderFriends.classList.add('header-friends');
    animasiMuncul(elementHeaderFriends,300,'zoomInUp',elementContainer);

    
    var textFriends = document.createElement('h1');
    var subTextFriends = document.createElement('h1');
    textFriends.classList.add('judul-form');
    textFriends.innerHTML = "Let's share";
    subTextFriends.classList.add('subjudul-form');
    subTextFriends.innerHTML = 'Memo with your friends';
    
    animasiMuncul(textFriends,300,'fadeInUpBig',elementHeaderFriends);
    animasiMuncul(subTextFriends,500,'fadeInUpBig',elementHeaderFriends);
  
    var temanSatu = document.createElement('div');
    temanSatu.classList.add('card-friends');
    temanSatu.setAttribute('id','notes1');
    
    var profileTemanSatu = document.createElement('div');
    profileTemanSatu.classList.add('profile-friends1');
    
    var aboutFriendSatu = document.createElement('div');
    aboutFriendSatu.classList.add('about-friends1');
    
    var namaTemanSatu = document.createElement('h1');
    namaTemanSatu.classList.add('nama-friends');
    namaTemanSatu.innerHTML = 'Muhammad Ridho';
    
    var emailTemanSatu = document.createElement('h3');
    emailTemanSatu.classList.add('nama-nick');
    emailTemanSatu.innerHTML = '@idsaga50';
    
    var catatanTemanSatu = document.createElement('h4');
    catatanTemanSatu.classList.add('number-notes');
    catatanTemanSatu.innerHTML = dataRegistrasi.Notes.Ridho.length+" Notes";
    
    var shareFriendSatu = document.createElement('div');
    shareFriendSatu.classList.add('share-memo');
    shareFriendSatu.onclick = function(){
        tampilkanNotes();
        catatanKlik = 'Ridho';
        catatanLayanan = 'share';
       
    }
    
    
    var viewMemoSatu = document.createElement('div');
    viewMemoSatu.classList.add('block-memo');
    viewMemoSatu.addEventListener('click',function(){
        ambilNotes('Ridho');
         catatanKlik = 'Ridho';
        catatanLayanan = 'get';
    })
    
    aboutFriendSatu.appendChild(namaTemanSatu);
    aboutFriendSatu.appendChild(emailTemanSatu);
    aboutFriendSatu.appendChild(catatanTemanSatu);
    aboutFriendSatu.appendChild(shareFriendSatu);
    aboutFriendSatu.appendChild(viewMemoSatu);
    
    animasiMuncul(temanSatu,1200,'bounceIn',elementHeaderFriends);
    
    
    temanSatu.appendChild(profileTemanSatu);
    temanSatu.appendChild(aboutFriendSatu);
 
    
    var temanDua = document.createElement('div');
    temanDua.classList.add('card-friends');
    temanDua.setAttribute('id','notes2');
    
    var profileTemanDua = document.createElement('div');
    profileTemanDua.classList.add('profile-friends2');
    
    var aboutFriendDua = document.createElement('div');
    aboutFriendDua.classList.add('about-friends1');
    
    var namaTemanDua = document.createElement('h1');
    namaTemanDua.classList.add('nama-friends');
    namaTemanDua.innerHTML = 'Tony Stark';
    
    var emailTemanDua = document.createElement('h3');
    emailTemanDua.classList.add('nama-nick');
    emailTemanDua.innerHTML = '@tonystark';
    
    var catatanTemanDua = document.createElement('h4');
    catatanTemanDua.classList.add('number-notes');
    catatanTemanDua.innerHTML = dataRegistrasi.Notes.Tony.length+" Notes";
    
    var shareFriendDua = document.createElement('div');
    shareFriendDua.classList.add('share-memo');
    
    shareFriendDua.onclick = function(){
        tampilkanNotes();
        catatanKlik = 'Tony';
        catatanLayanan = 'share';
    }
 
    
    var viewMemoDua = document.createElement('div');
    viewMemoDua.classList.add('block-memo');
    
    viewMemoDua.addEventListener('click',function(){
        ambilNotes('Tony');
        catatanKlik = 'Tony';
        catatanLayanan = 'get';
    })
       
    aboutFriendDua.appendChild(namaTemanDua);
    aboutFriendDua.appendChild(emailTemanDua);
    aboutFriendDua.appendChild(catatanTemanDua);
    aboutFriendDua.appendChild(shareFriendDua);
    aboutFriendDua.appendChild(viewMemoDua);
    
    animasiMuncul(temanDua,1400,'bounceIn',elementHeaderFriends);
    
    
    temanDua.appendChild(profileTemanDua);
    temanDua.appendChild(aboutFriendDua);
 
    
    
    
    
}

function openProfile(){
    /*
            <div class="container">
            <div class="card-profile">
                
                <div class="bg-user"></div>
                <div class="profil-pic"></div>
                <h1 class="nama-user">Muhammad Ridho</h1>
                <h3 class="email-user">@idsaga50</h3>
                <div class="bar-data"></div>
                <p class="text-data">(6 / 12) Notes</p>
            </div>
  
        </div>
        */
    
    var cardProfile = document.createElement('div');
    cardProfile.classList.add('card-profile');
    
    var backgroundUser = document.createElement('div');
    backgroundUser.classList.add('bg-user');
    cardProfile.appendChild(backgroundUser);
    
    var profilePicture = document.createElement('div');
    profilePicture.classList.add('profil-pic');
    cardProfile.appendChild(profilePicture);
    
    var namaProfile = document.createElement('h1');
    namaProfile.classList.add('nama-user');
    namaProfile.innerHTML = dataRegistrasi.nama;
    cardProfile.appendChild(namaProfile);
    
    var emailProfile = document.createElement('h3');
    emailProfile.classList.add('email-user');
    emailProfile.innerHTML = dataRegistrasi.username;
    cardProfile.appendChild(emailProfile);
    
    
    var barData = document.createElement('div');
    barData.classList.add('bar-data');
    cardProfile.appendChild(barData);
    
    var textData = document.createElement('p');
    textData.classList.add('text-data');
    textData.innerHTML = dataRegistrasi.dataNotes.length+ " Notes";
    cardProfile.appendChild(textData);
    
    animasiMuncul(cardProfile,400,'bounceIn',elementContainer);
}//Akhir 
              

              
function openNotes(){
    
    /*
            <div class="header-notes">
                <h1 class="judul-form">Create notes</h1>
                <h3 class="subjudul-form">For every moment</h3>
            </div>
            
             <div class="card-writer">
               <input class="input-judul" type="text" maxlength="35" placeholder="Title"/>
               <textarea placeholder="Your notes..." class="input-isi" cols="50" rows="4"></textarea>
               <div class="custom-dropdown">          
    <select>    
        <option>Presentasi</option>
        <option>Berlibur</option>  
        <option>Berkerja</option>
    </select>
</div>
               <div class="submit-notes">posting</div>
                 */
    
    kartunya = [];
    var cardWriter = document.createElement('div');
    cardWriter.classList.add('card-writer');
    
    inputJudul = document.createElement('input');
    inputJudul.setAttribute('type','text');
    inputJudul.setAttribute('maxlength','35');
    inputJudul.setAttribute('placeholder','Title');
    inputJudul.classList.add('input-judul');
    
    textArea = document.createElement('textarea');
    textArea.setAttribute('placeholder','Your notes ...');
    textArea.setAttribute('cols','50');
    textArea.setAttribute('rows','4');
    textArea.classList.add('input-isi');
    
    var customDropDown = document.createElement('div');
    customDropDown.classList.add('custom-dropdown');
    
    selectoption = document.createElement('select');
     
    selectoption.appendChild(new Option("Presentasi","Presentasi"));
    selectoption.appendChild(new Option("Berlibur","Berlibur"));
    selectoption.appendChild(new Option("Berkemah","Berkemah"));
    selectoption.appendChild(new Option("Berkerja","Berkerja"));
    selectoption.appendChild(new Option("Makan","Makan"));
    selectoption.appendChild(new Option("Berbelanja","Berbelanja"));
    selectoption.appendChild(new Option("Berobat","Berobat"));
    selectoption.appendChild(new Option("Ngegym","Ngegym"));
    selectoption.appendChild(new Option("Nonton","Nonton"));
    customDropDown.appendChild(selectoption);
    
    tombolSubmit = document.createElement('div');
    tombolSubmit.classList.add('submit-notes');
    tombolSubmit.innerHTML = 'POSTING NOTES';
    tombolSubmit.onclick = function(){
        simpanNotes();
    }
    
    cardWriter.appendChild(inputJudul);
    cardWriter.appendChild(textArea);
    cardWriter.appendChild(customDropDown);
    cardWriter.appendChild(tombolSubmit);
    
    
   
    var elementHeaderNotes = document.createElement('div');
    elementHeaderNotes.classList.add('header-notes');
    
    var judulHeaderNotes = document.createElement('h1');
    judulHeaderNotes.classList.add('judul-form');
    judulHeaderNotes.innerHTML = 'Create notes';

    
    var subjudulHeaderNotes = document.createElement('h3');
    subjudulHeaderNotes.classList.add('subjudul-form');
    subjudulHeaderNotes.innerHTML = 'For every moment';

    
    animasiMuncul(elementHeaderNotes,300,'zoomInUp',elementContainer);
    animasiMuncul(judulHeaderNotes,300,'fadeInUpBig',elementHeaderNotes);
    animasiMuncul(subjudulHeaderNotes,500,'fadeInUpBig',elementHeaderNotes);
    animasiMuncul(cardWriter,700,'bounceIn',elementContainer);
    
    tombolHapus = [];
    
    for (var index = 1; index <= dataRegistrasi.dataNotes.length ; index++){
        var cardsNotes = document.createElement('div');
        cardsNotes.classList.add('card-notes');
        
        var judulNotes = document.createElement('h2');
        judulNotes.classList.add('judul-cards');
        judulNotes.innerHTML = dataRegistrasi.dataNotes[index - 1][0];
        
        var gambarNotes =document.createElement('div');
        gambarNotes.classList.add('gambar');
        gambarNotes.classList.add(dataRegistrasi.dataNotes[index - 1][2]);
        
        var isiNotes = document.createElement('h5');
        isiNotes.classList.add('isi-cards');
        isiNotes.innerHTML = dataRegistrasi.dataNotes[index - 1][1];
        
        var classBawahNotes = document.createElement('div');
        classBawahNotes.classList.add('bawah-card');
        
        var tagCards = document.createElement('p');
        tagCards.classList.add('tag-card');
        tagCards.innerHTML = dataRegistrasi.dataNotes[index - 1][2];
        
        var hapusCards = document.createElement('div');
        hapusCards.classList.add('hapus-card');
        
        tombolHapus.push(hapusCards);
    
        
        tombolHapus[index - 1].addEventListener('click',cobaHapus)
        
        
        classBawahNotes.appendChild(tagCards);
        classBawahNotes.appendChild(hapusCards);
        
        cardsNotes.appendChild(judulNotes);
        cardsNotes.appendChild(gambarNotes);
        cardsNotes.appendChild(isiNotes);
        cardsNotes.appendChild(classBawahNotes);
        cardsNotes.setAttribute('id','Notes'+String(index-1));
        
   
         kartunya.push(hapusCards.parentElement.parentElement);
        
        animasiMuncul(cardsNotes,900 * index,'bounceIn', elementContainer);
    }
}
              
function cobaHapus(){
    var targetNotes = this.parentElement.parentElement;
    var dataNotes = this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    var nomorIndex = 0;
    
    for (var index = 1; index <= dataRegistrasi.dataNotes.length;index++){
        if (dataRegistrasi.dataNotes[index - 1].indexOf(dataNotes) != -1)
            nomorIndex = index - 1;
    }
 
    dataRegistrasi.dataNotes.splice(nomorIndex,1);
   
    
    targetNotes.classList.remove('bounceIn');
    targetNotes.classList.remove('animated');
    setTimeout(function(){
        targetNotes.classList.add('animated');
        targetNotes.classList.add('bounceOut');
    },500);
    
    setTimeout(function(){
        elementContainer.removeChild(targetNotes);
    },3000);
   
}
              
            
           
function pindahMenu(pilihan){
    if (body.contains(latarTransisiSukses) === true){
          body.removeChild(latarTransisiSukses);
    }

 if (pilihan == undefined){
    var latarTransisi = document.createElement('div');
        latarTransisi.classList.add('latar-transisi');
        animasiMuncul(latarTransisi,200,'fadeInUp');
            
        setTimeout(function(){
        latarTransisi.classList.remove('fadeInUp');
    },300);
               setTimeout(function(){
       latarTransisi.classList.add('fadeOutDown');
    },1500);
     
    setTimeout(function(){
        body.removeChild(latarTransisi);
    },1800);

    

 }else{
        var latarTransisi = document.createElement('div');
        latarTransisi.classList.add('latar-tersimpan');
        var picSucces = document.createElement('div');
        picSucces.classList.add('succes-pic');
        var tulisanSukses = document.createElement('h1');
        tulisanSukses.classList.add('succes-tag');
        tulisanSukses.innerHTML = 'Notes baru telah disimpan';
        latarTransisi.appendChild(picSucces);
        latarTransisi.appendChild(tulisanSukses);
     
        animasiMuncul(latarTransisi,200,'fadeInUp');
            
        setTimeout(function(){
        latarTransisi.classList.remove('fadeInUp');
    },300);
               setTimeout(function(){
        latarTransisi.classList.add('fadeOutDown');
    },1500);
      setTimeout(function(){
        body.removeChild(latarTransisi);
    },1800);
     
 }
latarTransisi.classList.remove('animated');

body.removeChild(elementContainer);
elementContainer = document.createElement('div');
elementContainer.classList.add('container');
body.appendChild(elementContainer);
    
} //Transisi jika pindah menu
              

function simpanNotes() {
  if (inputJudul.value.length != 0 || textArea.value.length != 0){
    var dataBaru = [inputJudul.value,textArea.value,selectoption.value];
    if (dataRegistrasi.PertamaPost === true){
        munculkanNotifikasi("Selamat karena telah membuat notes petama");
        dataRegistrasi.PertamaPost = false;
    }
    else{
        munculkanNotifikasi("Notes "+inputJudul.value+" telah ditambahkan");
    }
    dataRegistrasi.dataNotes.push(dataBaru);
    loadKembali();
  }
 
} 
function loadKembali(){
    inputJudul.value = "";
    textArea.value = "";
    pindahMenu('tersimpan');
    setTimeout(function(){ openNotes()}, 1800);
    dataRegistrasi.posisiSekarang = 'menu-notes';
    
}

function tampilkanNotes(){
        tombolPilihNotes = [];
        latarTransisiSukses = document.createElement('div');
        latarTransisiSukses.classList.add('latar-tersimpan');
        
        tulisanSukses = document.createElement('h1');
        tulisanSukses.classList.add('choose-memo');
        tulisanSukses.innerHTML = 'Select the Notes you want to share';
        
        table = document.createElement('table');
        
        
        tombolTutup = document.createElement('div');
        tombolTutup.classList.add('close-button-form');
        tombolTutup.onclick = function(){
             setTimeout(function(){
               latarTransisiSukses.classList.add('bounceOut');  
            },300);
           setTimeout(function(){
               body.removeChild(latarTransisiSukses); 
            },800);
        }
        latarTransisiSukses.appendChild(tulisanSukses);
        latarTransisiSukses.appendChild(tombolTutup);
        for (var i = dataRegistrasi.dataNotes.length -  1;i >= 0;i--){
            var tr = document.createElement('tr');
            var td = document.createElement('td');
            td.innerHTML = dataRegistrasi.dataNotes[i][0];
            
            tr.appendChild(td);
            table.appendChild(tr);
            tombolPilihNotes.push(tr);
            tr.onclick = function(){
                mengirimNotes();
            }
        }
        latarTransisiSukses.appendChild(table);
        
     
        
    
       animasiMuncul(latarTransisiSukses,200,'fadeInUp'); 
    
        setTimeout(function(){
        latarTransisiSukses.classList.remove('fadeInUp');
    },300);

              
}
              
function spawnNotification(theBody, theIcon, theTitle) {
  var options = {
    body: theBody,
    icon: theIcon
  }
  var n = new Notification(theTitle, options);
  setTimeout(n.close.bind(n), 4000);
}
              
function mengirimNotes(kalimatnya,status){
    var kalimatnya = kalimatnya === undefined ? 'Note has been sent' : kalimatnya;
    var status = status == undefined ? 'succes-pic' : 'error-pic';
    table.classList.add('animated');
    table.classList.add('bounceOut');
    tulisanSukses.classList.add('animated');
    tulisanSukses.classList.add('bounceOut');
    setTimeout(function(){
        latarTransisiSukses.removeChild(table);
        var picSucces = document.createElement('div');
        picSucces.classList.add(status);
        picSucces.classList.add('send-succes-notes');
        var tulisanSukses = document.createElement('h1');
        tulisanSukses.classList.add('succes-tag');
        tulisanSukses.innerHTML = kalimatnya ;
        
        animasiMuncul(picSucces,300,'bounceIn',latarTransisiSukses);
        animasiMuncul(tulisanSukses,300,'bounceIn',latarTransisiSukses);
        loadingBar();
    },700);
     setTimeout(function(){
                
               latarTransisiSukses.classList.add('bounceOut');  
            },2500);
           setTimeout(function(){
               body.removeChild(latarTransisiSukses); 
            },2600);
        if (!noticeButton.contains(spanNotif)){
                spanNotif = document.createElement('span');
                spanNotif.classList.add('notif-baru');
                noticeButton.appendChild(spanNotif);
        }
    tambahNotifikasi(catatanKlik,'Berhasil');

}
              
function ambilNotes(namaNotes){
    var namaNotes = namaNotes == 'Ridho' ? dataRegistrasi.Notes.Ridho : dataRegistrasi.Notes.Tony;
    numberNotesChoose = [];

        tombolPilihNotes = [];
        latarTransisiSukses = document.createElement('div');
        latarTransisiSukses.classList.add('latar-tersimpan');
        
        tulisanSukses = document.createElement('h1');
        tulisanSukses.classList.add('choose-memo');
        tulisanSukses.innerHTML = 'Select the Notes you want to get';
        
        latarTransisiSukses.appendChild(tulisanSukses);
        table = document.createElement('table');
        
        
        tombolTutup = document.createElement('div');
        tombolTutup.classList.add('close-button-form');
        tombolTutup.onclick = function(){
            setTimeout(function(){
               latarTransisiSukses.classList.add('bounceOut');  
            },300);
           setTimeout(function(){
               body.removeChild(latarTransisiSukses); 
            },800);
        }
        latarTransisiSukses.appendChild(tulisanSukses);
        latarTransisiSukses.appendChild(tombolTutup);
        for (var i = namaNotes.length -  1;i >= 0;i--){
            var tr = document.createElement('tr');
            var td = document.createElement('td');
            td.innerHTML = namaNotes[i][0];
            tr.appendChild(td);
            table.appendChild(tr);
            tombolPilihNotes.push(tr);
            tr.onclick = function(){
            
               
            }
        }
        latarTransisiSukses.appendChild(table);
    
        animasiMuncul(latarTransisiSukses,200,'fadeInUp'); 
    
        setTimeout(function(){
        latarTransisiSukses.classList.remove('fadeInUp');
    },300);

    tombolPilihNotes.forEach(function(item){
        item.addEventListener('click',validasiAmbilData);
    })
    
    
        
}

function validasiAmbilData(){
    var notesYangDiambil = this.children[0].textContent;
    var sudahAda = false;
    var array = this.parentElement.children,
        nomor = 0;
    
    for (var index = 0; index < dataRegistrasi.dataNotes.length; index++){
        if (notesYangDiambil == dataRegistrasi.dataNotes[index][0]){
            sudahAda = true;
           
        }
    }
    if (sudahAda === false){
        if (catatanKlik == 'Ridho'){
            for (var index = 0; index < dataRegistrasi.Notes.Ridho.length ;index++){
                if (dataRegistrasi.Notes.Ridho[index][0] == notesYangDiambil){
                    nomor = index;
                }
               
            }
             dataRegistrasi.dataNotes.push(dataRegistrasi.Notes.Ridho[nomor])      
        }else{
            for (var index = 0; index < dataRegistrasi.Notes.Tony.length ;index++){
                if (dataRegistrasi.Notes.Tony[index][0] == notesYangDiambil){
                    nomor = index;
                }
            }
            dataRegistrasi.dataNotes.push(dataRegistrasi.Notes.Tony[nomor])
        }
        mengirimNotes('Notes successfully to retrieved');
     
    }else{
        mengirimNotes('Notes has been already','error');
    }
   
    
}

              
function munculkanNotifikasi(pesan,pengirim,gambar){
    var pengirim = pengirim === undefined ? 'Hai Bro!': pengirim;
    var gambar = gambar === undefined ? "asset/logo.png" : gambar;
    
               if("Notification" in window){
                    if(Notification.permission == "granted")
                    {
                        var notification = new Notification(pengirim, {"body":pesan, "icon":gambar});
                        setTimeout(notification.close.bind(notification), 4000);
                    }
                    else
                    {
                        Notification.requestPermission(function (permission) {
                            if (permission === "granted") 
                            {
                                var notification = new Notification("Hai Bro!", {"body":pesan, "icon":"asset/logo.png"});
                            }
                        });
                    }
                }   
                else
                {
                    alert("Hai Bro! : Maaf browser tidak mendukung");
                }       
            }
            
   
            
            function loadingBar(){
                var loading = document.createElement('div');
                    loading.classList.add('loading');
                
                var body = document.body;
                     setTimeout(function(){
                    body.appendChild(loading);
                },200);
                
                setTimeout(function(){
                    body.removeChild(loading);
                },1600);
                
            }
    function tampilkanPesan(){
        if (containerList.style.opacity == 0){
           containerList.style.opacity = 1;
           containerList.style.zIndex = 1000;
        }else{
            containerList.style.opacity = 0;
             containerList.style.zIndex = -2;
        }
        if (noticeButton.contains(spanNotif)){
            noticeButton.removeChild(spanNotif);
        }
    }
        
       var list = document.querySelector('.side-list');
              
    function tambahNotifikasi(nama,pesan){
        
          var listMessage = document.createElement('li');
          var nama = catatanKlik;
          var nomorGambar = catatanKlik ==  'Ridho' ? 1 : 2;
          var containerList1 = document.createElement('div');
          var katanya = catatanLayanan == 'share' ? dataRegistrasi.KataShare : dataRegistrasi.KataGetNotes;
        
          containerList1.classList.add('notif-column-1');
          var picList = document.createElement('div');
          picList.classList.add('profile-friends'+nomorGambar+'-notif');
          containerList1.appendChild(picList);
          
          var containerList2 = document.createElement('div');
          containerList2.classList.add('notif-column-2');
          var h1 = document.createElement('h1');
          h1.classList.add('pesan-notif');
          h1.innerHTML = '<span>'+nama+'</span> '+katanya[angkaAcak(0,2)];
          var pesanIcon = document.createElement('div');
          pesanIcon.classList.add('notif-pesan-icon');
          
          containerList2.appendChild(h1);
          containerList2.appendChild(pesanIcon);
          

          
          listMessage.appendChild(containerList1);
          listMessage.appendChild(containerList2);          
          listNotes.appendChild(listMessage);
    }
    function angkaAcak(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
          
 
    
    
}