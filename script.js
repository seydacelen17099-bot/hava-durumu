 function temayiDegistir() {
            const govde = document.body;
            const buton = document.getElementById('btn-tema');
            
            govde.classList.toggle('gece-modu');
            
            if (govde.classList.contains('gece-modu')) {
                buton.textContent = "☀️ Gündüz Modu";
            } else {
                buton.textContent = "🌙 Gece Modu";
            }
        }
        function guncelle(derece, durum, ikon) {
    // 1. Yazıları ve ikonları her zamanki gibi güncelliyoruz
    document.getElementById('ana-derece').textContent = derece;
    document.getElementById('ana-durum').textContent = durum;
    document.getElementById('ana-ikon').textContent = ikon;

    // 2. ÖNCE TÜM RENKLERİ SİLİYORUZ (Eski günün rengi kalmasın diye)
    document.body.classList.remove('arka-plan-gunesli', 'arka-plan-yagmurlu', 'arka-plan-bulutlu');

    // 3. ŞİMDİ "O GÜNKÜ" HAVA DURUMUNA GÖRE RENGİ YANSITIYORUZ
    if (ikon === "☀️") {
        // Eğer tıkladığın gün güneşliyse güneşli rengini yansıt
        document.body.classList.add('arka-plan-gunesli');
    } else if (ikon === "🌧️") {
        // Eğer tıkladığın gün yağmurluysa yağmurlu rengini yansıt
        document.body.classList.add('arka-plan-yagmurlu');
    } else if (ikon === "⛅") {
        // Eğer tıkladığın gün bulutluysa (Pazartesi gibi) o rengi yansıt
        document.body.classList.add('arka-plan-bulutlu');
    }
}
    



  
   